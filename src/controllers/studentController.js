import Student from "../models/student.js";
import studentDAO from "../dao/studentDAO.js";

const studentController = {};

studentController.getAll = async(req,res) => {
    try{
        const students = await Student.find();
        res.json(students);
    } catch(err){
        res.error(500).json({ message: err.message });
    }
};

// Controlador para obtener un estudiante por ID
studentController.getOne = async (req, res) => {
  try {
      // Llama al DAO para obtener el estudiante
      const student = await studentDAO.getOne(req.params.nia); 
      if (student) {
          res.json({ data: student });
      } else {
          res.status(404).json({ message: "Student not found" });
      }
  } catch (error) {
      res.status(500).json({ message: "Error fetching student", error: error.message });
  }
};
  

studentController.insert = async (req, res) => {
    try {
      const response = await studentDAO.insert(req.body);
      res.status(201).json({
        data: {
          message: "student saved",
          student: response
        }
      });
    } catch (error) {
      // Verifica si es un error de duplicado
      if (error.code === 11000) {
        return res.status(400).json({
          data: { message: "El NIA ya está registrado." }
        });
      }
  
      // Otro tipo de error
      res.status(500).json({
        data: { message: "Error al guardar el estudiante.", error: error.message }
      });
    }
  };
  

studentController.update = async(req,res) => {
    try{

    } catch{

    }
}

studentController.delete = async(req,res) => {
    try{

    } catch{

    }
}

export default studentController