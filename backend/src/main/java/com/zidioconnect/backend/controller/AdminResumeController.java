package com.zidioconnect.backend.controller;
import com.zidioconnect.backend.enums.ResumeStatus;
import com.zidioconnect.backend.model.ResumeInfo;
import com.zidioconnect.backend.repository.ResumeInfoRepository;
import com.zidioconnect.backend.repository.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin/resumes")
@PreAuthorize("hasRole('ADMIN')")
public class AdminResumeController {

    @Autowired
    private ResumeRepository resumeRepository;

    @GetMapping
    public ResponseEntity<List<ResumeInfo>> getAllResumes() {
        return ResponseEntity.ok(resumeRepository.findAll());
    }

    //update resume status(Approve/reject/shortlist)
    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateResumeStatus(@PathVariable Long id, @RequestBody Map<String, String> body) {
        String statusStr = body.get("status");
        ResumeStatus status = ResumeStatus.valueOf(statusStr.toUpperCase());

        ResumeInfo resume = resumeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Resume not found"));

        resume.setStatus(status);
        resumeRepository.save(resume);

        return ResponseEntity.ok("Resume status updated to: " + status);
    }

    }