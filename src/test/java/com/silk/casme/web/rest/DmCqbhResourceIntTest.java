package com.silk.casme.web.rest;

import com.silk.casme.AbstractCassandraTest;
import com.silk.casme.TdqtcasApp;

import com.silk.casme.domain.DmCqbh;
import com.silk.casme.repository.DmCqbhRepository;
import com.silk.casme.service.DmCqbhService;
import com.silk.casme.service.dto.DmCqbhDTO;
import com.silk.casme.service.mapper.DmCqbhMapper;
import com.silk.casme.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import java.util.UUID;

import static com.silk.casme.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the DmCqbhResource REST controller.
 *
 * @see DmCqbhResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = TdqtcasApp.class)
public class DmCqbhResourceIntTest extends AbstractCassandraTest {

    private static final String DEFAULT_MA = "AAAAAAAAAA";
    private static final String UPDATED_MA = "BBBBBBBBBB";

    private static final String DEFAULT_TEN = "AAAAAAAAAA";
    private static final String UPDATED_TEN = "BBBBBBBBBB";

    @Autowired
    private DmCqbhRepository dmCqbhRepository;

    @Autowired
    private DmCqbhMapper dmCqbhMapper;

    @Autowired
    private DmCqbhService dmCqbhService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    private MockMvc restDmCqbhMockMvc;

