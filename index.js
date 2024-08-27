import dotenv from 'dotenv';
import OpenAI from "openai";
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

// Load environment variables from .env file
dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post('/', async (req, res) => {
    const { message } = req.body;
    console.log(message);
    // let prompt = "Write a haiku about recursion in programming.";
    // const response = await openai.chat.completions.create({
    //     model: "gpt-4o-mini",
    //     messages: [
    //         { role: "system", content: "You are a helpful assistant." },
    //         {
    //             role: "user",
    //             content: `${message}`,
    //         },
    //     ],
    //     max_tokens: 200,
    //     temperature: 0.5,
    // });
    // const data = await response.json();
    // console.log(data.message);
    // res.json();
    // res.json({message: response.choices[0].message});
    const mess = "Sorry, your account needs funds. Please add more funds man!"
    res.json({message: mess});
});

app.get('/', (req, res) => {
res.send("Hello Mate!");
});

app.listen(port, () => {
console.log("Listening on port " + port);
});
