import express from 'express';
import { deleteCategory, getCategory, saveCategory, updateCategory } from '../controllers/categoryController.js';

const categoryRouter = express.Router();

categoryRouter.post("/", saveCategory)
categoryRouter.get("/", getCategory)
categoryRouter.delete("/:id", deleteCategory)
categoryRouter.put("/:id", updateCategory)

export default categoryRouter;