import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumorItemComponent } from './custumor-item.component';

describe('CustumorItemComponent', () => {
  let component: CustumorItemComponent;
  let fixture: ComponentFixture<CustumorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustumorItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustumorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
