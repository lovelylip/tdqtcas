package com.silk.casme.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.cassandra.core.mapping.Table;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

/**
 * A DmDonVi.
 */
@Table("dmDonVi")
public class DmDonVi implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private UUID id;

    @NotNull
    private String ma;

    @NotNull
    private String ten;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getMa() {
        return ma;
    }

    public DmDonVi ma(String ma) {
        this.ma = ma;
        return this;
    }

    public void setMa(String ma) {
        this.ma = ma;
    }

    public String getTen() {
        return ten;
    }

    public DmDonVi ten(String ten) {
        this.ten = ten;
        return this;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        DmDonVi dmDonVi = (DmDonVi) o;
        if (dmDonVi.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), dmDonVi.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "DmDonVi{" +
            "id=" + getId() +
            ", ma='" + getMa() + "'" +
            ", ten='" + getTen() + "'" +
            "}";
    }
}
