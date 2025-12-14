import express from "express";
import cors from "cors";
import {getConnection} from "./config/db.js";
import cookieParser from "cookie-parser";


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Connect to oracle for testing 
getConnection();

//auth route
import authroute from './routes/auth.route.js'

app.use('/api/v1/auth',authroute);







app.get("/", (req, res) => {
  res.send("Backend is running and connected to oracle");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
