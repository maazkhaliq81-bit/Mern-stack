import express from "express"
import { protect } from "../middleware/auth";
import {addCar,changeRoleToOwner } from "../controllers/ownerController";
import upload from "../middleware/multer";


const ownerRouter = esxpress.Router();

ownerRouter.post("/change-role",protect,changeRoleToOwner)
ownerRouter.post("/add car",upload.single("image"),protect,addCar)
 
export default ownerRouter;