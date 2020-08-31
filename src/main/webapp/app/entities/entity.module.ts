import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TdqtcasDmCqbhModule } from './dm-cqbh/dm-cqbh.module';
import { TdqtcasDmDonViModule } from './dm-don-vi/dm-don-vi.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        TdqtcasDmCqbhModule,
        TdqtcasDmDonViModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TdqtcasEntityModule {}
