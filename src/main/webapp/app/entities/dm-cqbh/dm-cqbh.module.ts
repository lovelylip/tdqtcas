import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TdqtcasSharedModule } from 'app/shared';
import {
    DmCqbhComponent,
    DmCqbhDetailComponent,
    DmCqbhUpdateComponent,
    DmCqbhDeletePopupComponent,
    DmCqbhDeleteDialogComponent,
    dmCqbhRoute,
    dmCqbhPopupRoute
} from './';

const ENTITY_STATES = [...dmCqbhRoute, ...dmCqbhPopupRoute];

@NgModule({
    imports: [TdqtcasSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [DmCqbhComponent, DmCqbhDetailComponent, DmCqbhUpdateComponent, DmCqbhDeleteDialogComponent, DmCqbhDeletePopupComponent],
    entryComponents: [DmCqbhComponent, DmCqbhUpdateComponent, DmCqbhDeleteDialogComponent, DmCqbhDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TdqtcasDmCqbhModule {}
