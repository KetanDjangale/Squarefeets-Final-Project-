package com.squarefeets.payload;

import javax.validation.constraints.NotBlank;

public class ChangePasswordPayloadRequest {

    @NotBlank
    private String usernameOrEmail;

    @NotBlank
    private String oldPassword;

    @NotBlank
    private String newPassword;

    public ChangePasswordPayloadRequest(String usernameOrEmail, String oldPassword, String newPassword) {
        this.usernameOrEmail = usernameOrEmail;
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }

    public String getUsernameOrEmail() {
        return usernameOrEmail;
    }

    public void setUsernameOrEmail(String usernameOrEmail) {
        this.usernameOrEmail = usernameOrEmail;
    }

    public String getOldPassword() {
        return oldPassword;
    }

    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
