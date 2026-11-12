const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const signinSchema=new Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    created_at:{
        type:Date,
        default:Date.now,
    }
});

signinSchema.index({ username: 1 });

const User=mongoose.model("User",signinSchema);
module.exports=User;