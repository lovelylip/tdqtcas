import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IDmDonVi } from 'app/shared/model/dm-don-vi.model';
import { Principal } from 'app/core';
import { DmDonViService } from './dm-don-vi.service';
import { JhiTrackerService } from 'app/core';

@Component({
    selector: 'jhi-dm-don-vi',
    templateUrl: './dm-don-vi.component.html'
})
export class DmDonViComponent implements OnInit, OnDestroy {
    dmDonVis: IDmDonVi[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private dmDonViService: DmDonViService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal,
        private trackerService: JhiTrackerService
    ) {}

    loadAll() {
        this.dmDonViService.query().subscribe(
            (res: HttpResponse<IDmDonVi[]>) => {
                this.dmDonVis = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInDmDonVis();
        this.trackerService.subscribe();
        this.trackerService.receive().subscribe(activity => {
            this.showActivityDmCqbh(activity);
        });
    }

    showActivityDmCqbh(activity: any) {
        window.console.log(activity);
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IDmDonVi) {
        return item.id;
    }

    registerChangeInDmDonVis() {
        this.eventSubscriber = this.eventManager.subscribe('dmDonViListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
