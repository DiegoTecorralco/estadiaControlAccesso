import { Router } from "express";
import studentController from "../controllers/studenController.js";

const studentRouter = Router();

studentRouter.get('/getAll', studentController.getAll);
studentRouter.post('/insert', studentController.insert);


export default studentRouter;