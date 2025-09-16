import express from 'express';
import { deleteTitle, getTitle, saveTitle, updateTitle } from '../controllers/titleController.js';

const titleRouter = express.Router();

titleRouter.post("/", saveTitle)
titleRouter.get("/", getTitle)
titleRouter.delete("/:id", deleteTitle)
titleRouter.put("/:id", updateTitle)

export default titleRouter;