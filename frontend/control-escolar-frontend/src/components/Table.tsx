import { useEffect, useState } from "react";
import { getAllStudents } from '../services/studentServices';

interface Student {
    nia: string;
    name: string;
    lastname: string;
    semester: string;
    grade: string;
    group: string;
}

export const Table = () => {
    const [students, setStudents] = useState<Student[]>([]);
    
    useEffect(() => {
        getAllStudents()
            .then((data) => {
                const {data:dataStudents} = data;
                console.log("Datos recibidos de estudiantes", dataStudents);
                setStudents(dataStudents);
            })
            .catch((error) => {
                console.log("Error al obtener los datos de estudiantes");
            });
    }, [students]);

    return (
        <>
            <table className="table-primary table-striped">
                <thead>
                    <tr>
                        <th>NIA</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>semestre</th>
                        <th>Grado</th>
                        <th>Grupo</th>
                        <th colSpan={2}>Operaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.nia}>
                            <td>{student.nia}</td>
                            <td>{student.name}</td>
                            <td>{student.lastname}</td>
                            <td>{student.semester}</td>
                            <td>{student.grade}</td>
                            <td>{student.group}</td>
                            <td>
                                <a href="#" className="btn btn-success">
                                    Editar
                                </a>
                            </td>
                            <td>
                                <a href="#" className="btn btn-danger">Eliminar</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
