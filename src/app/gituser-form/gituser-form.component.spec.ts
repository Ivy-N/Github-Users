import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GituserFormComponent } from './gituser-form.component';

describe('GituserFormComponent', () => {
  let component: GituserFormComponent;
  let fixture: ComponentFixture<GituserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GituserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GituserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
