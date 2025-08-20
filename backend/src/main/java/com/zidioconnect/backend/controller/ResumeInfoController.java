package com.zidioconnect.backend.controller;

import com.zidioconnect.backend.enums.ResumeStatus;
import com.zidioconnect.backend.model.ResumeInfo;
import com.zidioconnect.backend.service.ResumeInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resumes")

public class ResumeInfoController {
    @Autowired
    private ResumeInfoService resumeService;

    //get all resumes (Recruiter/admin)
    @GetMapping
    @PreAuthorize("hasAnyRole('RECRUITER','ADMIN')")
    public ResponseEntity<List<ResumeInfo>> getAllResumes(){
        return ResponseEntity.ok(resumeService.getAllResumes());
    }

    //update status of a resume
    @PutMapping
    @PreAuthorize("hasRole('RECRUITER')")
    public ResponseEntity<ResumeInfo> updateStatus(@PathVariable Long id, @RequestParam ResumeStatus status){
        return ResponseEntity.ok(resumeService.updateResumeStatus(id,status));
    }

    //get Resumes by users(Student)
    @GetMapping("/my")
    @PreAuthorize("hasAnyRole('STUDENT')")
    public ResponseEntity<List<ResumeInfo>> getmyResume(@RequestParam String email){
        return ResponseEntity.ok(resumeService.getResumeByUser(email));
    }
}
