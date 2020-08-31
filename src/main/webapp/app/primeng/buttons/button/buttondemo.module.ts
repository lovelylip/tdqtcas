import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TdqtcasSharedModule } from '../../../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { WizardModule } from 'primeng-extensions/components/wizard/wizard.js';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { ButtonDemoComponent, buttonDemoRoute } from './';

const PRIMENG_STATES = [buttonDemoRoute];

@NgModule({
    imports: [TdqtcasSharedModule, ButtonModule, WizardModule, ToastModule, RouterModule.forRoot(PRIMENG_STATES, { useHash: true })],
    declarations: [ButtonDemoComponent],
    providers: [MessageService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TdqtcasButtonDemoModule {}
