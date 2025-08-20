package com.zidioconnect.backend.repository;

import com.zidioconnect.backend.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
