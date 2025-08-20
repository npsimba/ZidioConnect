package com.zidioconnect.backend.controller;

import com.zidioconnect.backend.dto.LoginRequest;
import com.zidioconnect.backend.dto.RegisterRequest;
import com.zidioconnect.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")

public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String registerUser(@RequestBody RegisterRequest request){
        return authService.register(request);
    }
    @PostMapping("/login")
    public String loginUser(@RequestBody LoginRequest request){
        return authService.login(request);
    }
}
