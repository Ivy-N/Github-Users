import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GituserDetailComponent } from './gituser-detail.component';

describe('GituserDetailComponent', () => {
  let component: GituserDetailComponent;
  let fixture: ComponentFixture<GituserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GituserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GituserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
