import dotenv from 'dotenv';
import OpenAI from "openai";
import express from 'express';

const app = express();
const port = 8000;

// Load environment variables from .env file
dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post('/', async (req, res) => {
    let prompt = "Write a haiku about recursion in programming.";
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: prompt,
            },
        ],

    });
    res.json(response.choices[0].message);
});

app.get('/', (req, res) => {
res.send("Hello Mate!");
});

app.listen(port, () => {
console.log("Listening on port " + port);
});
