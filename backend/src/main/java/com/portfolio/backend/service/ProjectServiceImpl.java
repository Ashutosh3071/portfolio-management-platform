package com.portfolio.backend.service;

import com.portfolio.backend.dto.ProjectRequest;
import com.portfolio.backend.entity.Project;
import com.portfolio.backend.entity.Skill;
import com.portfolio.backend.repository.ProjectRepository;
import com.portfolio.backend.repository.SkillRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.HashSet;

@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;
    private final SkillRepository skillRepository;

    public ProjectServiceImpl(ProjectRepository projectRepository,
                              SkillRepository skillRepository) {
        this.projectRepository = projectRepository;
        this.skillRepository = skillRepository;
    }

    // ✅ CREATE PROJECT USING DTO
    @Override
    public Project createProject(ProjectRequest request) {

        Project project = new Project();
        project.setTitle(request.getTitle());
        project.setDescription(request.getDescription());
        project.setTechStack(request.getTechStack());
        project.setClientName(request.getClientName());

        // Attach existing skills using IDs
        if (request.getSkillIds() != null && !request.getSkillIds().isEmpty()) {
            Set<Skill> skills = new HashSet<>();

            for (Long skillId : request.getSkillIds()) {
                Skill skill = skillRepository.findById(skillId)
                        .orElseThrow(() ->
                                new RuntimeException("Skill not found with id: " + skillId)
                        );
                skills.add(skill);
            }

            project.setSkills(skills);
        }

        return projectRepository.save(project);
    }

    // ✅ GET ALL PROJECTS
    @Override
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // ✅ GET PROJECT BY ID
    @Override
    public Project getProjectById(Long id) {
        return projectRepository.findById(id).orElse(null);
    }

    // ✅ DELETE PROJECT
    @Override
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}
