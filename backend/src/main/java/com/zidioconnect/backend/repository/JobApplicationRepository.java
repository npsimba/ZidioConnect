package com.zidioconnect.backend.repository;

import com.zidioconnect.backend.model.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
    List<JobApplication> findByStudentEmail(String email);
}
