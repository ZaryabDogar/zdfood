const mongoose =require('mongoose');
const {schema}=mongoose;
const userSchema=new schema({
    name:{
        type:String,
        require:true
    },
    
    location:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    password:{
        type:Date,
        default:Date.now
    },


})
module.exports=mongoose.model('user',userSchema)