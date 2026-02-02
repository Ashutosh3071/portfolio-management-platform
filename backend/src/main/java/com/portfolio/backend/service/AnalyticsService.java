package com.portfolio.backend.service;

import com.portfolio.backend.repository.ChatMessageRepository;
import com.portfolio.backend.repository.SkillRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AnalyticsService {

    private final SkillRepository skillRepository;
    private final ChatMessageRepository chatRepository;

    public AnalyticsService(SkillRepository skillRepository,
                            ChatMessageRepository chatRepository) {
        this.skillRepository = skillRepository;
        this.chatRepository = chatRepository;
    }

    public Map<String, Long> getSystemStats() {
        Map<String, Long> stats = new HashMap<>();

        stats.put("totalSkills", skillRepository.count());
        stats.put("totalMessages", chatRepository.count());
        stats.put("userMessages", chatRepository.countBySender("USER"));
        stats.put("aiMessages", chatRepository.countBySender("AI"));

        return stats;
    }
}
