package com.project.virtual_golf_appointment_app_backend.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
public class EmailDetails {
    private String recipient;
    private String msgBody;
    private String subject;
    private String attachment;

    public String getRecipient() {return this.recipient;}

    public String getMsgBody() {return this.msgBody;}

    public String getSubject() {return this.subject;}

    public String getAttachment() {return this.attachment;}
}
