package com.zidioconnect.backend.payload;


import com.zidioconnect.backend.enums.ResumeStatus;
import java.time.LocalDateTime;

public class ResumeInfoDTO {
    public Long id;
    public String fileName;
    public String fileUrl;
    public String uploadedBy;
    public LocalDateTime uploadedAt;
    public ResumeStatus status;

}
