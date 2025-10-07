import express from 'express';
import { deleteDescription, deleteHotlinesNumbers, deleteSocialMedia, getDescription, getHotlinesNumbers, getSocialMedia, saveDescription, saveHotlinesNumbers, saveSocialMedia } from '../controllers/foorterController.js';

const footerRouter = express.Router();

footerRouter.post("/discription", saveDescription)
footerRouter.post("/socialmedia", saveSocialMedia)
footerRouter.post("/hotline", saveHotlinesNumbers)
footerRouter.get("/discription", getDescription)
footerRouter.get("/socialmedia", getSocialMedia)
footerRouter.get("/hotline", getHotlinesNumbers)
footerRouter.delete("/discription/:id", deleteDescription)
footerRouter.delete("/socialmedia/:id", deleteSocialMedia)
footerRouter.delete("/hotline/:id", deleteHotlinesNumbers)

export default footerRouter;