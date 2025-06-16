import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json())

// PostgreSQL client configuration ~ asked in *interviews*
const con = new Client({
    host : "localhost",     // default values
    user : "postgres",  // default values
    port : 5432,    // default values
    password : "srjpc18",
    database : "demopost",  // the database with which you have to work
})

app.post('/postData', (req,res)=>{
    const {name,id} = req.body;
    const insert_query = 'INSERT INTO demotable (name,id) VALUES ($1,$2)';

             // string(for query), array(for values), callback(err,result)
    con.query(insert_query, [name,id] , (err,result)=>{
        if(err){
            res.send(err);
        }else{
            console.log(result);
            res.send("POSTED DATA")
        }
    })
})

app.get('/fetchData', (req,res)=>{
    const fetch_query = "Select * from demotable"
    con.query(fetch_query, (err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result.rows);
        }
    })
})

app.get('/fetchById/:id', (req,res)=>{
    const id = req.params.id;
    const fetch_query = "Select * from demotable where id = $1";
    con.query(fetch_query,[id],(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result.rows);
        }
    })
})

// updating the name 
app.put('/updateData/:id', (req,res)=>{
    const id = req.params.id;
    const Newname = req.body.newname;   // the value after update
    // in the body using postman you will have to write : {"newname": "Value of New Name"} if using JSON format
    const update_query = "UPDATE demotable SET name=$1 WHERE id=$2";
    con.query(update_query, [Newname,id], (err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send("UPDATED");
        }
    })
})
app.delete('/deleteData/:id',(req,res)=>{
    const id=req.params.id;
    const delete_query = "Delete from demotable where id=$1";
    con.query(delete_query,[id],(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
})
app.listen(3000,()=>{
    console.log(`Server is running...`);
    
})

con.connect().then(()=> console.log("connected"))