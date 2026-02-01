import axios from "axios";
import { AuthResponse } from "../models/AuthResponse";

const API_URL = "http://localhost:8080/api/auth";

export const login = async (
  username: string,
  password: string
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${API_URL}/login`, {
    username,
    password,
  });
  return response.data;
};

export const register = async (
  username: string,
  password: string
): Promise<string> => {
  const response = await axios.post<string>(`${API_URL}/register`, {
    username,
    password,
  });
  return response.data;
};
