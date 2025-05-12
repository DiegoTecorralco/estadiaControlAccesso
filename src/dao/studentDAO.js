import Student from "../models/student.js";
import moment from "moment-timezone";

const studentDAO = {};

studentDAO.insert = async (studentData) => {
  const student = await Student.create(studentData);

  // Convertir fechas a la zona horaria deseada
  const studentDate = {
    ...student.toObject(),
    createdAt: moment(student.createdAt).tz("America/Mexico_City").format(),
    updatedAt: moment(student.updatedAt).tz("America/Mexico_City").format()
  };

  return studentDate; // ✅ retorno final
};

export default studentDAO;
