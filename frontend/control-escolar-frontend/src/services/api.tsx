const API_URL = "http://localhost:3100/api";

export const fetchWithToken = async (endpoint: string, options = {}) => {
  const token = localStorage.getItem("token");

  const config = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options as any).headers,
    },
  };

  const response = await fetch(`${API_URL}${endpoint}`, config);
  return response.json();
};
