import React, { useState } from 'react';
import { insertStudent } from '../services/studentServices'; // Asegúrate de que la ruta sea correcta según tu estructura de archivos

export const Form = () => {
    const [student, setStudent] = useState({
        nia: '',
        name: '',
        lastname: '',
        semester: '',
        grade: 0,
        group: '',
    });

    // Maneja el cambio de los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStudent((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await insertStudent(student);
            alert('Estudiante registrado con éxito');
            console.log(response);
        } catch (error) {
            alert('Hubo un error al registrar al estudiante');
            console.error(error);
        }
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3>Registro de Alumnos</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-2">
                                <label htmlFor="txtStudentId" className="form-label">NIA</label>
                                <input
                                    type="text"
                                    id="txtStudentId"
                                    className="form-control"
                                    name="nia"
                                    value={student.nia}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-lg-2">
                                <label htmlFor="txtName" className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    id="txtName"
                                    className="form-control"
                                    name="name"
                                    value={student.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-lg-2">
                                <label htmlFor="txtLastName" className="form-label">Apellido(s)</label>
                                <input
                                    type="text"
                                    id="txtLastName"
                                    className="form-control"
                                    name="lastname"
                                    value={student.lastname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-lg-2">
                                <label htmlFor="txtSemester" className="form-label">semestre</label>
                                <input
                                    type="number"
                                    id="txtSemester"
                                    className="form-control"
                                    name="grade"
                                    value={student.semester}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-lg-2">
                                <label htmlFor="txtGrade" className="form-label">Grado</label>
                                <input
                                    type="number"
                                    id="txtGrade"
                                    className="form-control"
                                    name="grade"
                                    value={student.grade}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-lg-2">
                                <label htmlFor="txtGroup" className="form-label">Grupo</label>
                                <input
                                    type="text"
                                    id="txtGroup"
                                    className="form-control"
                                    name="group"
                                    value={student.group}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-lg-2">
                                <input className="btn btn-primary" type="submit" value="Guardar" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
