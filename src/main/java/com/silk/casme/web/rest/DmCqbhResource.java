package com.silk.casme.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.silk.casme.service.DmCqbhService;
import com.silk.casme.web.rest.errors.BadRequestAlertException;
import com.silk.casme.web.rest.util.HeaderUtil;
import com.silk.casme.service.dto.DmCqbhDTO;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * REST controller for managing DmCqbh.
 */
@RestController
@RequestMapping("/api")
public class DmCqbhResource {

    private final Logger log = LoggerFactory.getLogger(DmCqbhResource.class);

    private static final String ENTITY_NAME = "dmCqbh";

    private final DmCqbhService dmCqbhService;

    public DmCqbhResource(DmCqbhService dmCqbhService) {
        this.dmCqbhService = dmCqbhService;
    }

    /**
     * POST  /dm-cqbhs : Create a new dmCqbh.
     *
     * @param dmCqbhDTO the dmCqbhDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new dmCqbhDTO, or with status 400 (Bad Request) if the dmCqbh has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/dm-cqbhs")
    @Timed
    public ResponseEntity<DmCqbhDTO> createDmCqbh(@Valid @RequestBody DmCqbhDTO dmCqbhDTO) throws URISyntaxException {
        log.debug("REST request to save DmCqbh : {}", dmCqbhDTO);
        if (dmCqbhDTO.getId() != null) {
            throw new BadRequestAlertException("A new dmCqbh cannot already have an ID", ENTITY_NAME, "idexists");
        }
        dmCqbhDTO.setId(UUID.randomUUID());
        DmCqbhDTO result = dmCqbhService.save(dmCqbhDTO);
        return ResponseEntity.created(new URI("/api/dm-cqbhs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /dm-cqbhs : Updates an existing dmCqbh.
     *
     * @param dmCqbhDTO the dmCqbhDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated dmCqbhDTO,
     * or with status 400 (Bad Request) if the dmCqbhDTO is not valid,
     * or with status 500 (Internal Server Error) if the dmCqbhDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/dm-cqbhs")
    @Timed
    public ResponseEntity<DmCqbhDTO> updateDmCqbh(@Valid @RequestBody DmCqbhDTO dmCqbhDTO) throws URISyntaxException {
        log.debug("REST request to update DmCqbh : {}", dmCqbhDTO);
        if (dmCqbhDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        DmCqbhDTO result = dmCqbhService.save(dmCqbhDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, dmCqbhDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /dm-cqbhs : get all the dmCqbhs.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of dmCqbhs in body
     */
    @GetMapping("/dm-cqbhs")
    @Timed
    public List<DmCqbhDTO> getAllDmCqbhs() {
        log.debug("REST request to get all DmCqbhs");
        return dmCqbhService.findAll();
    }

    /**
     * GET  /dm-cqbhs/:id : get the "id" dmCqbh.
     *
     * @param id the id of the dmCqbhDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the dmCqbhDTO, or with status 404 (Not Found)
     */
    @GetMapping("/dm-cqbhs/{id}")
    @Timed
    public ResponseEntity<DmCqbhDTO> getDmCqbh(@PathVariable UUID id) {
        log.debug("REST request to get DmCqbh : {}", id);
        Optional<DmCqbhDTO> dmCqbhDTO = dmCqbhService.findOne(id);
        return ResponseUtil.wrapOrNotFound(dmCqbhDTO);
    }

    /**
     * DELETE  /dm-cqbhs/:id : delete the "id" dmCqbh.
     *
     * @param id the id of the dmCqbhDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/dm-cqbhs/{id}")
    @Timed
    public ResponseEntity<Void> deleteDmCqbh(@PathVariable UUID id) {
        log.debug("REST request to delete DmCqbh : {}", id);
        dmCqbhService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
