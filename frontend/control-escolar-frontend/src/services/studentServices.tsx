import axios from 'axios';

const api_url = "http://localhost:3100/api/student";

// ✅ Agrega automáticamente el token en cada solicitud
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

export const getAllStudents = async (): Promise<any> => {
  const response = await axios.get(`${api_url}/getAll`, getAuthHeaders());
  return response.data;
};

export const getOneStudent = async (id: string): Promise<any> => {
  const response = await axios.get(`${api_url}/getOne/${id}`, getAuthHeaders());
  return response.data.data;
};

export const insertStudent = async (student: any): Promise<any> => {
  const response = await axios.post(`${api_url}/insert`, student, getAuthHeaders());
  return response.data;
};

export const updateStudent = async (id: string, student: any): Promise<any> => {
  const response = await axios.put(`${api_url}/update/${id}`, student, getAuthHeaders());
  return response.data;
};

export const deleteStudent = async (id: string): Promise<any> => {
  const response = await axios.delete(`${api_url}/delete/${id}`, getAuthHeaders());
  return response.data;
};

export const getStudentsBySemester = async (semester: string): Promise<any> => {
  const response = await axios.get(`${api_url}/getBySemester/${semester}`, getAuthHeaders());
  return response.data;
};
