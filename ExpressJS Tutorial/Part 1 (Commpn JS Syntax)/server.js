// * 01 Target : Learning Basics 

const express = require('express');     // import like statement

const path = require('path') // just like a utility to help with file paths

const app = express(); // initializing express with object name 'app' , we will use this identifier everywhere where we use express funcs and do stuff

// ? '/' means root or basically landing page
app.get('/' , (req , res)=> {
    // res.send('Namastey World');
    // res.send('<h1>Namastey World</h1>'); // you can write HTML as well

    // res.send({message : "Srajan here"});  // you can also send a JSON data

    res.sendFile(path.join(__dirname , 'public' , 'index.html'));
    // __dirname : path of current file dir. , <folderName-to-go> , <file-in-that-folder>

    // .join method is used to finally combine the full path to the file
});

app.get('/about' , (req , res) =>{
    res.sendFile(path.join(__dirname , 'public' , 'about.html'));
})

// todo - create a static server instead of multiple routes like above
app.use(express.static(path.join(__dirname , 'public')));


// * -------------------------------------------------


let posts = [
    {id: 1, title : "Post One"},
    {id: 2, title : "Post Two"},
    {id: 3, title : "Post Three"},
    {id: 4, title : "Post Four"}
]

// Get all posts
// app.get('/api/posts' , (req , res) =>{
//     console.log(req.query);
//     res.send(posts); // you can also use .send() 
// })
// * A better way of handling all posts request :
app.get('/api/posts' , (req , res)=>{
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0){
        res.json(posts.slice(0 , limit)); // only show desired no. of posts (limit is a variable ~ refer postman)
    }else{
        res.json(posts); // show all posts , if no limit
    }
});

// Get a single post
app.get('/api/posts/:id' , (req , res) =>{
    // console.log(req.params.id)
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    // checking if post exists : 
    if(!post){
        res.status(404).send("Post with this id NOT FOUND");
        // * Tip : you can remove the else block below if you used 'return' statement above.
    }else{
    res.json(posts.filter((post) => post.id === id));
    }
});



app.get('/test' , (req , res) =>{
    res.sendFile(path.join(__dirname , 'public' , 'test.html'));
});

app.listen(8080 , () => console.log('Server is running on port 8080')); // port , callback function to execute 
// check by typing in terminal : node <this filename>
