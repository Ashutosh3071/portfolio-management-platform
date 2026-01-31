package com.portfolio.backend.service;

import com.portfolio.backend.dto.ProjectRequest;
import com.portfolio.backend.entity.Project;

import java.util.List;

public interface ProjectService {

    // ✅ CREATE PROJECT USING DTO
    Project createProject(ProjectRequest request);

    // ✅ FETCH ALL PROJECTS
    List<Project> getAllProjects();

    // ✅ FETCH PROJECT BY ID
    Project getProjectById(Long id);

    // ✅ DELETE PROJECT
    void deleteProject(Long id);
}
