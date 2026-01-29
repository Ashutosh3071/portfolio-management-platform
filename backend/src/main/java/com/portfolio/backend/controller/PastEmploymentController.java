package com.portfolio.backend.controller;

import com.portfolio.backend.entity.PastEmployment;
import com.portfolio.backend.service.PastEmploymentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employment")
@CrossOrigin(origins = "*")
public class PastEmploymentController {

    private final PastEmploymentService service;

    public PastEmploymentController(PastEmploymentService service) {
        this.service = service;
    }

    @PostMapping
    public PastEmployment createEmployment(@RequestBody PastEmployment employment) {
        return service.createEmployment(employment);
    }

    @GetMapping
    public List<PastEmployment> getAllEmployment() {
        return service.getAllEmployment();
    }

    @GetMapping("/{id}")
    public PastEmployment getEmploymentById(@PathVariable Long id) {
        return service.getEmploymentById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployment(@PathVariable Long id) {
        service.deleteEmployment(id);
    }
}
