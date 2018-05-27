import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductFormComponent } from './admin-product-form.component';

describe('AdminProductFormComponent', () => {
  let component: AdminProductFormComponent;
  let fixture: ComponentFixture<AdminProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
