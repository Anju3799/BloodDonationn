import oracledb from 'oracledb';
import { getConnection } from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function register(req, res) {
    let connection;
    try {
        const { username, email, password, user_type } = req.body;

        if (!username || !email || !password || !user_type) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format'
            });
        }

        // User type validation
        if (!['DONOR', 'RECEIVER', 'ADMIN'].includes(user_type.toUpperCase())) {
            return res.status(400).json({
                success: false,
                message: 'User type must be DONOR, RECEIVER, or ADMIN'
            });
        }

        connection = await getConnection();

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Oracle uses :paramName for named parameters
        const result = await connection.execute(
            `INSERT INTO blood_users (username, email, password, user_type) 
             VALUES (:username, :email, :password, :userType)
             RETURNING id INTO :id`,
            {
                username: username,
                email: email,
                password: hashedPassword,
                userType: user_type.toUpperCase(),
                id: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
            },
            { autoCommit: true }
        );

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            userId: result.outBinds.id[0]
        });

    } catch (error) {
        console.log("Register error:", error);

        // Handle unique constraint violation (duplicate email)
        if (error.errorNum === 1) {
            return res.status(409).json({
                success: false,
                message: 'Email already registered'
            });
        }

        res.status(500).json({
            success: false,
            message: 'Error during registration',
            error: error.message
        });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
}

export async function login(req, res) {
    let connection;
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required'
            });
        }

        connection = await getConnection();

        // Oracle uses :paramName for named parameters
        const result = await connection.execute(
            `SELECT id, username, email, password, user_type
             FROM blood_users 
             WHERE email = :email`,
            { email: email },
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        // Check if user exists
        if (result.rows.length === 0) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        const user = result.rows[0];

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.PASSWORD);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { 
                userId: user.ID, 
                userType: user.USER_TYPE,
                email: user.EMAIL 
            },
            process.env.JWT_SECRET || 'your-secret-key-change-this',
            { expiresIn: '1d' }
        );

        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Only HTTPS in production
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                id: user.ID,
                username: user.USERNAME,
                email: user.EMAIL,
                userType: user.USER_TYPE
            },
            token: token
        });

    } catch (error) {
        console.log("Login error:", error);
        res.status(500).json({
            success: false,
            message: 'Error during login',
            error: error.message
        });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
}


export async function logout(req, res) {
    try {
        res.clearCookie('token');
        res.status(200).json({
            success: true,
            message: 'Logout successful'
        });
    } catch (error) {
        console.log("Logout error:", error);
        res.status(500).json({
            success: false,
            message: 'Error during logout'
        });
    }
}


export async function getCurrentUser(req, res) {
    let connection;
    try {
        console.log("req.user:", req.user);
        const userId = req.user.userId; 

        connection = await getConnection();

        const result = await connection.execute(
            `SELECT id, username, email, user_type, 
                    TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI:SS') as created_at
             FROM blood_users 
             WHERE id = :id`,
            { id: userId },
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            user: result.rows[0]
        });

    } catch (error) {
        console.log("Get user error:", error);
        res.status(500).json({
            success: false,
            message: 'Error fetching user data',
            error: error.message
        });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
}