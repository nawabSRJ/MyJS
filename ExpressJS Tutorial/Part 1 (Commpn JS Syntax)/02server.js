// * 02 Target : Working with JSON and more
const express = require('express');
const path = require('path');
const app = express();

let posts = [
    {id: 1, title : "Post One"},
    {id: 2, title : "Post Two"},
    {id: 3, title : "Post Three"},
    {id: 4, title : "Post Four"}
]

app.get('/api/posts' , (req , res) =>{
    res.json(posts); // you can also use .send() 
})