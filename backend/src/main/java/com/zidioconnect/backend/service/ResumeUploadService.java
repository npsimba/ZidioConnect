package com.zidioconnect.backend.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.zidioconnect.backend.model.ResumeInfo;
import com.zidioconnect.backend.repository.ResumeRepository;
import com.zidioconnect.backend.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Map;

@Service
public class ResumeUploadService {

    @Autowired
    private Cloudinary cloudinary;

    @Autowired
    private ResumeRepository resumeRepo;

    @Autowired
    private JwtUtil jwtUtil;

    public String uploadResume(MultipartFile file, HttpServletRequest request) throws IOException {
        // Extract uploader email from JWT
        String token = request.getHeader("Authorization").substring(7);
        String email = jwtUtil.extractEmail(token);

        // Clean file name
        String cleanFileName = file.getOriginalFilename()
                .replaceAll("\\s+", "_")
                .replaceAll("[^a-zA-Z0-9._-]", "");

        // Upload to Cloudinary
        Map<?, ?> result = cloudinary.uploader().upload(file.getBytes(),
                ObjectUtils.asMap(
                        "resource_type", "raw",
                        "public_id", cleanFileName,
                        "use_filename", true,
                        "unique_filename", false,
                        "overwrite", true,
                        "access_mode", "public"
                ));

        String fileUrl = result.get("secure_url").toString();

        // Save to DB
        ResumeInfo resumeInfo = new ResumeInfo(cleanFileName, fileUrl, email, LocalDateTime.now());
        resumeRepo.save(resumeInfo);

        return fileUrl;
    }
}
