import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import gameRouter from './routes/gameRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import genreRouter from './routes/genreRouter.js';
import titleRouter from './routes/titleRouter.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to the Database!")
}).catch(() => {
    console.log("Database onnection Failed!")
})



app.use("/api/games", gameRouter)
app.use("/api/category", categoryRouter)
app.use("/api/genre", genreRouter)
app.use("/api/title", titleRouter)



app.listen(port, () => {
    console.log("Server is runing on port " + port);
})