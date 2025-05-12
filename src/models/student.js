import { Schema, model } from "mongoose";

const studentSchema = new Schema ({
    nia: { type: Number, required: true, unique: true },
    name: {type: String, required: true},
    lastname:{type: String, required: true},
    grade:{type: Number, required:true},
    group:{type: String, required: true}
    
},{ timestamps: true });

const Student = model('student', studentSchema)

export default Student;