import { Router } from "express";
import registroController from "../controllers/registroController.js";

const registroRouter= Router();

registroRouter.get('/getAll',registroController.getAll);
registroRouter.get('/getOne/:nia', registroController.getOne);
registroRouter.post('/insert',registroController.insert);

export default registroRouter;