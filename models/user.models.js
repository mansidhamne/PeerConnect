import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true //optimal for searching purpose
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        //unique:true,
        //lowercase:true
        index:true
    },
    year:{
        type:String,
        //const yearEnum = ["first year", "second year", "third year", "fourth year"],
        required:true,
        enum:["First Year", "Second Year", "Third Year", "Fourth Year"]
    },
    /*avatar:{
        type:String, //clouninary url
        required:true,
        unique:true,
        lowercase:true,
        
    },   */       
    /*coverImage:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },*/
    password:{
        type:String,
        required:[true,'Password is required'],
        //unique:true,
        lowercase:true
    }
    /*refreshToken:{
        type:String
    }*/
},{timestamps:true})

userSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next() //used so that password is encrypted only when it is modified and not at all intervals
    this.password=bcrypt.hash(this.password,10)  //10 is saltrounds for encryption purpose
    next()
}) //prehook to execute after a particular task is saved,async is used as process might take time for execution
userSchema.methods.isPasswordCorrect=async function(password){
//since cryptography takes time async await function is used
    return await bcrypt.compare(password,this.password) //used to compare original password with encrypted password in the database
}
/*userSchema.methods.generateAccessToken=function(){
    return jwt.sign( //used for return token that was created
        {
            _id:this._id, //it is directly connected to database which has id stored in it
            email:this.email,
            username:this.username
        }
    )                     //used for generation of token
}
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign( //used for return token that was created
        {
            _id:this._id, //it is directly connected to database which has id stored in it
        }
    )
}*/
export const User=mongoose.model("User",userSchema)
//jwt is a bearer token(it acts like a key)