import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TdqtcasDmCqbhModule } from './dm-cqbh/dm-cqbh.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        TdqtcasDmCqbhModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TdqtcasEntityModule {}
