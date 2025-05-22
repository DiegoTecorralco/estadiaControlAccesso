    import axios from 'axios';

export const getRegistrosBySemester = async (semestre: string): Promise<any> => {
  const response = await axios.get(`http://localhost:3100/api/registro/bySemester/${semestre}`);
  return response.data;
};

export const getRegistrosByGrade = async (grado: string): Promise<any> => {
  const response = await axios.get(`http://localhost:3100/api/registro/byGrade/${grado}`);
  return response.data;
};
