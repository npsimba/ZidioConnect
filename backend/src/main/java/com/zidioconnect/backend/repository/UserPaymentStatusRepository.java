package com.zidioconnect.backend.repository;

import com.zidioconnect.backend.model.User;
import com.zidioconnect.backend.model.UserPaymentStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserPaymentStatusRepository extends JpaRepository<UserPaymentStatus, Long> {
    Optional<UserPaymentStatus> findByUserId(Long userId);
}
