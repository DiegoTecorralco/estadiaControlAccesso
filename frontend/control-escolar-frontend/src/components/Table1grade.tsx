import { useEffect, useState } from "react";
import { getAllStudents, updateStudent, deleteStudent } from "../services/studentServices";
import logoCentroEscolar from "../assets/logo_centro_escolar.jpg";

interface Student {
  nia: number;
  name: string;
  lastname: string;
  semester: string;
  grade: number;
  group: string;
}

export const Table = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null); 

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await getAllStudents();
      const filtered = data.data.filter((student: Student) => student.grade === 1);
      setStudents(filtered);
    } catch (error) {
      console.error("Error al obtener los datos de los estudiantes", error);
    }
  };

  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleDeleteClick = (student: Student) => {
    setStudentToDelete(student);
  };

  const confirmDelete = async () => {
    if (studentToDelete) {
      await deleteStudent(studentToDelete.nia);
      setStudentToDelete(null); 
      fetchStudents();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (selectedStudent) {
      const { name, value } = e.target;
      setSelectedStudent({
        ...selectedStudent,
        [name]: name === "grade" ? parseInt(value) : value,
      });
    }
  };

  const handleSave = async () => {
    if (selectedStudent) {
      try {
        await updateStudent(selectedStudent.nia, selectedStudent);
        setShowModal(false);
        fetchStudents();
      } catch (error) {
        console.error("Error al actualizar el estudiante:", error);
      }
    }
  };

  const grupoA = students.filter((student) => student.group === "A");
  const grupoB = students.filter((student) => student.group === "B");
  const grupoC = students.filter((student) => student.group === "C");

  const renderTable = (grupo: string, data: Student[]) => (
    <div className="mb-5">
      <h4>Lista del Grupo {grupo}</h4>
      <p>Aquí estan todos los estudiantes inscritos en el 1° grado grupo {grupo}</p>
      <div className="table-responsive">
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
            {data.map((student) => (
              <tr key={student.nia}>
                <td>{student.nia}</td>
                <td>{student.name}</td>
                <td>{student.lastname}</td>
                <td>{student.semester}</td>
                <td>{student.grade}</td>
                <td>{student.group}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleEdit(student)}
                  >
                    Editar
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteClick(student)} 
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <>
      {renderTable("A", grupoA)}
      {renderTable("B", grupoB)}
      {renderTable("C", grupoC)}

      {/* Modal para Editar */}
      {showModal && selectedStudent && (
        <div className="modal d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#007BFF",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={logoCentroEscolar}
                  alt="Logo"
                  style={{ width: "40px", marginRight: "50px" }}
                />
                <h5 className="modal-title">Editar Estudiante</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  name="name"
                  className="form-control mb-2"
                  value={selectedStudent.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  name="lastname"
                  className="form-control mb-2"
                  value={selectedStudent.lastname}
                  onChange={handleChange}
                  placeholder="Apellido"
                />
                <select
                  name="semester"
                  className="form-control mb-2"
                  value={selectedStudent.semester}
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                <select
                  name="grade"
                  className="form-control mb-2"
                  value={selectedStudent.grade}
                  onChange={handleChange}
                >
                  {[1, 2, 3].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                <select
                  name="group"
                  className="form-control mb-2"
                  value={selectedStudent.group}
                  onChange={handleChange}
                >
                  <option value="A">Grupo A</option>
                  <option value="B">Grupo B</option>
                  <option value="C">Grupo C</option>
                </select>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button className="btn btn-primary" onClick={handleSave}>
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Confirmación de Eliminación */}
      {studentToDelete && (
        <div className="modal d-block" tabIndex={-1}>
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title">Confirmar Eliminación</h5>
                <button type="button" className="btn-close" onClick={() => setStudentToDelete(null)}></button>
              </div>
              <div className="modal-body text-center">
                <p>
                  ¿Estás seguro de que deseas eliminar al estudiante <strong>{studentToDelete.name} {studentToDelete.lastname}</strong>?
                </p>
                <p><small>Esta acción no es reversible</small></p>
                <p><small>NIA: {studentToDelete.nia}</small></p>
              </div>
              <div className="modal-footer justify-content-center">
                <button className="btn btn-danger" onClick={() => setStudentToDelete(null)}>Cancelar</button>
                <button className="btn btn-success" onClick={confirmDelete}>Confirmar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};