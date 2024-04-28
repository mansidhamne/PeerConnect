// we would need to time and again talk with the DB involving async await error handling etc
// so this file gives us the wrapper required to do so and we will call it wherever required

// OPTION 1:

const asyncHandler =(requestHandler)=>{
   return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}

//higher order functions treat functions as params
// const asyncHandler =(fun)=>{()=>{}} //passing the function down , we can remove the secondary '{}' in yellow we can also make 
// it async by writing  ...=(fun)=> async ()=>{}

//OPTION 2:

// const asyncHandler =(fn)=> async(req,res,next) =>{
//     try {
//         await fn(req,res,next)
        
//     } catch (error) {
//         res.status(err.code||500).json({
//             success: false,
//             message: err.message
//         })
        
//     }
// }