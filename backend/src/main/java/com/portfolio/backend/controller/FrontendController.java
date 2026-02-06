package com.portfolio.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontendController {

    // React client
    @GetMapping(value = {
            "/",
            "/home",
            "/about",
            "/skills",
            "/projects",
            "/contact"
    })
    public String clientRoutes() {
        return "forward:/client/index.html";
    }

    // Angular admin
    @GetMapping(value = {
            "/admin",
            "/admin/**"
    })
    public String adminRoutes() {
        return "forward:/admin/index.html";
    }
}
