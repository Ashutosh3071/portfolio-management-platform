package com.portfolio.backend.repository;

import com.portfolio.backend.entity.PastEmployment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PastEmploymentRepository extends JpaRepository<PastEmployment, Long> {
}
