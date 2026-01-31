package com.portfolio.backend.service;

import com.portfolio.backend.entity.Skill;
import java.util.List;

public interface SkillService {

    Skill createSkill(Skill skill);

    List<Skill> getAllSkills();

    Skill getSkillById(Long id);

    void deleteSkill(Long id);
}