    private DmCqbh dmCqbh;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final DmCqbhResource dmCqbhResource = new DmCqbhResource(dmCqbhService);
        this.restDmCqbhMockMvc = MockMvcBuilders.standaloneSetup(dmCqbhResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static DmCqbh createEntity() {
        DmCqbh dmCqbh = new DmCqbh()
            .ma(DEFAULT_MA)
            .ten(DEFAULT_TEN);
        return dmCqbh;
    }

    @Before
    public void initTest() {
        dmCqbhRepository.deleteAll();
        dmCqbh = createEntity();
    }

    @Test
    public void createDmCqbh() throws Exception {
        int databaseSizeBeforeCreate = dmCqbhRepository.findAll().size();

        // Create the DmCqbh
        DmCqbhDTO dmCqbhDTO = dmCqbhMapper.toDto(dmCqbh);
        restDmCqbhMockMvc.perform(post("/api/dm-cqbhs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dmCqbhDTO)))
            .andExpect(status().isCreated());

        // Validate the DmCqbh in the database
        List<DmCqbh> dmCqbhList = dmCqbhRepository.findAll();
        assertThat(dmCqbhList).hasSize(databaseSizeBeforeCreate + 1);
        DmCqbh testDmCqbh = dmCqbhList.get(dmCqbhList.size() - 1);
        assertThat(testDmCqbh.getMa()).isEqualTo(DEFAULT_MA);
        assertThat(testDmCqbh.getTen()).isEqualTo(DEFAULT_TEN);
    }

    @Test
    public void createDmCqbhWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = dmCqbhRepository.findAll().size();

        // Create the DmCqbh with an existing ID
        dmCqbh.setId(UUID.randomUUID());
        DmCqbhDTO dmCqbhDTO = dmCqbhMapper.toDto(dmCqbh);

        // An entity with an existing ID cannot be created, so this API call must fail
        restDmCqbhMockMvc.perform(post("/api/dm-cqbhs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dmCqbhDTO)))
            .andExpect(status().isBadRequest());

        // Validate the DmCqbh in the database
        List<DmCqbh> dmCqbhList = dmCqbhRepository.findAll();
        assertThat(dmCqbhList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    public void checkMaIsRequired() throws Exception {
        int databaseSizeBeforeTest = dmCqbhRepository.findAll().size();
        // set the field null
        dmCqbh.setMa(null);

        // Create the DmCqbh, which fails.
        DmCqbhDTO dmCqbhDTO = dmCqbhMapper.toDto(dmCqbh);

        restDmCqbhMockMvc.perform(post("/api/dm-cqbhs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dmCqbhDTO)))
            .andExpect(status().isBadRequest());

        List<DmCqbh> dmCqbhList = dmCqbhRepository.findAll();
        assertThat(dmCqbhList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkTenIsRequired() throws Exception {
        int databaseSizeBeforeTest = dmCqbhRepository.findAll().size();
        // set the field null
        dmCqbh.setTen(null);

        // Create the DmCqbh, which fails.
        DmCqbhDTO dmCqbhDTO = dmCqbhMapper.toDto(dmCqbh);

        restDmCqbhMockMvc.perform(post("/api/dm-cqbhs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dmCqbhDTO)))
            .andExpect(status().isBadRequest());

        List<DmCqbh> dmCqbhList = dmCqbhRepository.findAll();
        assertThat(dmCqbhList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void getAllDmCqbhs() throws Exception {
        // Initialize the database
        dmCqbh.setId(UUID.randomUUID());
        dmCqbhRepository.save(dmCqbh);

        // Get all the dmCqbhList
        restDmCqbhMockMvc.perform(get("/api/dm-cqbhs"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(dmCqbh.getId().toString())))
            .andExpect(jsonPath("$.[*].ma").value(hasItem(DEFAULT_MA.toString())))
            .andExpect(jsonPath("$.[*].ten").value(hasItem(DEFAULT_TEN.toString())));
    }
    
    @Test
    public void getDmCqbh() throws Exception {
        // Initialize the database
        dmCqbh.setId(UUID.randomUUID());
        dmCqbhRepository.save(dmCqbh);

        // Get the dmCqbh
        restDmCqbhMockMvc.perform(get("/api/dm-cqbhs/{id}", dmCqbh.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(dmCqbh.getId().toString()))
            .andExpect(jsonPath("$.ma").value(DEFAULT_MA.toString()))
            .andExpect(jsonPath("$.ten").value(DEFAULT_TEN.toString()));
    }

    @Test
    public void getNonExistingDmCqbh() throws Exception {
        // Get the dmCqbh
        restDmCqbhMockMvc.perform(get("/api/dm-cqbhs/{id}", UUID.randomUUID().toString()))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateDmCqbh() throws Exception {
        // Initialize the database
        dmCqbh.setId(UUID.randomUUID());
        dmCqbhRepository.save(dmCqbh);

        int databaseSizeBeforeUpdate = dmCqbhRepository.findAll().size();

        // Update the dmCqbh
        DmCqbh updatedDmCqbh = dmCqbhRepository.findById(dmCqbh.getId()).get();
        updatedDmCqbh
            .ma(UPDATED_MA)
            .ten(UPDATED_TEN);
        DmCqbhDTO dmCqbhDTO = dmCqbhMapper.toDto(updatedDmCqbh);

        restDmCqbhMockMvc.perform(put("/api/dm-cqbhs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dmCqbhDTO)))
            .andExpect(status().isOk());

        // Validate the DmCqbh in the database
        List<DmCqbh> dmCqbhList = dmCqbhRepository.findAll();
        assertThat(dmCqbhList).hasSize(databaseSizeBeforeUpdate);
        DmCqbh testDmCqbh = dmCqbhList.get(dmCqbhList.size() - 1);
        assertThat(testDmCqbh.getMa()).isEqualTo(UPDATED_MA);
        assertThat(testDmCqbh.getTen()).isEqualTo(UPDATED_TEN);
    }

    @Test
    public void updateNonExistingDmCqbh() throws Exception {
        int databaseSizeBeforeUpdate = dmCqbhRepository.findAll().size();

        // Create the DmCqbh
        DmCqbhDTO dmCqbhDTO = dmCqbhMapper.toDto(dmCqbh);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restDmCqbhMockMvc.perform(put("/api/dm-cqbhs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(dmCqbhDTO)))
            .andExpect(status().isBadRequest());

        // Validate the DmCqbh in the database
        List<DmCqbh> dmCqbhList = dmCqbhRepository.findAll();
        assertThat(dmCqbhList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    public void deleteDmCqbh() throws Exception {
        // Initialize the database
        dmCqbh.setId(UUID.randomUUID());
        dmCqbhRepository.save(dmCqbh);

        int databaseSizeBeforeDelete = dmCqbhRepository.findAll().size();

        // Get the dmCqbh
        restDmCqbhMockMvc.perform(delete("/api/dm-cqbhs/{id}", dmCqbh.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<DmCqbh> dmCqbhList = dmCqbhRepository.findAll();
        assertThat(dmCqbhList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DmCqbh.class);
        DmCqbh dmCqbh1 = new DmCqbh();
        dmCqbh1.setId(UUID.randomUUID());
        DmCqbh dmCqbh2 = new DmCqbh();
        dmCqbh2.setId(dmCqbh1.getId());
        assertThat(dmCqbh1).isEqualTo(dmCqbh2);
        dmCqbh2.setId(UUID.randomUUID());
        assertThat(dmCqbh1).isNotEqualTo(dmCqbh2);
        dmCqbh1.setId(null);
        assertThat(dmCqbh1).isNotEqualTo(dmCqbh2);
    }

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(DmCqbhDTO.class);
        DmCqbhDTO dmCqbhDTO1 = new DmCqbhDTO();
        dmCqbhDTO1.setId(UUID.randomUUID());
        DmCqbhDTO dmCqbhDTO2 = new DmCqbhDTO();
        assertThat(dmCqbhDTO1).isNotEqualTo(dmCqbhDTO2);
        dmCqbhDTO2.setId(dmCqbhDTO1.getId());
        assertThat(dmCqbhDTO1).isEqualTo(dmCqbhDTO2);
        dmCqbhDTO2.setId(UUID.randomUUID());
        assertThat(dmCqbhDTO1).isNotEqualTo(dmCqbhDTO2);
        dmCqbhDTO1.setId(null);
        assertThat(dmCqbhDTO1).isNotEqualTo(dmCqbhDTO2);
    }
}
