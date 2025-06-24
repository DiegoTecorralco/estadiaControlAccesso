import { useState } from "react";
import { insertStudent } from "../services/studentServices";

interface Student {
  nia: number;
  name: string;
  lastname: string;
  semester: string;
  grade: number;
  group: string;
}

export const StudentForm = () => {
  const [formData, setFormData] = useState<Student>({
    nia: 0,
    name: "",
    lastname: "",
    semester: "",
    grade: 1,
    group: "A",
  });

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      await insertStudent(formData);
      setMessage("✅ Estudiante agregado correctamente.");
      setError(false);
      setFormData({
        nia: 0,
        name: "",
        lastname: "",
        semester: "",
        grade: 1,
        group: "A",
      });
    } catch (err) {
      console.error("Error al insertar estudiante:", err);
      setMessage("❌ Error al agregar el estudiante. Verifica los datos.");
      setError(true);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className="card shadow mb-5">
      <div className="card-header bg-primary text-white text-center">
        <h2>Registro de Estudiantes</h2>
        <p className="mb-1">Bachillerato Matutino - Centro Escolar General Rafael Cravioto Pacheco</p>
        <small>
          Ingresa los datos completos del estudiante. <strong>El registro debe hacerse conforme al número de lista</strong> (es decir, uno tras otro en orden), ya que el sistema <strong>no está diseñado para reordenarlos por numero de lista automáticamente</strong>.
        </small>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">NIA</label>
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-primary text-white">
                  <i className="bi bi-person-vcard"></i>
                </span>
                <input
                  type="number"
                  name="nia"
                  value={formData.nia || ""}
                  onChange={handleChange}
                  className="form-control border-3 border-primary shadow"
                  style={{ backgroundColor: "#e3f2fd" }}
                  placeholder="Ej. 123456"
                  required
                />
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Semestre</label>
              <input
                type="text"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="form-control form-control-lg border-primary shadow"
                style={{ backgroundColor: "#e3f2fd" }}
                placeholder="Ej. 2"
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control form-control-lg border-primary shadow"
                style={{ backgroundColor: "#e3f2fd" }}
                placeholder="Ej. Juan"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Apellidos</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="form-control form-control-lg border-primary shadow"
                style={{ backgroundColor: "#e3f2fd" }}
                placeholder="Ej. Pérez Gómez"
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Grado</label>
              <input
                type="number"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="form-control form-control-lg border-primary shadow"
                style={{ backgroundColor: "#e3f2fd" }}
                min={1}
                max={6}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Grupo</label>
              <select
                name="group"
                value={formData.group}
                onChange={handleChange}
                className="form-select form-select-lg border-primary shadow"
                style={{ backgroundColor: "#e3f2fd" }}
                required
              >
                <option value="A">Grupo A</option>
                <option value="B">Grupo B</option>
                <option value="C">Grupo C</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Registrando...
              </>
            ) : (
              "Registrar Estudiante"
            )}
          </button>
        </form>

        {message && (
          <div
            className={`alert mt-4 ${error ? "alert-danger" : "alert-success"}`}
            role="alert"
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};
