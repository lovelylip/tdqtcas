package com.silk.casme.service;

import com.silk.casme.service.dto.DmDonViDTO;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * Service Interface for managing DmDonVi.
 */
public interface DmDonViService {

    /**
     * Save a dmDonVi.
     *
     * @param dmDonViDTO the entity to save
     * @return the persisted entity
     */
    DmDonViDTO save(DmDonViDTO dmDonViDTO);

    /**
     * Get all the dmDonVis.
     *
     * @return the list of entities
     */
    List<DmDonViDTO> findAll();


    /**
     * Get the "id" dmDonVi.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<DmDonViDTO> findOne(UUID id);

    /**
     * Delete the "id" dmDonVi.
     *
     * @param id the id of the entity
     */
    void delete(UUID id);
}
