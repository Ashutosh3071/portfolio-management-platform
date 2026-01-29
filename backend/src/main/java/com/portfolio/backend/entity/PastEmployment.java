package com.portfolio.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "past_employment")
public class PastEmployment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String company;
    private String role;
    private String startYear;
    private String endYear;

    public PastEmployment() {}

    public PastEmployment(String company, String role, String startYear, String endYear) {
        this.company = company;
        this.role = role;
        this.startYear = startYear;
        this.endYear = endYear;
    }

    public Long getId() { return id; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getStartYear() { return startYear; }
    public void setStartYear(String startYear) { this.startYear = startYear; }

    public String getEndYear() { return endYear; }
    public void setEndYear(String endYear) { this.endYear = endYear; }
}
