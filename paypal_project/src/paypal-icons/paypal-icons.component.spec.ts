import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalIconsComponent } from './paypal-icons.component';

describe('PaypalIconsComponent', () => {
  let component: PaypalIconsComponent;
  let fixture: ComponentFixture<PaypalIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaypalIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaypalIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
