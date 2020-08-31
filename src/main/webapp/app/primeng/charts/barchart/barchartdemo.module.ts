import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TdqtcasSharedModule } from '../../../shared/shared.module';
import { ChartModule } from 'primeng/chart';
import { MessageService } from 'primeng/api';

import { BarchartDemoComponent, barchartDemoRoute } from './';

const PRIMENG_STATES = [barchartDemoRoute];

@NgModule({
    imports: [TdqtcasSharedModule, ChartModule, RouterModule.forRoot(PRIMENG_STATES, { useHash: true })],
    declarations: [BarchartDemoComponent],
    providers: [MessageService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TdqtcasBarchartDemoModule {}
