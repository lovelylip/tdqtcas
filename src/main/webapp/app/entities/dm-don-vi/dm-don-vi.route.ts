import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DmDonVi } from 'app/shared/model/dm-don-vi.model';
import { DmDonViService } from './dm-don-vi.service';
import { DmDonViComponent } from './dm-don-vi.component';
import { DmDonViDetailComponent } from './dm-don-vi-detail.component';
import { DmDonViUpdateComponent } from './dm-don-vi-update.component';
import { DmDonViDeletePopupComponent } from './dm-don-vi-delete-dialog.component';
import { IDmDonVi } from 'app/shared/model/dm-don-vi.model';

@Injectable({ providedIn: 'root' })
export class DmDonViResolve implements Resolve<IDmDonVi> {
    constructor(private service: DmDonViService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DmDonVi> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<DmDonVi>) => response.ok),
                map((dmDonVi: HttpResponse<DmDonVi>) => dmDonVi.body)
            );
        }
        return of(new DmDonVi());
    }
}

export const dmDonViRoute: Routes = [
    {
        path: 'dm-don-vi',
        component: DmDonViComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'tdqtcasApp.dmDonVi.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'dm-don-vi/:id/view',
        component: DmDonViDetailComponent,
        resolve: {
            dmDonVi: DmDonViResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'tdqtcasApp.dmDonVi.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'dm-don-vi/new',
        component: DmDonViUpdateComponent,
        resolve: {
            dmDonVi: DmDonViResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'tdqtcasApp.dmDonVi.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'dm-don-vi/:id/edit',
        component: DmDonViUpdateComponent,
        resolve: {
            dmDonVi: DmDonViResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'tdqtcasApp.dmDonVi.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const dmDonViPopupRoute: Routes = [
    {
        path: 'dm-don-vi/:id/delete',
        component: DmDonViDeletePopupComponent,
        resolve: {
            dmDonVi: DmDonViResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'tdqtcasApp.dmDonVi.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
