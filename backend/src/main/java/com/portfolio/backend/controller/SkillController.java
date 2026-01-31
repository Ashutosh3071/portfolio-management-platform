package com.portfolio.backend.controller;

import com.portfolio.backend.entity.Skill;
import com.portfolio.backend.service.SkillService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@CrossOrigin(origins = "*")
public class SkillController {

    private final SkillService service;

    public SkillController(SkillService service) {
        this.service = service;
    }

    @PostMapping
    public Skill createSkill(@RequestBody Skill skill) {
        return service.createSkill(skill);
    }

    @GetMapping
    public List<Skill> getAllSkills() {
        return service.getAllSkills();
    }

    @GetMapping("/{id}")
    public Skill getSkillById(@PathVariable Long id) {
        return service.getSkillById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteSkill(@PathVariable Long id) {
        service.deleteSkill(id);
    }
}
