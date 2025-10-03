import express from 'express';
import { createAdmins, getAdmins, loginAdmin, deleteAdmins, updateAdmins } from '../controllers/adminControllers.js';

const adminRouter = express.Router();

adminRouter.post("/signup", createAdmins)
adminRouter.get("/", getAdmins)
adminRouter.post("/login", loginAdmin)
adminRouter.delete("/:id", deleteAdmins)
adminRouter.put("/:id", updateAdmins)

export default adminRouter;