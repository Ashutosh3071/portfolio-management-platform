package com.portfolio.backend.service;

import com.portfolio.backend.entity.PastEmployment;
import com.portfolio.backend.repository.PastEmploymentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PastEmploymentServiceImpl implements PastEmploymentService {

    private final PastEmploymentRepository repository;

    public PastEmploymentServiceImpl(PastEmploymentRepository repository) {
        this.repository = repository;
    }

    @Override
    public PastEmployment createEmployment(PastEmployment employment) {
        return repository.save(employment);
    }

    @Override
    public List<PastEmployment> getAllEmployment() {
        return repository.findAll();
    }

    @Override
    public PastEmployment getEmploymentById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void deleteEmployment(Long id) {
        repository.deleteById(id);
    }
}
