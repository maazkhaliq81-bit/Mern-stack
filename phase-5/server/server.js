import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";

const app = express()

//conect database
 await connectDb()
app.use(cors());
app.use(express.json());
app.get('/', (req,res)=> res.send("server is running ") )
app.use('/api/user',userRouter )

const PORT  = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))