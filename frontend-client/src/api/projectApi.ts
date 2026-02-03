import axiosInstance from "./axiosInstance";
import { Project } from "../models/Project";

export const getAllProjects = async (): Promise<Project[]> => {
  const response = await axiosInstance.get<Project[]>("/api/projects");
  return response.data;
};
