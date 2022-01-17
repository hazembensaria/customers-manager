import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCardListComponent } from './customers-card-list.component';

describe('CustomersCardListComponent', () => {
  let component: CustomersCardListComponent;
  let fixture: ComponentFixture<CustomersCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
