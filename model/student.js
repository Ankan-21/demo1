

const mongoose=require('mongoose');
const Schema=mongoose.Schema

const StudentSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    usertype:{
        type:String,
        required:true,
    },
    created_at:{
        type:Date,
        default:Date.now
    }
    
})

const StudentModel=new mongoose.model('student',StudentSchema)
module.exports=StudentModel


