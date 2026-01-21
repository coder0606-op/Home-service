import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookingRoutes from "./routes/bookingRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("BACKEND RUNNING");
})
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("DB error:", err));

app.listen(process.env.PORT, () =>{
    console.log("backend is running")
})