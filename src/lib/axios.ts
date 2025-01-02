// src/api/axios.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

// Interceptador de requisição para incluir o token no cabeçalho
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("token");
      // Se o token existir, adicione-o ao cabeçalho Authorization
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Erro ao obter token do AsyncStorage:", error);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Exemplo de interceptador de resposta (opcional)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default api;
