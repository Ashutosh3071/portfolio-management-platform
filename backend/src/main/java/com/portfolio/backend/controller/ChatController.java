package com.portfolio.backend.controller;

import com.portfolio.backend.entity.ChatMessage;
import com.portfolio.backend.service.AiChatService;
import com.portfolio.backend.service.ChatMessageService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "*")
public class ChatController {

    private final ChatMessageService chatService;
    private final AiChatService aiChatService;

    public ChatController(ChatMessageService chatService,
                          AiChatService aiChatService) {
        this.chatService = chatService;
        this.aiChatService = aiChatService;
    }

    @PostMapping
    public ChatMessage sendMessage(@RequestBody ChatMessage message) {

        // Save USER message
        chatService.saveMessage(message);

        // Generate AI reply
        String aiReply = aiChatService.generateReply(message.getMessage());

        ChatMessage aiMessage = new ChatMessage("AI", aiReply);
        return chatService.saveMessage(aiMessage);
    }

    @GetMapping
    public List<ChatMessage> getMessages() {
        return chatService.getAllMessages();
    }
}
