import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdqtcasSharedModule } from '../../../shared/shared.module';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ToastModule } from 'primeng/toast';
import { WizardModule } from 'primeng-extensions/components/wizard/wizard.js';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';

import { ScrollPanelDemoComponent, scrollPanelDemoRoute } from './';

const PRIMENG_STATES = [scrollPanelDemoRoute];

@NgModule({
    imports: [
        TdqtcasSharedModule,
        CommonModule,
        ScrollPanelModule,
        CodeHighlighterModule,
        ToastModule,
        WizardModule,
        RouterModule.forRoot(PRIMENG_STATES, { useHash: true })
    ],
    declarations: [ScrollPanelDemoComponent],
    providers: [MessageService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TdqtcasScrollPanelDemoModule {}
