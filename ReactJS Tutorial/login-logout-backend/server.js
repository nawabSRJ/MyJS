import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin:[""],
        methods:["POST" , "GET"],
        credentials:true
    }
))