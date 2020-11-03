import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmTeamComponent } from './hrm-team.component';

describe('HrmTeamComponent', () => {
  let component: HrmTeamComponent;
  let fixture: ComponentFixture<HrmTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrmTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
