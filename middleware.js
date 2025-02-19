let middleware_sample=(req,res,next)=>{
    console.log(req)
    next()  
}
module.exports={middleware_sample}