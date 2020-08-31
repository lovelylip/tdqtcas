import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IDmDonVi } from 'app/shared/model/dm-don-vi.model';
import { DmDonViService } from './dm-don-vi.service';

@Component({
    selector: 'jhi-dm-don-vi-update',
    templateUrl: './dm-don-vi-update.component.html'
})
export class DmDonViUpdateComponent implements OnInit {
    dmDonVi: IDmDonVi;
    isSaving: boolean;

    constructor(private dmDonViService: DmDonViService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ dmDonVi }) => {
            this.dmDonVi = dmDonVi;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.dmDonVi.id !== undefined) {
            this.subscribeToSaveResponse(this.dmDonViService.update(this.dmDonVi));
        } else {
            this.subscribeToSaveResponse(this.dmDonViService.create(this.dmDonVi));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IDmDonVi>>) {
        result.subscribe((res: HttpResponse<IDmDonVi>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
