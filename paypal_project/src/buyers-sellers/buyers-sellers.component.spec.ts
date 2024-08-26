import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyersSellersComponent } from './buyers-sellers.component';

describe('BuyersSellersComponent', () => {
  let component: BuyersSellersComponent;
  let fixture: ComponentFixture<BuyersSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyersSellersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyersSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
