// Java Program to Create Rest Controller that
// Defines various API for Sending Mail

package com.project.virtual_golf_appointment_app_backend.controller;

// Importing required classes
import com.project.virtual_golf_appointment_app_backend.entity.EmailDetails;
import com.project.virtual_golf_appointment_app_backend.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

// Annotation
@RestController
// Class
public class EmailController {

    @Autowired private EmailService emailService;

    // Sending a simple Email
    @PostMapping("/sendMail")
    public String
    sendMail(@RequestBody EmailDetails details)
    {
        String status
                = emailService.sendSimpleMail(details);

        return status;
    }

}
