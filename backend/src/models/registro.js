import {Schema, model} from "mongoose";

const registroSchema = new Schema ({
    nia: { type: Number, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    grade:{type: Number, required:true},
    group: { type: String, required: true },
    semester: { type: String, required: true }, // 👈 nuevo campo
    asistencia: { type: Boolean, default: true },
    hora: { type: String, required: true },
    esRetardo: { type: Boolean, required: true }
});


const Registro = model('registro', registroSchema);
export default Registro;