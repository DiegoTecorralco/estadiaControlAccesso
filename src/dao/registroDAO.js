import Student from "../models/student.js";
import Registro from "../models/registro.js";
import moment from "moment-timezone";

const registroDAO = {};

registroDAO.getAll= async () =>{
    return await Registro.find();
}

registroDAO.getOne = async (nia) =>{
    const encontrarEstudiante = await Registro.findOne({nia:nia});
    if (!encontrarEstudiante) throw new Error("Estudiante no encontrado o no asistió");
    return encontrarEstudiante;
}

registroDAO.insert = async (nia) =>{
    const estudiante = await Student.findOne({nia:nia});
    if (!estudiante) throw new Error("Estudiante no encontrado");

    //obtener la hora acrual de México
    const horaActual = moment().tz("America/Mexico_City");
    const limiteHora =  moment().tz("America/Mexico_City").hour(7).minute(59).second(59);
    
    //verificar si es retardo
    const esRetardo = horaActual.isAfter(limiteHora);

    //crea un nuevo registro
    const nuevoRegistro = await Registro.create({
    nia: estudiante.nia,
    name: estudiante.name,
    lastname: estudiante.lastname,
    group: estudiante.group,
    asistencia: true,
    hora: horaActual.format("YYYY-MM-DD HH:mm:ss"),
    esRetardo: esRetardo
    });
    return nuevoRegistro;
};

export default registroDAO;