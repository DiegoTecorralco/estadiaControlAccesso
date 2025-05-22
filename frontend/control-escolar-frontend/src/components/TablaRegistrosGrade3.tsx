import { useEffect, useState } from 'react';
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

export const TablaRegistrosGrade3 = () => {
  const [registros, setRegistros] = useState<Registro[]>([]);

  useEffect(() => {
    getRegistrosByGrade("3")
      .then((response) => {
        const { data } = response;
        console.log("Datos de los estudiantes obtenidos", data);
        setRegistros(data);
      })
      .catch((error) => {
        console.error("Error al obtener los registros", error);
      });
  }, []);

  const registrosGrupoA = registros.filter((reg) => reg.group === "A");
  const registrosGrupoB = registros.filter((reg) => reg.group === "B");
  const registrosGrupoC = registros.filter((reg) => reg.group === "C");

  const renderTabla = (grupo: string, data: Registro[]) => (
    <div className="mb-5">
      <h4>Registros del Grupo {grupo}</h4>
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
      {renderTabla("A", registrosGrupoA)}
      {renderTabla("B", registrosGrupoB)}
      {renderTabla("C", registrosGrupoC)}
    </>
  );
};
