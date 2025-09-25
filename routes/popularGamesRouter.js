import express from 'express';
import { deletePopularGames, getPopularGames, savePopularGames, updatePopularGames } from '../controllers/popularGamesController.js';

const popularGamesRouter = express.Router();

popularGamesRouter.post("/", savePopularGames)
popularGamesRouter.get("/", getPopularGames)
popularGamesRouter.delete("/:id", deletePopularGames)
popularGamesRouter.put("/:id", updatePopularGames)

export default popularGamesRouter;