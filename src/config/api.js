import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
    timeout: 60000,
});

export const fetchData = async () => {
    try {
        const response = await api.get('');
        const data = response.data;
        return data;
    } catch (error) {
        throw error;
    }
};

export default api;