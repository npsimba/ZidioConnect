package com.zidioconnect.backend.controller;

import com.zidioconnect.backend.model.ResumeInfo;
import com.zidioconnect.backend.repository.ResumeRepository;
import com.zidioconnect.backend.service.ResumeUploadService;
import com.zidioconnect.backend.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/resume")
public class ResumeUploadController {

    @Autowired
    private ResumeUploadService resumeUploadService;

    @Autowired
    private ResumeRepository resumeRepo;

    @Autowired
    private JwtUtil jwtUtil;

    // Upload resume
    @PostMapping("/upload")
    @PreAuthorize("hasAnyRole('STUDENT','RECRUITER')")
    public ResponseEntity<?> uploadResume(@RequestParam("file") MultipartFile file, HttpServletRequest request) {
        try {
            String url = resumeUploadService.uploadResume(file, request);
            return ResponseEntity.ok("Resume uploaded and saved to DB at: " + url);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Upload failed: " + e.getMessage());
        }
    }

    // Fetch all resumes uploaded by logged-in user
    @GetMapping("/my")
    @PreAuthorize("hasAnyRole('STUDENT','RECRUITER')")
    public ResponseEntity<List<ResumeInfo>> getMyResumes(HttpServletRequest request) {
        String token = request.getHeader("Authorization").substring(7);
        String email = jwtUtil.extractEmail(token);
        return ResponseEntity.ok(resumeRepo.findByUploadedBy(email));
    }
}
