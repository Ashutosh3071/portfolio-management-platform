package com.portfolio.backend.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.Set;
import java.util.HashSet;

@Entity
@Table(name = "skills")
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Integer proficiency;
    private String category;

    @ManyToMany(mappedBy = "skills")
@JsonIgnore
private Set<Project> projects = new HashSet<>();


    public Skill() {}

    public Skill(String name, int proficiency, String category) {
        this.name = name;
        this.proficiency = proficiency;
        this.category = category;
    }

    public Long getId() { return id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getProficiency() { return proficiency; }
    public void setProficiency(int proficiency) { this.proficiency = proficiency; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public Set<Project> getProjects() {
        return projects;
    }

    public void setProjects(Set<Project> projects) {
        this.projects = projects;
    }
}
