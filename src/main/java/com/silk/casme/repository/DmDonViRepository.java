package com.silk.casme.repository;

import com.silk.casme.domain.DmDonVi;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Spring Data Cassandra repository for the DmDonVi entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DmDonViRepository extends CassandraRepository<DmDonVi, UUID> {

}
