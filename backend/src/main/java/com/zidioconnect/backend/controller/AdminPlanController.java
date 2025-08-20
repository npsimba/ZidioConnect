package com.zidioconnect.backend.controller;

import com.zidioconnect.backend.model.SubscriptionPlan;
import com.zidioconnect.backend.repository.SubscriptionPlanRepository;
import com.zidioconnect.backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/plans")

public class AdminPlanController {

    @Autowired
    private SubscriptionService subscriptionService;

    @PostMapping
    public ResponseEntity<SubscriptionPlan> createPlan(@RequestBody SubscriptionPlan plan){
        return ResponseEntity.ok(subscriptionService.createPlan(plan));

    }

    @GetMapping
    public ResponseEntity<List<SubscriptionPlan>> getPlans() {
        return ResponseEntity.ok(subscriptionService.getAllPlans());
    }
}
