import Student from "../models/student.js"; 
import moment from "moment-timezone";

const studentDAO = {};

//obtener todos los estudiates
studentDAO.getAll = async () => {
    return await Student.find(); // Devuelve los estudiantes
};


//obtener por nia del estudiante
studentDAO.getOne = async (nia) => {
    return await Student.findOne({ nia: nia }); 
};

//agregar
studentDAO.insert = async (studentData) => {
  // Validar si ya existe un estudiante con el mismo NIA
  const existingStudent = await Student.findOne({ nia: studentData.nia });

  if (existingStudent) {
    throw new Error("El NIA ya está registrado.");
  } 

  // Si no existe, crear el nuevo estudiante
  const student = await Student.create(studentData);

  // Convertir fechas a la zona horaria deseada
  const studentWithFormattedDates = {
    ...student.toObject(),
    createdAt: moment(student.createdAt).tz("America/Mexico_City").format(),
    updatedAt: moment(student.updatedAt).tz("America/Mexico_City").format()
  };

  return studentWithFormattedDates;
};

//actualizar
studentDAO.update = async (nia, studentData) => {
  const updatedStudent = await Student.findOneAndUpdate(
    { nia: Number(nia) },
    { $set: studentData },
    { new: true }
  );

  if (!updatedStudent) return null;

  const formattedStudent = {
    ...updatedStudent.toObject(),
    // Mantiene createdAt como está (UTC)
    createdAt: moment(updatedStudent.createdAt).tz("America/Mexico_City").format("YYYY-MM-DD HH:mm:ss"),
    // Solo formatea updatedAt a hora de México
    updatedAt: moment(updatedStudent.updatedAt).tz("America/Mexico_City").format("YYYY-MM-DD HH:mm:ss")
  };
  return formattedStudent;
};

  
//eliminar
studentDAO.delete = async (nia) => {
    return await Student.findOneAndDelete({ nia: nia }); // Elimina el estudiante por su ID
};
// Obtener estudiantes por semestre
studentDAO.getBySemester = async (semester) => {
  return await Student.find({ semester: semester });
};

export default studentDAO;
