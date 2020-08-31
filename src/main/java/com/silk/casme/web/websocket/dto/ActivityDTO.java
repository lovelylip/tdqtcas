package com.silk.casme.web.websocket.dto;

import java.time.Instant;

/**
 * DTO for storing a user's activity.
 */
public class ActivityDTO {

    private String sessionId;

    private String userLogin;

    private String ipAddress;

    private String page;

    private Instant time;

    private String maCqbh;

    private String maDvi;

    public String getMaCqbh() {
        return maCqbh;
    }

    public void setMaCqbh(String maCqbh) {
        this.maCqbh = maCqbh;
    }

    public String getMaDvi() {
        return maDvi;
    }

    public void setMaDvi(String maDvi) {
        this.maDvi = maDvi;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public String getUserLogin() {
        return userLogin;
    }

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public String getPage() {
        return page;
    }

    public void setPage(String page) {
        this.page = page;
    }

    public Instant getTime() {
        return time;
    }

    public void setTime(Instant time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return "ActivityDTO{" +
            "sessionId='" + sessionId + '\'' +
            ", userLogin='" + userLogin + '\'' +
            ", ipAddress='" + ipAddress + '\'' +
            ", page='" + page + '\'' +
            ", time=" + time +
            ", maCqbh='" + maCqbh + '\'' +
            ", maDvi='" + maDvi + '\'' +
            '}';
    }

    public ActivityDTO() {
    }

    public ActivityDTO(String sessionId, String userLogin, String ipAddress, String page, Instant time, String maCqbh, String maDvi) {
        this.sessionId = sessionId;
        this.userLogin = userLogin;
        this.ipAddress = ipAddress;
        this.page = page;
        this.time = time;
        this.maCqbh = maCqbh;
        this.maDvi = maDvi;
    }
}
