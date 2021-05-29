const express=require("express");
const cors=require("cors");
const app=express();
const fs=require("fs");
const path=require("path");
const home=fs.readFileSync(path.join(__dirname, 'home.html'), {encoding:"utf8"});
const err400=fs.readFileSync(path.join(__dirname, '400.html'), {encoding:"utf8"});
const port=process.env.PORT||3000
app.get('/', cors(), (req, res)=>{
    res.send(home);
});
app.get('/:id', cors(),(req, res)=>{
    res.send(home)
})
app.get("/number", cors(),(req, res)=>{
    res.send(home);
})
app.get('/number/:num', cors(),(req, res)=>{
    
    const num=req.params.num;
    if(num==parseInt(num)){
        if(String(num).split("").length<17){
    const cal=Math.abs(num)%2===0?"EVEN":"ODD";
    const response=`YOUR NUMBER ${num} IS ${cal}`;
    res.send(`<body style="background-color:orange;margin-top:25%;"><center><h1>${response}</h1></center></body>`);
        }
        else{
            res.send("That number is tooooo big")
        }
    }
    else{
        res.status(400).send(err400);
    }
});
app.listen(port, ()=>{console.log( `listening on port ${port}`)});
