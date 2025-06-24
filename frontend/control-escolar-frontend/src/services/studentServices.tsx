// src/services/studentServices.ts
import axios from 'axios';

const api_url = "http://localhost:3100/api/student";

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

export const getOneStudent = async (nia: number): Promise<any> => {
  const response = await axios.get(`${api_url}/getOne/${nia}`, getAuthHeaders());
  return response.data.data;
};

export const insertStudent = async (student: any): Promise<any> => {
  const response = await axios.post(`${api_url}/insert`, student, getAuthHeaders());
  return response.data;
};

export const updateStudent = async (nia: number, student: any): Promise<any> => {
  const response = await axios.put(`${api_url}/update/${nia}`, student, getAuthHeaders());
  return response.data;
};

export const deleteStudent = async (nia: number): Promise<any> => {
  const response = await axios.delete(`${api_url}/deleteByNia/${nia}`, getAuthHeaders());
  return response.data;
};

export const getStudentsBySemester = async (semester: string): Promise<any> => {
  const response = await axios.get(`${api_url}/getBySemester/${semester}`, getAuthHeaders());
  return response.data;
};
