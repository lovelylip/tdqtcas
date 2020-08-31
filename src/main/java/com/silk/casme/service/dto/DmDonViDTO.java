package com.silk.casme.service.dto;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

/**
 * A DTO for the DmDonVi entity.
 */
public class DmDonViDTO implements Serializable {

    private UUID id;

    @NotNull
    private String ma;

    @NotNull
    private String ten;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getMa() {
        return ma;
    }

    public void setMa(String ma) {
        this.ma = ma;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        DmDonViDTO dmDonViDTO = (DmDonViDTO) o;
        if (dmDonViDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), dmDonViDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "DmDonViDTO{" +
            "id=" + getId() +
            ", ma='" + getMa() + "'" +
            ", ten='" + getTen() + "'" +
            "}";
    }
}
