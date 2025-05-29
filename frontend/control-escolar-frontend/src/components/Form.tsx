import React, { useState } from 'react';
import { insertRegister } from '../services/registroService';
import logoCentroEscolar from '../assets/logo_centro_escolar.jpg';

export const Form = () => {
  const [student, setStudent] = useState({ nia: '' });
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    setMensaje('');
    try {
      await insertRegister(student.nia);
      setMensaje('✅ Estudiante registrado con éxito');
      setError(false);
      setStudent({ nia: '' });
    } catch (error) {
      setMensaje('❌ Hubo un error al registrar al estudiante');
      setError(true);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-white text-center">
        <h2>Registro de Alumnos</h2>
        <p className="mb-1">
          Bachillerato Matutino - Centro Escolar General Rafael Cravioto Pacheco
        </p>
        <small>
          Ingrese el NIA del estudiante manualmente o escanéalo y pulsa "Registrar".
        </small>
      </div>

      <div className="card-body">
        <div className="row">
          {/* Formulario */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <label htmlFor="txtStudentId" className="form-label fw-semibold">
                NIA del estudiante
              </label>
              <div className="input-group input-group-lg mb-3">
                <span className="input-group-text bg-primary text-white">
                  <i className="bi bi-person-vcard-fill"></i>
                </span>
                <input
                  type="text"
                  id="txtStudentId"
                  className="form-control border-3 border-primary shadow"
                  style={{ backgroundColor: '#e3f2fd', fontSize: '1.2rem' }}
                  name="nia"
                  value={student.nia}
                  onChange={handleChange}
                  placeholder="Ej. 123456"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" disabled={cargando}>
                {cargando ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Registrando.....
                  </>
                ) : (
                  'Registrar'
                )}
              </button>
            </form>

            {mensaje && (
              <div
                className={`alert mt-3 ${error ? 'alert-danger' : 'alert-success'}`}
                role="alert"
              >
                {mensaje}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
