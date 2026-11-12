const express=require("express");
const app=express();
const mongoose=require("mongoose");
const User=require("./models/signIn");
app.set("view engine","ejs");
const path=require("path");
app.use(express.urlencoded({extended:true}));
const methodOverride=require("method-override");
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname,"public")));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/usersDB", {
    bufferCommands: false
});
}
main().then(()=> console.log("MongoDB connected")).catch(err=>console.log(err));


app.get("/",async (req,res)=>{
    res.render("login.ejs");
})

app.post("/Homepage",async(req,res)=>{
    const {username,password}=req.body;
    const user=await User.findOne({username:username,password:password});
    if(user){
        res.render("Homepage.ejs",{username:username});
    }else{
        res.render("login.ejs",{error:"Invalid username or password"});
    }
    });

app.post("/newUser",async(req,res)=>{
   res.render("newUser.ejs");
});

app.post("/User/new",async(req,res)=>{
    const {username,password}=req.body;
    const newUser=new User({
        username:username,
        password:password,
    });
    await newUser.save();
    res.render("Homepage.ejs");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});