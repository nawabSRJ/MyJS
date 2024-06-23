
import express from 'express'     // import like statement
import path from 'path' // just like a utility to help with file paths
import {fileURLToPath} from 'url'
import errorHandler from './middleware/error.js'
import posts from './Routes/posts.js'

const port = process.env.PORT || 8000;

const app = express(); // initializing express with object name 'app' , we will use this identifier everywhere where we use express funcs and do stuff

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// setup static folder
// Get the directory name
const __filename = fileURLToPath(import.meta.url) // gives the path of the current file URL
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname , 'public')));

// Routes
app.use('/api/posts' , posts);

// Error Handler ~ always put this under routes
app.use((req , res , next) =>{
    
    const error = new Error('Resource Not Found');
    error.status = 404;
    next(error);
}); // ! Keep this above every other Error handler.
// ? The above custom error handler is used to whenever a user tries to access a file/ URL that is not present. So think of it like a global error handler OR "Catch All Error" Middleware.


app.use(errorHandler);
// * You can also write error handler code directly like : 


app.listen(port , () => console.log(`Server is running on port ${port}`)); // port , callback function to execute 

