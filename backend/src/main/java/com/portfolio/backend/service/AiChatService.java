package com.portfolio.backend.service;

import org.springframework.stereotype.Service;

@Service
public class AiChatService {

    public String generateReply(String userMessage) {

        String msg = userMessage.toLowerCase();

        if (msg.contains("project")) {
            return "I have worked on full-stack projects using Spring Boot, React, and MySQL.";
        }

        if (msg.contains("skill")) {
            return "My key skills include Java, Spring Boot, React, REST APIs, and SQL.";
        }

        if (msg.contains("experience")) {
            return "I have hands-on experience building secure full-stack applications.";
        }

        if (msg.contains("contact")) {
            return "You can contact me via email or LinkedIn listed in the portfolio.";
        }

        return "I’m here to help! You can ask me about projects, skills, or experience.";
    }
}
