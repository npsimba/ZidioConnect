package com.zidioconnect.backend.service;

import com.zidioconnect.backend.enums.PaidStatus;
import com.zidioconnect.backend.model.SubscriptionPlan;
import com.zidioconnect.backend.model.UserPaymentStatus;
import com.zidioconnect.backend.repository.SubscriptionPlanRepository;
import com.zidioconnect.backend.repository.UserPaymentStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class SubscriptionService {

    @Autowired
    private SubscriptionPlanRepository planRepo;

    @Autowired
    private UserPaymentStatusRepository statusRepo;

    public SubscriptionPlan createPlan(SubscriptionPlan plan) {
        return planRepo.save(plan);
    }

    public List<SubscriptionPlan> getAllPlans() {
        return planRepo.findAll();
    }

    public UserPaymentStatus assignPlan(Long userId, Long planId) {
        SubscriptionPlan plan = planRepo.findById(planId)
                .orElseThrow(() -> new RuntimeException("Plan not found"));

        LocalDate start = LocalDate.now();
        LocalDate end = start.plusDays(plan.getDurationInDays());

        UserPaymentStatus status = new UserPaymentStatus();
        status.setUserId(userId);
        status.setPlanId(planId);
        status.setSubscriptionStart(start);
        status.setSubscriptionEnd(end);
        status.setStatus(PaidStatus.ACTIVE);

        return statusRepo.save(status);
    }

    public Optional<UserPaymentStatus> getStatus(Long userId) {
        return statusRepo.findByUserId(userId);
    }
}
