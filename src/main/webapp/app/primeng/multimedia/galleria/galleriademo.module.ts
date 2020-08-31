import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { TdqtcasSharedModule } from '../../../shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { GalleriaModule } from 'primeng/galleria';
import { WizardModule } from 'primeng-extensions/components/wizard/wizard.js';
import { MessageService } from 'primeng/api';

import { GalleriaDemoComponent, galleriaDemoRoute } from './';

const PRIMENG_STATES = [galleriaDemoRoute];

@NgModule({
    imports: [
        TdqtcasSharedModule,
        CommonModule,
        BrowserAnimationsModule,
        ToastModule,
        GalleriaModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [GalleriaDemoComponent],
    providers: [MessageService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TdqtcasGalleriaDemoModule {}
