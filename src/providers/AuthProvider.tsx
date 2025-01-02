import api from "@/lib/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface User {
  //   ativo: boolean;
  email: string;
  id: string;
  nome: string;
  role: string;
  uuid: string;
}

interface AuthContextProps {
  user: User | null;
  token: string | null;
  isAuthenticate: boolean;
  login: (user: User, token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const validateToken = async (token: string) => {
  try {
    const response = await api.get("auth/validate-token", { params: { token } }); // Sua rota de validação
    return response.data.isValid; // Supondo que a resposta tenha um campo `isValid`
  } catch (error) {
    console.log("ERROR", error);
    return false; // Se der erro, consideramos que o token é inválido
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticate, setIsAuthenticate] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    // Verifica se há dados de autenticação no AsyncStorage ao iniciar
    const loadAuthData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        const storedToken = await AsyncStorage.getItem("token");

        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
          setIsAuthenticate(true);
        }
      } catch (error) {
        console.error("Erro ao carregar dados de autenticação", error);
      }
    };

    loadAuthData();
  }, []);

  const login = async (user: User, token: string) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      await AsyncStorage.setItem("token", token);

      setUser(user);
      setToken(token);
      setIsAuthenticate(true);
    } catch (error) {
      console.error("Erro ao salvar dados de autenticação", error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("token");

      setUser(null);
      setToken(null);
      setIsAuthenticate(false);
      router.replace("sign-in");
    } catch (error) {
      console.error("Erro ao remover dados de autenticação", error);
    }
  };

  // Verificar o token ao iniciar o provider
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        const isValidToken = await validateToken(token); // Valida o token com a API

        if (isValidToken) {
          setIsAuthenticate(true);
        } else {
          logout(); // Se o token for inválido, faz o logout
        }
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticate, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthProvider = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
