import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmOptionComponent } from './ngm-option.component';

describe('NgmOptionComponent', () => {
    let component: NgmOptionComponent;
    let fixture: ComponentFixture<NgmOptionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgmOptionComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgmOptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
