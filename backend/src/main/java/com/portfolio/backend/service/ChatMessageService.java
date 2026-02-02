package com.portfolio.backend.service;

import com.portfolio.backend.entity.ChatMessage;
import java.util.List;

public interface ChatMessageService {

    ChatMessage saveMessage(ChatMessage message);

    List<ChatMessage> getAllMessages();
}
