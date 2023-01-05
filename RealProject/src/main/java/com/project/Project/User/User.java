package com.project.Project.User;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.List;

@Entity
public class User {
    @Id
    private int ctcLinkId;
    private String username;
    private String bcEmail;
    private String password;
    //private Forum[] following;
    private String[] interests;

    public User() {
    }

    public int getCtcLinkId() {
        return ctcLinkId;
    }

    public void setCtcLinkId(int ctcLinkId) {
        this.ctcLinkId = ctcLinkId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getBcEmail() {
        return bcEmail;
    }

    public void setBcEmail(String bcEmail) {
        this.bcEmail = bcEmail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String[] getInterests() {
        return interests;
    }

    public void setInterests(String[] interests) {
        this.interests = interests;
    }
}
