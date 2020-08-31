import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IDmCqbh } from 'app/shared/model/dm-cqbh.model';
import { DmCqbhService } from './dm-cqbh.service';
import { JhiTrackerService } from 'app/core';

@Component({
    selector: 'jhi-dm-cqbh-update',
    templateUrl: './dm-cqbh-update.component.html'
})
export class DmCqbhUpdateComponent implements OnInit {
    dmCqbh: IDmCqbh;
    isSaving: boolean;

    constructor(private dmCqbhService: DmCqbhService, private activatedRoute: ActivatedRoute, private trackerService: JhiTrackerService) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ dmCqbh }) => {
            this.dmCqbh = dmCqbh;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.dmCqbh.id !== undefined) {
            this.subscribeToSaveResponse(this.dmCqbhService.update(this.dmCqbh));
        } else {
            this.subscribeToSaveResponse(this.dmCqbhService.create(this.dmCqbh));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IDmCqbh>>) {
        result.subscribe((res: HttpResponse<IDmCqbh>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.trackerService.sendActivityDmCqbh(this.dmCqbh);
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
