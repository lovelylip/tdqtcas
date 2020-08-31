import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TdqtcasSharedModule } from 'app/shared';
import {
    DmDonViComponent,
    DmDonViDetailComponent,
    DmDonViUpdateComponent,
    DmDonViDeletePopupComponent,
    DmDonViDeleteDialogComponent,
    dmDonViRoute,
    dmDonViPopupRoute
} from './';

const ENTITY_STATES = [...dmDonViRoute, ...dmDonViPopupRoute];

@NgModule({
    imports: [TdqtcasSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        DmDonViComponent,
        DmDonViDetailComponent,
        DmDonViUpdateComponent,
        DmDonViDeleteDialogComponent,
        DmDonViDeletePopupComponent
    ],
    entryComponents: [DmDonViComponent, DmDonViUpdateComponent, DmDonViDeleteDialogComponent, DmDonViDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TdqtcasDmDonViModule {}
