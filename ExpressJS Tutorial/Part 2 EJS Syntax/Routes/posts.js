import express from 'express'
const router = express.Router();



let posts = [
    {id: 1, title : "Post One"},
    {id: 2, title : "Post Two"},
    {id: 3, title : "Post Three"},
    {id: 4, title : "Post Four"}
]

// Get all Posts 
router.get('/' , (req , res , next)=>{
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0){
        res.json(posts.slice(0 , limit)); // only show desired no. of posts (limit is a variable ~ refer postman)
    }else{
        res.json(posts); // show all posts , if no limit
    }
});

// Get a single post
router.get('/:id' , (req , res , next) =>{
    // console.log(req.params.id)
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    // checking if post exists : 
    if(!post){
        const error = new Error(`A post with the id ${id} was Not Found`);
        error.status = 404;     // by default it is 500 (Internal Server Error)
        return next(error);
    }else{
    res.json(posts.filter((post) => post.id === id));
    }
});

// Create new post
router.post('/' , (req , res , next)=>{
    
    const newPost = {
        id:posts.length + 1,
        title:req.body.title
    };
    if(!newPost.title){
        const error = new Error(`Please Include a title`);
        // 400 - Bad Request
        error.status = 400;     // by default it is 500 (Internal Server Error)
        return next(error);   
    }
    posts.push(newPost);    // ideally here you will add to DB
    res.status(201).json(posts)
});

// Update Post
router.put('/:id' , (req , res , next) =>{
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post){
        const error = new Error(`A post with the id ${id} was Not Found`);
        error.status = 404;     // by default it is 500 (Internal Server Error)
        return next(error);
    }
    post.title = req.body.title;    // post ke title ko 'request' ki body mein jo title hai usse replace krdo
    res.status(200).json(posts);
});

// Delete Post
router.delete('/:id' , (req , res , next) =>{
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post){
        const error = new Error(`A post with the id ${id} was Not Found`);
        error.status = 404;     // by default it is 500 (Internal Server Error)
        return next(error);
    }
    posts = posts.filter((post)=> post.id !== id);  // the post with the specified id will be filtered out
    res.status(200).json(posts);
});





export default router;
