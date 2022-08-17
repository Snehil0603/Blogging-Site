const express=require("express")
const app=express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const authUser=require("./routes/auth")
const userRoute=require("./routes/users")
const PostRoute=require("./routes/posts")
const ContactRoute=require("./routes/contacts")

const multer=require("multer")
const path=require("path")
const categoryRoute=require("./routes/categories")
const cors = require("cors");

app.use(cors());


dotenv.config();

app.use(express.json())
app.use("/images",express.static(path.join(__dirname,"/images")))

mongoose.connect(process.env.MONGO_URI)
.then(console.log("Connected to mongoDB"))
.catch((err) => console.log(err))


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name)
    },
})

const upload=multer({storage:storage})

app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded")
})


app.use("/api/auth",authUser)
app.use("/api/users",userRoute)
app.use("/api/posts",PostRoute)
app.use("/api/contact",ContactRoute)
app.use("/api/categories",categoryRoute)





app.listen("5000",()=>{
    console.log("Backend is running")
})