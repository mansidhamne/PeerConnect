// copy paste the code below to the file profile.controller.js


import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import { Profile } from '../models/profile.model.js';
//import { upload } from '../middlewares/multer.js';
import {uploading} from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/ApiResponse.js';

const createProfile =asyncHandler(async(req,res)=>{
    if (!req.body) {
        throw new ApiError(400, "Request body is missing");
    }
    console.log(req.body)
    //get user details from front end
    const{username,year,community}=req.body
    console.log(username)
    //validation ->not empty
    if(username===""||year===""||community===""){
        throw new ApiError(400,"Please fill all the fields")
    }
    //check if already exists ->username
    const existingUser= await Profile.findOne({$or:[{username}]})
    if(existingUser){
        throw new ApiError(409,"User already exists")
    }
    //create user obj
    const user=await Profile.create({
        username,
        //avatar:avatar.url,
        year,
        communities:[community]})
    const created_user=await Profile.findById(user._id)
    if(!created_user){
        throw new ApiError(500,"Error creating user")
    }
    return res.status(201).json(new ApiResponse(201,"User created",created_user))

    
})
export {createProfile}