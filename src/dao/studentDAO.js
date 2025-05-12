import Student from "../models/student.js"; 
import moment from "moment-timezone";

const studentDAO = {};

studentDAO.getAll = async () =>{
    return await Student.find(); // Busca todos los estudiantes
}

studentDAO.getOne = async (nia) => {
    return await Student.findOne({ nia: nia }); 
}

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

export default studentDAO;
