import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmServicesComponent } from './hrm-services.component';

describe('HrmServicesComponent', () => {
  let component: HrmServicesComponent;
  let fixture: ComponentFixture<HrmServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrmServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
