const express = require('express')
const app = express()

const Mongoose = require('mongoose')
const users = require('./users.js')

const db = Mongoose.connect('mongodb://localhost:27017/bface', {useNewUrlParser: true})

Mongoose.connection.once('open', ()=> console.log("Connected "))

app.use(express.json())

app.post("/api/bfa", async(req,res) =>{
    console.log("A request came in :"+ JSON.stringify(req.body));
    console.log("I am in server");
    const {username, password} = req.body;
 try{
     await users.create({username:username, password:password});
     return res.sendStatus(200);
 }
 catch(error){
     console.log("The error is :"+ error.message);
     return res.sendStatus(400);
 }
})

app.post("/api/auth", async(req,res) =>{
    flag = false;
    console.log("A request came in :"+ JSON.stringify(req.body));
    const {username, password} = req.body;
    let result1 = await users.findOne({username : req.body.username})
    if(!result1){
        console.log("User does not exists");
        return res.sendStatus(400);
    }
    let result2 = result1.password;
    console.log("The password I got  is: "+ result2);
    console.log("The username I got  is: "+ result1.username);
    console.log("The password you sent me is: "+ req.body.password);
    console.log("The username you sent me is: "+ req.body.username);
    
    if(result1.username === req.body.username && result2 === req.body.password){
        console.log("I am here");
        return res.sendStatus(200);
    } 
    else{
        console.log("I am here in else");
        return res.sendStatus(400);
    } 
}
)
const port = 4000
app.listen(port, () => console.log("listening to port at 4000"))