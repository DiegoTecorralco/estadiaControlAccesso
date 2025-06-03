// src/services/registroService.tsx
import axios from 'axios';

const api_url = "http://localhost:3100/api/registro";

// 👉 Añadir token a cada petición
const authHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const insertRegister = async (nia: string): Promise<any> => {
  const response = await axios.post(`${api_url}/insert`, { nia }, authHeaders());
  return response.data;
};

export const getRegistrosBySemester = async (semester: string): Promise<any> => {
  const response = await axios.get(`${api_url}/bySemester/${semester}`, authHeaders());
  return response.data;
};

export const getRegistrosByGrade = async (grade: string): Promise<any> => {
  const response = await axios.get(`${api_url}/byGrade/${grade}`, authHeaders());
  return response.data;
};
