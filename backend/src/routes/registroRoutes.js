import { Router } from "express";
import registroController from "../controllers/registroController.js";
import verifyToken from '../middleware/verifyToken.js'

const registroRouter= Router();

registroRouter.get('/getAll', verifyToken ,registroController.getAll);
registroRouter.get('/getOne/:nia', verifyToken , registroController.getOne);
registroRouter.post('/insert', verifyToken ,registroController.insert);
registroRouter.get("/bySemester/:semestre", verifyToken, registroController.getBySemester);
registroRouter.get("/byGrade/:grado", verifyToken , registroController.getByGrade);

export default registroRouter;  