package com.silk.casme.repository;

import com.silk.casme.domain.DmCqbh;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * Spring Data Cassandra repository for the DmCqbh entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DmCqbhRepository extends CassandraRepository<DmCqbh, UUID> {

}
