import express from 'express';
import { deleteGenre, getGenre, saveGenre, updateGenre } from '../controllers/genreController.js';

const genreRouter = express.Router();

genreRouter.post("/", saveGenre)
genreRouter.get("/", getGenre)
genreRouter.delete("/:id", deleteGenre)
genreRouter.put("/:id", updateGenre)

export default genreRouter;