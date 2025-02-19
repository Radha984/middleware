let express=require("express")
let app=express()
app.use(express.json())
let middleware=require("./middleware.js")
port=4000;

app.get("/", middleware.middleware_sample,(req,res)=>{

res.send("hiii")
})
app.post("/",(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(port,()=>{
    console.log("server is running")
})