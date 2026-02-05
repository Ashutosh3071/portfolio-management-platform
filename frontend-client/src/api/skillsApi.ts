import axiosInstance from "./axiosInstance";
import { Skill } from "../types/Skill";

export const getAllSkills = async (): Promise<Skill[]> => {
  const response = await axiosInstance.get<Skill[]>("/api/skills");
  return response.data;
};
