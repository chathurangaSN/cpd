import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductNewComponent } from './admin-product-new.component';

describe('AdminProductNewComponent', () => {
  let component: AdminProductNewComponent;
  let fixture: ComponentFixture<AdminProductNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
