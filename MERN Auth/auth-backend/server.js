import express from "express";
import cors from 'cors';
import clientModel from "./models/client.js";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

const app = express();
const port = 8080;
const SECRET_KEY = 'secret123';

app.use(express.json());
app.use(cors());
mongoose.connect(`mongodb://localhost:27017/`);

app.get('/', (req, res) => {
    res.send('<h1>Namastey</h1>');
});

app.post('/api/signup', async (req, res) => {
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10);
        await clientModel.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword
        });
        res.json({ status: 'ok' });
    } catch (error) {
        console.log(error);
        res.json({ status: 'error' });
    }
});

app.post('/api/login', async (req, res) => {
    const cli = await clientModel.findOne({ email: req.body.email });

    if (!cli) {
        return res.json({ status: 'error', cli: false });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, cli.password);
    if (isPasswordValid) {
        const token = jwt.sign(
            { name: cli.name, email: cli.email },
            SECRET_KEY,
            { expiresIn: "1h" }
        );
        return res.json({ status: 'ok', cli: token, user: cli.name });
    } else {
        return res.json({ status: 'error', cli: false });
    }
});

app.post('/api/verifyToken', (req, res) => {
    const token = req.body.token;
    if (!token) return res.json({ status: 'error' });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ status: 'ok', user: decoded.name });
    } catch (err) {
        res.json({ status: 'error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
