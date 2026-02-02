import axiosInstance from "./axiosInstance";

export interface AnalyticsStats {
  totalSkills: number;
  totalMessages: number;
  userMessages: number;
  aiMessages: number;
}

export const getAnalytics = async (): Promise<AnalyticsStats> => {
  const response = await axiosInstance.get<AnalyticsStats>("/api/analytics");
  return response.data;
};
