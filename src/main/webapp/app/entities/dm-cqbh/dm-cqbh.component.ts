import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IDmCqbh } from 'app/shared/model/dm-cqbh.model';
import { Principal } from 'app/core';
import { DmCqbhService } from './dm-cqbh.service';

@Component({
    selector: 'jhi-dm-cqbh',
    templateUrl: './dm-cqbh.component.html'
})
export class DmCqbhComponent implements OnInit, OnDestroy {
    dmCqbhs: IDmCqbh[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private dmCqbhService: DmCqbhService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.dmCqbhService.query().subscribe(
            (res: HttpResponse<IDmCqbh[]>) => {
                this.dmCqbhs = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            window.console.log(account);
            this.currentAccount = account;
        });
        this.registerChangeInDmCqbhs();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IDmCqbh) {
        return item.id;
    }

    registerChangeInDmCqbhs() {
        this.eventSubscriber = this.eventManager.subscribe('dmCqbhListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
