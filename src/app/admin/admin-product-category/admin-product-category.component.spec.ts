import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductCategoryComponent } from './admin-product-category.component';

describe('AdminProductCategoryComponent', () => {
  let component: AdminProductCategoryComponent;
  let fixture: ComponentFixture<AdminProductCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
