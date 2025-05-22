import { Router } from "express";
import registroController from "../controllers/registroController.js";

const registroRouter= Router();

registroRouter.get('/getAll',registroController.getAll);
registroRouter.get('/getOne/:nia', registroController.getOne);
registroRouter.post('/insert',registroController.insert);
registroRouter.get("/bySemester/:semestre", registroController.getBySemester);
registroRouter.get("/byGrade/:grado", registroController.getByGrade);

export default registroRouter;  