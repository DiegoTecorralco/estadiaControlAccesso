import { useState, useEffect } from 'react';
import { getRegistrosByGrade } from '../services/registroService';

interface Registro {
  nia: number;
  name: string;
  lastname: string;
  grade: number;
  group: string;
  semester: string;
  asistencia: boolean;
  hora: string;
  esRetardo: boolean;
}

export const TablaRegistrosGrade2 = () => {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState<string>("");

  useEffect(() => {
    getRegistrosByGrade("2")
      .then((response) => {
        const { data } = response;
        console.log("Registros recibidos correctamente", data);
        setRegistros(data);
      })
      .catch((error) => {
        console.error("Error al obtener los registros", error); 
      });
  }, []);

  const obtenerFecha = (hora: string) => hora.split(" ")[0];

  const registrosFiltrados = fechaSeleccionada
  ? registros.filter((reg) =>obtenerFecha(reg.hora) === fechaSeleccionada)
  : registros;

  const registrosGrupoA = registrosFiltrados.filter((reg) => reg.group === "A");
  const registrosGrupoB = registrosFiltrados.filter((reg) => reg.group === "B");
  const registrosGrupoC = registrosFiltrados.filter((reg) => reg.group === "C");

  const renderTabla = (grupo: string, data: Registro[]) => (
    <div className="mb-5">
      <h4>Registros del Grupo {grupo}</h4>
      <p>Aquí están los alumnos registrados en la fecha seleccionada del grupo {grupo}</p>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>NIA</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Grado</th>
              <th>Grupo</th>
              <th>Semestre</th>
              <th>Hora</th>
              <th>Asistencia</th>
              <th>Retardo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((reg) => (
              <tr key={reg.nia}>
                <td>{reg.nia}</td>
                <td>{reg.name}</td>
                <td>{reg.lastname}</td>
                <td>{reg.grade}</td>
                <td>{reg.group}</td>
                <td>{reg.semester}</td>
                <td>{reg.hora}</td>
                <td>{reg.asistencia ? "Sí" : "No"}</td>
                <td>{reg.esRetardo ? "Sí" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <>
    <div className='mb-4'>
      <label className='form-label'>
        <h2 className='text-primary fw-bold'>Busca el Pase de lista por fecha:</h2>
      </label>
      <input
      type='date'
      className='form-control form-control-lg border border-3 border-primary shadow'
      style={{backgroundColor: "#e3f2fd", fontSize: "1.2rem"}}
      value={fechaSeleccionada}
      onChange={(e) =>setFechaSeleccionada(e.target.value)}
      />
    </div>

      {renderTabla("A", registrosGrupoA)}
      {renderTabla("B", registrosGrupoB)}
      {renderTabla("C", registrosGrupoC)}
    </>
  );
};
