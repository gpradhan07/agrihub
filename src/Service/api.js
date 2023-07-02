import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export const signIn = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
