import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgcadComponent } from './org-cad.component';

describe('OrgcadComponent', () => {
  let component: OrgcadComponent;
  let fixture: ComponentFixture<OrgcadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgcadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgcadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
