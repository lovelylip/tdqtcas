import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TdqtcasSharedModule } from '../../../shared/shared.module';
import { ChartModule } from 'primeng/chart';
import { MessageService } from 'primeng/api';

import { LinechartDemoComponent, linechartDemoRoute } from '../../charts/linechart';

const PRIMENG_STATES = [linechartDemoRoute];

@NgModule({
    imports: [TdqtcasSharedModule, ChartModule, RouterModule.forRoot(PRIMENG_STATES, { useHash: true })],
    declarations: [LinechartDemoComponent],
    providers: [MessageService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TdqtcasLinechartDemoModule {}
