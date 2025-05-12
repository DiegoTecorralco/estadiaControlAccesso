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

studentController.getOne = async(req,res) => {
    try{

    } catch{

    }
}

studentController.insert = async(req,res) => {
    try{
        const response = await studentDAO.insert(req.body)
        res.json({
            data: {
                message: "student saved",
                student: response
            }
        });
    } catch(error){
        res.json({
            data: { message: error }
        });
    }
}

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