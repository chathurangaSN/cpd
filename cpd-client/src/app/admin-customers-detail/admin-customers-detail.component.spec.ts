import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomersDetailComponent } from './admin-customers-detail.component';

describe('AdminCustomersDetailComponent', () => {
  let component: AdminCustomersDetailComponent;
  let fixture: ComponentFixture<AdminCustomersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCustomersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
