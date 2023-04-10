const express = require('express');
const app = new express();

let loginDetails = [];

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})
//Nuevo endopoint
app.get("/fetchMonth/:num", (req, res) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    let num = req.params.num;
    if ( num <1 || num >12 ){
        res.send("Invalid month number")
    } else {
        res.send(months[num -1])
    }
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

