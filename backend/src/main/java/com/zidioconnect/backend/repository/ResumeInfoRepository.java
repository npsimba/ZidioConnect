package com.zidioconnect.backend.repository;

import com.zidioconnect.backend.model.ResumeInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public  interface  ResumeInfoRepository extends JpaRepository<ResumeInfo, Long> {
    List<ResumeInfo> findByUploadedBy(String email);
}
