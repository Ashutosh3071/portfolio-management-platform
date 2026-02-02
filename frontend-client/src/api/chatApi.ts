import axiosInstance from "./axiosInstance";

export interface ChatMessage {
  id?: number;
  sender: string;
  message: string;
  timestamp?: string;
}

export const sendMessage = async (message: ChatMessage): Promise<ChatMessage> => {
  const response = await axiosInstance.post<ChatMessage>("/api/chat", message);
  return response.data;
};

export const getMessages = async (): Promise<ChatMessage[]> => {
  const response = await axiosInstance.get<ChatMessage[]>("/api/chat");
  return response.data;
};
