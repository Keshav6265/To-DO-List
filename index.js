import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app=express();
const port=3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

var nt=[];
app.get("/",(req,res)=>{
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
const d=today.toLocaleDateString("en-us",options);

res.render("index.ejs",{toDate: d,newT:nt});
});

app.post("/submit",(req,res)=>{
    let newt=req.body.newTask;
    nt.push(newt);
    res.redirect("/");
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
