package com.silk.casme.service;

import com.silk.casme.service.dto.DmCqbhDTO;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * Service Interface for managing DmCqbh.
 */
public interface DmCqbhService {

    /**
     * Save a dmCqbh.
     *
     * @param dmCqbhDTO the entity to save
     * @return the persisted entity
     */
    DmCqbhDTO save(DmCqbhDTO dmCqbhDTO);

    /**
     * Get all the dmCqbhs.
     *
     * @return the list of entities
     */
    List<DmCqbhDTO> findAll();


    /**
     * Get the "id" dmCqbh.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<DmCqbhDTO> findOne(UUID id);

    /**
     * Delete the "id" dmCqbh.
     *
     * @param id the id of the entity
     */
    void delete(UUID id);
}
