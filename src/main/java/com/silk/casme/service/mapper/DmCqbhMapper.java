package com.silk.casme.service.mapper;

import com.silk.casme.domain.*;
import com.silk.casme.service.dto.DmCqbhDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity DmCqbh and its DTO DmCqbhDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface DmCqbhMapper extends EntityMapper<DmCqbhDTO, DmCqbh> {


}
