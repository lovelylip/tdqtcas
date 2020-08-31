/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { TdqtcasTestModule } from '../../../test.module';
import { DmDonViUpdateComponent } from 'app/entities/dm-don-vi/dm-don-vi-update.component';
import { DmDonViService } from 'app/entities/dm-don-vi/dm-don-vi.service';
import { DmDonVi } from 'app/shared/model/dm-don-vi.model';

describe('Component Tests', () => {
    describe('DmDonVi Management Update Component', () => {
        let comp: DmDonViUpdateComponent;
        let fixture: ComponentFixture<DmDonViUpdateComponent>;
        let service: DmDonViService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TdqtcasTestModule],
                declarations: [DmDonViUpdateComponent]
            })
                .overrideTemplate(DmDonViUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(DmDonViUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DmDonViService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new DmDonVi('9fec3727-3421-4967-b213-ba36557ca194');
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.dmDonVi = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new DmDonVi();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.dmDonVi = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});
