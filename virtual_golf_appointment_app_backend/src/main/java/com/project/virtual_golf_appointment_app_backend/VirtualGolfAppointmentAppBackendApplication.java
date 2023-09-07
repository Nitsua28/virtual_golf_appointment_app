package com.project.virtual_golf_appointment_app_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class VirtualGolfAppointmentAppBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(VirtualGolfAppointmentAppBackendApplication.class, args);
	}

}
