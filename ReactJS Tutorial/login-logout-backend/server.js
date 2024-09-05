import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userModel from './models/users.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],  
    methods: ["POST", "GET"],
    credentials: true
}));

mongoose.connect('mongodb://localhost:27017/ReviewClips', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ message: "We need token, please provide it!" });
    } else {
        jwt.verify(token, "our-token-key", (err, decoded) => {
            if (err) {
                return res.json({ message: "Authentication Error" });
            } else {
                req.email = decoded.email;
                next();
            }
        });
    }
};

app.get('/', verifyUser, (req, res) => {
    return res.json({ status: "Success", email: req.email });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    userModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    const token = jwt.sign({ email }, "our-token-key", { expiresIn: '1d' });
                    res.cookie('token', token, { httpOnly: true });
                    res.status(200).json({ message: "Success", user });
                } else {
                    res.status(401).json("Incorrect Password");
                }
            } else {
                res.json("No record found");
            }
        })
        .catch(err => {
            console.error('Error finding user:', err);
            res.status(500).json("Server error");
        });
});

app.post('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({ status: "Success", message: "Logged out successfully" });
});

app.listen(8000, () => {
    console.log("Server is running...");
});
