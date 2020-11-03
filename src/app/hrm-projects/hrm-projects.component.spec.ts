import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmProjectsComponent } from './hrm-projects.component';

describe('HrmProjectsComponent', () => {
  let component: HrmProjectsComponent;
  let fixture: ComponentFixture<HrmProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrmProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
