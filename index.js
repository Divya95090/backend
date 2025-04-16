require('dotenv').config()
// import express from 'express';//Common JS syntax 
const express = require('express') //Module Syntax
//this basically means my app have express now 
const app = express()  //using express to make a variable app

const port = 3000 //this is basically a virtual port where the app is listening

//we are getting the app to listen at '/' which is home route 
//means if any response comes at '/' route we are going to send a response "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Dvya Khandelwal')  
})

app.get('/login',(req,res)=>{
    res.send('<h1> please login at my application <h1/>')
})

app.get('/youtube',(req,res)=>{
    res.send('Chai aur Code')
})

//we are now telling app to listen to port 
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

//app is constantly listening to port 3000 

//there is a concept of hot reloading which means whenever we save the file everything is restarted at backend by which we never  gets to know ki jitna code vaha de diya hai voh process hoke computer me ja chuka hai ab dubara jo updated code hai uske liye phir se processing karni hoti hai 

//this means we have to restart our app everytime we change the code but we have solutions for that 