package com.portfolio.backend.repository;

import com.portfolio.backend.entity.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {

    long countBySender(String sender);
}
