import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmSelectComponent } from './ngm-select.component';

describe('NgmSelectComponent', () => {
  let component: NgmSelectComponent;
  let fixture: ComponentFixture<NgmSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
