// Java Program to Illustrate Creation Of
// Service Interface

package com.project.virtual_golf_appointment_app_backend.service;

// Importing required classes
import com.project.virtual_golf_appointment_app_backend.entity.EmailDetails;

// Interface
public interface EmailService {

    // Method
    // To send a simple email
    String sendSimpleMail(EmailDetails details);

}
