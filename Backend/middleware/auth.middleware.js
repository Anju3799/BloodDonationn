import jwt from 'jsonwebtoken';

export async function authenticateUser(req,res,next){
    try {
       
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message:"Unauthorized no access token"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Authentication error:", error);  
        return res.status(401).json({message:"Unauthorized invalid token"})
    }
}