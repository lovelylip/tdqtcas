import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TdqtcasSharedModule } from '../../../shared/shared.module';
import { ChartModule } from 'primeng/chart';
import { MessageService } from 'primeng/api';

import { PolarareachartDemoComponent, polarareachartDemoRoute } from '../../charts/polarareachart';

const PRIMENG_STATES = [polarareachartDemoRoute];

@NgModule({
    imports: [TdqtcasSharedModule, ChartModule, RouterModule.forRoot(PRIMENG_STATES, { useHash: true })],
    declarations: [PolarareachartDemoComponent],
    providers: [MessageService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TdqtcasPolarareachartDemoModule {}
