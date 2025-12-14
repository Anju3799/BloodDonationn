// module.exports = connectDB;
import OracleDB from "oracledb";
import dotenv from 'dotenv'
dotenv.config();
export async function getConnection() {
  try {
    const connection = await OracleDB.getConnection({
       user: process.env.ORACLE_USER,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECT_STRING
    });
    console.log("OracleDB connected successfully");
  
    return connection;
  } catch (error) {
    console.error("Error getting connection:", error);
    throw error;
  }
}





// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.error("MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };