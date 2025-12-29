import User from "../models/User";
import Car from "../models/Car.js";
import User from "../models/User.js";
import fs from "fs";

//API to change role of User
export const changeRoleToOwner = async(requestAnimationFrame,res)=>{
    try {
        const {_id}= req.user;
        await User.findByIDAndUpdate(_id,{role:"owner"})
        res.json({success:true, message:"Now you can list cars"})
    } catch (error) {
        console.log(error.message)
         res.json({success:False, message:error.message})
    }
}

// API to list car
export const addCar =  async (req,res)=>{
    try {
        const {_id} = req.user;
        let car = JSON.parse(req.body.carData)
        const imageFile = req.file;
   
   
   
   
   
   
   
   
    } catch (error) {
         console.log(error.message)
         res.json({success:False, message:error.message})
    }

}

// Upload Image to ImageKit
const fileBuffer = fs.readFileSync(imageFile.path)
const response = await imagekit.upload({
    file: fileBuffer,
    fileName: imageFile.originalname,
    folder: '/cars'
})
// optimization through imagekit URL transformation
var optimizedimageURL = imagekit.url({
    path : response.filePath,
    transformation : [

       { width : "1280"}, // width resize
       {quality : 'auto'}, //auto compression
    {format : 'webp'} //convert to modern format
    ]
});

const image = optimizedimageURL;
await Car.create({...car,owner:_id,image})
res.json({success:true , message:"Car Added"})








}