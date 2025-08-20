package com.zidioconnect.backend.model;

import com.zidioconnect.backend.enums.ResumeStatus;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "resume_info")
public class ResumeInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fileName;
    private String fileUrl;
    private String uploadedBy;
    private LocalDateTime uploadedAt;

    @Enumerated(EnumType.STRING)
    private ResumeStatus status = ResumeStatus.PENDING;

    public ResumeInfo() {
    }

    public ResumeInfo(String fileName, String fileUrl, String uploadedBy, LocalDateTime uploadedAt) {
        this.fileName = fileName;
        this.fileUrl = fileUrl;
        this.uploadedBy = uploadedBy;
        this.uploadedAt = uploadedAt;
    }

    //getters and setters
    public Long getId() { return id; }
    public String getFileName() { return fileName; }
    public void setFileName(String fileName){ this.fileName = fileName; }
    public String getFileUrl() { return fileUrl; }
    public void setFileUrl(String fileUrl){this.fileUrl = fileUrl;}
    public String getUploadedBy() { return uploadedBy; }
    public void setUploadedBy(String uploadedBy){this.uploadedBy = uploadedBy;}
    public LocalDateTime getUploadedAt(){  return uploadedAt; }
    public void setUploadedAt(LocalDateTime uploadedAt){ this.uploadedAt = uploadedAt; }
    public ResumeStatus getStatus (){ return status; }
    public void setStatus(ResumeStatus status){ this.status = status; }

}
