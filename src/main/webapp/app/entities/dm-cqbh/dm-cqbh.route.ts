import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DmCqbh } from 'app/shared/model/dm-cqbh.model';
import { DmCqbhService } from './dm-cqbh.service';
import { DmCqbhComponent } from './dm-cqbh.component';
import { DmCqbhDetailComponent } from './dm-cqbh-detail.component';
import { DmCqbhUpdateComponent } from './dm-cqbh-update.component';
import { DmCqbhDeletePopupComponent } from './dm-cqbh-delete-dialog.component';
import { IDmCqbh } from 'app/shared/model/dm-cqbh.model';

@Injectable({ providedIn: 'root' })
export class DmCqbhResolve implements Resolve<IDmCqbh> {
    constructor(private service: DmCqbhService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DmCqbh> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<DmCqbh>) => response.ok),
                map((dmCqbh: HttpResponse<DmCqbh>) => dmCqbh.body)
            );
        }
        return of(new DmCqbh());
    }
}

export const dmCqbhRoute: Routes = [
    {
        path: 'dm-cqbh',
        component: DmCqbhComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'tdqtcasApp.dmCqbh.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'dm-cqbh/:id/view',
        component: DmCqbhDetailComponent,
        resolve: {
            dmCqbh: DmCqbhResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'tdqtcasApp.dmCqbh.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'dm-cqbh/new',
        component: DmCqbhUpdateComponent,
        resolve: {
            dmCqbh: DmCqbhResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'tdqtcasApp.dmCqbh.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'dm-cqbh/:id/edit',
        component: DmCqbhUpdateComponent,
        resolve: {
            dmCqbh: DmCqbhResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'tdqtcasApp.dmCqbh.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const dmCqbhPopupRoute: Routes = [
    {
        path: 'dm-cqbh/:id/delete',
        component: DmCqbhDeletePopupComponent,
        resolve: {
            dmCqbh: DmCqbhResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'tdqtcasApp.dmCqbh.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
