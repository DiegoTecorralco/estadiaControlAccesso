import React, { useState } from 'react';
import { insertRegister } from '../services/registroService';

export const Form = () => {
    const [student, setStudent] = useState({ nia: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStudent((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await insertRegister(student.nia); 
        alert('Estudiante registrado con éxito');
        console.log(response);
        window.location.reload(); // ✅ ESTA LÍNEA recarga la página automáticamente
    } catch (error) {
        alert('Hubo un error al registrar al estudiante');
        console.error(error);
    }
};

    return (
        <div className="card">
            <div className="card-header">
                <h1>Registro de Alumnos</h1>
                <p>Registro de alumnos del Bachillerato Matutino del Centro Escolar General Rafael Cravioto Pacheco</p>
                <h6>Por favor, ingrese el NIA del estudiante manualmente o escaneala y pulsa el boton de "registrar"</h6>
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
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Registrar</button>
                </form>
            </div>
        </div>
    );
};
