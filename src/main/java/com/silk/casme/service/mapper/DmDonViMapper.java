package com.silk.casme.service.mapper;

import com.silk.casme.domain.*;
import com.silk.casme.service.dto.DmDonViDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity DmDonVi and its DTO DmDonViDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface DmDonViMapper extends EntityMapper<DmDonViDTO, DmDonVi> {


}
