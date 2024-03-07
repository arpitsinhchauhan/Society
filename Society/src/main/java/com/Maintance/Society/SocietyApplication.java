package com.Maintance.Society;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;

@SpringBootApplication(exclude = {UserDetailsServiceAutoConfiguration.class})
public class SocietyApplication {

    public static void main(String[] args) {
        SpringApplication.run(SocietyApplication.class, args);
    }

}
