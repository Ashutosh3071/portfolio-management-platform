import axiosInstance from "./axiosInstance";
import { Skill } from "../models/Skill";

export const getAllSkills = async (): Promise<Skill[]> => {
  const response = await axiosInstance.get<Skill[]>("/api/skills");
  return response.data;
};
