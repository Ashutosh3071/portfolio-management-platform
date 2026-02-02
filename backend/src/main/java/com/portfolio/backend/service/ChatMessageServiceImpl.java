package com.portfolio.backend.service;

import com.portfolio.backend.entity.ChatMessage;
import com.portfolio.backend.repository.ChatMessageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatMessageServiceImpl implements ChatMessageService {

    private final ChatMessageRepository repository;

    public ChatMessageServiceImpl(ChatMessageRepository repository) {
        this.repository = repository;
    }

    @Override
    public ChatMessage saveMessage(ChatMessage message) {
        return repository.save(message);
    }

    @Override
    public List<ChatMessage> getAllMessages() {
        return repository.findAll();
    }
}
