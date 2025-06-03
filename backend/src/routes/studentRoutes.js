import { Router } from "express";
import studentController from "../controllers/studentController.js";
import verifyToken from "../middleware/verifyToken.js";

const studentRouter = Router();

studentRouter.get('/getAll', verifyToken , studentController.getAll);
studentRouter.get('/getOne/:nia', verifyToken , studentController.getOne);
studentRouter.post('/insert', verifyToken , studentController.insert);
studentRouter.put('/update/:nia', verifyToken , studentController.update);
studentRouter.delete('/delete/:nia', verifyToken , studentController.delete);
studentRouter.get('/getBySemester/:semester', verifyToken , studentController.getBySemester);

export default studentRouter;