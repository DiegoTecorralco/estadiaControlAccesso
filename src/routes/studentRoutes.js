import { Router } from "express";
import studentController from "../controllers/studentController.js";

const studentRouter = Router();

studentRouter.get('/getAll', studentController.getAll);
studentRouter.get('/getOne/:nia', studentController.getOne);
studentRouter.post('/insert', studentController.insert);


export default studentRouter;