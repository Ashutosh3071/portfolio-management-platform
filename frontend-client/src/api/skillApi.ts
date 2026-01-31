import axios from "axios";
import { Skill } from "../models/Skill";

const API_URL = "http://localhost:8080/api/skills";

export const getAllSkills = async (): Promise<Skill[]> => {
  const response = await axios.get<Skill[]>(API_URL);
  return response.data;
};
