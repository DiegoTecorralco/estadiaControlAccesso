import { Router } from "express";
import studentController from "../controllers/studenController.js";

const studentRouter = Router();

studentRouter.post('/insert', studentController.insert);

export default studentRouter;