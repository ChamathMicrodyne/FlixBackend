import express from 'express';
import { saveGames, getGames, deleteGames, updateGames } from '../controllers/gameController.js';

const productRouter = express.Router();

productRouter.post("/", saveGames)
productRouter.get("/", getGames)
productRouter.delete("/:id", deleteGames)
productRouter.put("/:id", updateGames)

export default productRouter;