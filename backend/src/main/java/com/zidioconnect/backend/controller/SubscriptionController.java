package com.zidioconnect.backend.controller;

import com.zidioconnect.backend.model.UserPaymentStatus;
import com.zidioconnect.backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/subscription")
public class SubscriptionController {

    @Autowired
    private SubscriptionService subscriptionService;

    // Student subscribes to a plan
    @PostMapping("/{userId}/plan/{planId}")
    @PreAuthorize("hasRole('STUDENT')")
    public ResponseEntity<UserPaymentStatus> assignPlan(@PathVariable Long userId,
                                                        @PathVariable Long planId) {
        return ResponseEntity.ok(subscriptionService.assignPlan(userId, planId));
    }

    // Check subscription status
    @GetMapping("/status/{userId}")
    @PreAuthorize("hasAnyRole('STUDENT','ADMIN')")
    public ResponseEntity<UserPaymentStatus> getStatus(@PathVariable Long userId) {
        return subscriptionService.getStatus(userId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
