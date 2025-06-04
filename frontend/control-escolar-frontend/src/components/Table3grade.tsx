import { useState, useEffect } from "react"
import { getAllStudents, getStudentsBySemester } from "../services/studentServices"

interface Student{
    nia: number,
    name:string,
    lastname: string,
    semester: string,
    grade: number,
    group: string
};

export const Table3grade = () => {
    const [students, setStudents]= useState <Student[]>([]);

    useEffect(()=>{
        getAllStudents()
        .then((data) =>{
            const {data: dataStudents}= data;
            const filtered = dataStudents.filter((student: Student)=> student.grade === 3);
            setStudents(filtered); 
        }).catch((error)=> {
            console.error("error al recibir los datos de los estudiantes del tercer grado", error)
        });
    });

    const grupoA = students.filter((student)=> student.group === "A");
    const grupoB = students.filter((student)=> student.group === "B");
    const grupoC = students.filter((student)=> student.group === "C");

    const renderTable =(grupo: string, data: Student[]) => (
        <div className="mb-5">
            <h4>Lista del grupo {grupo}</h4>
            <p>Aquí estan todos los estudiantes inscritos en el 3° grado grupo {grupo}</p>
            <div className="table responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>NIA</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Semestre</th>
                            <th>Grado</th>
                            <th>Grupo</th>
                            <th colSpan={2}>Operaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((student)=>(
                            <tr key={student.nia}>
                                <td>{student.nia}</td>
                                <td>{student.name}</td>
                                <td>{student.lastname}</td>
                                <td>{student.semester}</td>
                                <td>{student.grade}</td>
                                <td>{student.group}</td>
                                <td>
                                    <button className="btn btn-success btn-sm">Editar</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
  return (
    <>
    {renderTable("A",grupoA)}
    {renderTable("B",grupoB)}
    {renderTable("C",grupoC)}
    </>
  );
};
