package com.zidioconnect.backend.service;

import com.zidioconnect.backend.enums.ResumeStatus;
import com.zidioconnect.backend.model.ResumeInfo;
import com.zidioconnect.backend.repository.ResumeInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ResumeInfoService {

    @Autowired
    private ResumeInfoRepository resumeRepo;

    public ResumeInfo saveResume(ResumeInfo resume) {
        return resumeRepo.save(resume);
    }

    public List<ResumeInfo> getResumeByUser(String email){
        return resumeRepo.findByUploadedBy(email);
    }

    public List<ResumeInfo> getAllResumes(){
        return resumeRepo.findAll();
    }

    public ResumeInfo updateResumeStatus(Long id, ResumeStatus status){
        ResumeInfo resume = resumeRepo.findById(id).orElseThrow(() -> new RuntimeException("Resume not found"));
        resume.setStatus(status);
        return resumeRepo.save(resume);
    }
}
