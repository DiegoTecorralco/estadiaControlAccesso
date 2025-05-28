// src/services/registroService.ts
import axios from 'axios';

const api_url = "http://localhost:3100/api/registro";

export const insertRegister = async (nia: string): Promise<any> => {
  const response = await axios.post(`${api_url}/insert`, { nia }); // Enviamos el NIA en el body
  return response.data;
};

export const getRegistrosBySemester = async (semester: string): Promise<any> => {
  const response = await axios.get(`${api_url}/bySemester/${semester}`);
  return response.data;
};

export const getRegistrosByGrade = async (grade: string): Promise<any> => {
  const response = await axios.get(`${api_url}/byGrade/${grade}`);
  return response.data;
};


