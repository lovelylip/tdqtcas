import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { TdqtcasSharedModule } from '../../../shared/shared.module';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { DocumentService } from './service/document.service';
import { WizardModule } from 'primeng-extensions/components/wizard/wizard.js';
import { MessageService } from 'primeng/api';

import { DragdropDemoComponent, dragdropDemoRoute } from './';

const PRIMENG_STATES = [dragdropDemoRoute];

@NgModule({
    imports: [
        TdqtcasSharedModule,
        DragDropModule,
        TableModule,
        PanelModule,
        WizardModule,
        ToastModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [DragdropDemoComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, DocumentService, MessageService],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TdqtcasDragDropDemoModule {}
