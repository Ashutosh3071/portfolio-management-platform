package com.portfolio.service;
import com.portfolio.backend.service.SkillServiceImpl;
import com.portfolio.backend.entity.Skill;
import com.portfolio.backend.repository.SkillRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class SkillServiceTest {

    private final SkillRepository skillRepository = Mockito.mock(SkillRepository.class);
    private final SkillServiceImpl skillService = new SkillServiceImpl(skillRepository);

    @Test
    void testGetAllSkills() {
        Skill skill = new Skill("Java", 90, "Backend");
        when(skillRepository.findAll()).thenReturn(List.of(skill));

        List<Skill> skills = skillService.getAllSkills();

        assertEquals(1, skills.size());
        assertEquals("Java", skills.get(0).getName());
        verify(skillRepository, times(1)).findAll();
    }
}
