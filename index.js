require('dotenv').config()
// import express from 'express';//Common JS syntax 
const express = require('express') //Module Syntax
//this basically means my app have express now 
const app = express()  //using express to make a variable app

const port = 3000 //this is basically a virtual port where the app is listening

const githubData = {
  "login": "Divya95090",
  "id": 112494726,
  "node_id": "U_kgDOBrSIhg",
  "avatar_url": "https://avatars.githubusercontent.com/u/112494726?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Divya95090",
  "html_url": "https://github.com/Divya95090",
  "followers_url": "https://api.github.com/users/Divya95090/followers",
  "following_url": "https://api.github.com/users/Divya95090/following{/other_user}",
  "gists_url": "https://api.github.com/users/Divya95090/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Divya95090/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Divya95090/subscriptions",
  "organizations_url": "https://api.github.com/users/Divya95090/orgs",
  "repos_url": "https://api.github.com/users/Divya95090/repos",
  "events_url": "https://api.github.com/users/Divya95090/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Divya95090/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Divya Khandelwal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2022-08-30T14:15:37Z",
  "updated_at": "2025-04-10T07:50:19Z"
}
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

app.get('/github',(req,res)=>{
  res.json(githubData)
})

//we are now telling app to listen to port 
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

//app is constantly listening to port 3000 

//there is a concept of hot reloading which means whenever we save the file everything is restarted at backend by which we never  gets to know ki jitna code vaha de diya hai voh process hoke computer me ja chuka hai ab dubara jo updated code hai uske liye phir se processing karni hoti hai 

//this means we have to restart our app everytime we change the code but we have solutions for that 