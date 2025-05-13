import axios from 'axios';

const api_url = "http://localhost:3100/api/student";

export const getAllStudents = async (): Promise<any> => {
    const response = await axios.get(`${api_url}/getAll`);
    return response.data;
}

export const getOneStudent = async (id: string): Promise<any> => {
    const response = await axios.get(`${api_url}/getOne/${id}`);
    return response.data.data;
}

export const insertStudent = async (student: any): Promise<any> => {
    const response = await axios.post(`${api_url}/insert`, student);
    return response.data;
}

export const updateStudent = async (id: string, student: any): Promise<any> => {
    const response = await axios.put(`${api_url}/update/${id}`, student);
    return response.data;
}

export const deleteStudent = async (id: string): Promise<any> => {
    const response = await axios.delete(`${api_url}/delete/${id}`);
    return response.data;
}
    