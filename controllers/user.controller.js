import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import { User } from '../models/user.models.js';
//import { upload } from '../middlewares/multer.js';
import {uploading} from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/ApiResponse.js';

const registerUser =asyncHandler(async(req,res)=>{
    //get user details from front end
    const{fullname,username,email,password,year}=req.body
    console.log(email)
    //validation ->not empty
    if(fullname===""||username===""||email===""||password===""||year===""){
        throw new ApiError(400,"Please fill all the fields")
    }
    //check if already exists ->username
    const existingUser= await User.findOne({$or:[{username},{email}]})
    if(existingUser){
        throw new ApiError(409,"User already exists")
    }

    //check for images,check avtar

    //   multer gives access to req.files

    // const avatar_localpath=req.files?.avatar[0]?.path
    // if(!avatar_localpath){
    //     throw new ApiError(400,"Please upload an avatar")
    // }


    //upload to cloudinary

    // const avatar=await uploading(avatar_localpath)
    // if(!avatar){
    //     throw new ApiError(500,"Error uploading avatar")
    // }
    //create user obj - create entry in db
    const user=await User.create({
        fullname,
        //avatar:avatar.url,
        username,
        email,year,password})
    const created_user=await User.findById(user._id).select("-password")
    if(!created_user){
        throw new ApiError(500,"Error creating user")
    }
    //remove pswd
    //check for user creation
    //return response
    return res.status(201).json(new ApiResponse(201,"User created",created_user))


})

export {registerUser}