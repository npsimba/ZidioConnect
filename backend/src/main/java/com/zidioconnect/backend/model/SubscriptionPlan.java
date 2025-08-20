package com.zidioconnect.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name ="subscription_plans")
public class SubscriptionPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double price;
    private int durationInDays; // ex: 30, 90,365 days

    private SubscriptionPlan() {}

    public SubscriptionPlan(String name, double price, int durationInDays){
        this.name = name;
        this.price = price;
        this.durationInDays = durationInDays;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public int getDurationInDays() { return durationInDays; }
    public void setDurationInDays(int durationInDays) { this.durationInDays = durationInDays; }
}
