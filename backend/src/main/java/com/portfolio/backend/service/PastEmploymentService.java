package com.portfolio.backend.service;

import com.portfolio.backend.entity.PastEmployment;
import java.util.List;

public interface PastEmploymentService {

    PastEmployment createEmployment(PastEmployment employment);

    List<PastEmployment> getAllEmployment();

    PastEmployment getEmploymentById(Long id);

    void deleteEmployment(Long id);
}
