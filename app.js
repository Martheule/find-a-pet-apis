import express from "express";

// initialize the app
export const app = express();

// middleware to parse request body
app.use(express.json());

// mini app per resource
// app.use();
// app.use();
