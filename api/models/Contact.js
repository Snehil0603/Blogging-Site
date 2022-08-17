const mongoose=require("mongoose")

const ContactSchema=new mongoose.Schema({
    name:{
        type:String,
        required :false,
        
    },
    email:{
        type:String,
        required:false,
        
    },
    phone:{
        type:String,
        required:false,
    },
    subject:{
        type:String,
        required:false,
    },
    message :{
        type:Array,
        required:false
    },
    

},
{timestamps:true}
);
module.exports=mongoose.model("Contact",ContactSchema)
