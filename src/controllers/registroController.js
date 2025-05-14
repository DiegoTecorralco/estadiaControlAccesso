import registroDAO from "../dao/registroDAO.js";
import Registro from "../models/registro.js";

const registroController ={};

registroController.getAll = async (req,res) =>{
    try {
         const Registros = await Registro.find(); 
        res.status(201).json({
            data:Registros
        })  
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los registros",
            error: error.message
        })
    }
}

registroController.getOne = async (req,res) =>{
    try {
        const registro = await registroDAO.getOne(req.params.nia);
    if (registro) {
          res.json({ data: registro });
      } else {
          res.status(404).json({ message: "register not found" });
      }
    } catch (error) {
        res.status(500).json({
      message: "Error al encontrar registro de asistencia",
      error: error.message
    });
    }
}

registroController.insert = async (req, res) => {
  try {
    const registro = await registroDAO.insert(req.body.nia); // <--- correcto
    res.status(201).json({
      message: "Registro exitoso",
      data: registro
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al registrar asistencia",
      error: error.message
    });
  }
};

export default registroController;