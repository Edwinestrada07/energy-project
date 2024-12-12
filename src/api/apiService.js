import axios from 'aaxios';

const API_URL = "http://localhost:8080/api";

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});


const apiService = {
    /*Users*/
    loginUsuario: async (pUserName, pPassword) => {
        try {
            const response = await apiClient.post('/user/login', {
                username: pUserName,
                password: pPassword
            });
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },

    getAllUsers: async () => {
        try {
            const response = await apiClient.get('/user');
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },

    getUserById: async (pId) => {
        try {
            const response = await apiClient.get(`/user/${pId}`);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },

    createUser: async (data) => {
        try {
            const response = await apiClient.post('/user', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },

    updateUser: async (pId, data) => {
        try {
            const response = await apiClient.put(`/user/${pId}`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },

    patchUser: async (pId, data) => {
        try {
            const response = await apiClient.patch(`/user/${pId}`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },

    deleteUser: async (pId) => {
        try {
            const response = await apiClient.delete(`/user/${pId}`);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },


    /*News*/

    getAllNews: async () => {
        try {
            const response = await apiClient.get('/news');
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },

    getNewById: async (pId) => {
        try {
            const response = await apiClient.get(`/news/${pId}`);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },

    /*Comments*/

    insertComment: async (pId,data) => {
        try {
            const response = await apiClient.post(`/comment/news/${pId}`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },

    getAllCommentsByNewsId: async (pId) => {
        try {
            const response = await apiClient.get(`/comment/news/${pId}`);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },

    /*Carbono Calculator*/

    insertResultCarbonoCalculator: async (data) => {
        try {
            const response = await apiClient.post('/carbono-calculator', data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },

    getAllResultsCarbonoCalculator: async () => {
        try {
            const response = await apiClient.get('/carbono-calculator');
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },

    getResultCarbonoCalculatorById: async (pId) => {
        try {
            const response = await apiClient.get(`/carbono-calculator/${pId}`);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
};

export default apiService;