import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BackgroundImageComponent } from '../background-image/background-image.component';
import { PaypalIconsComponent } from '../paypal-icons/paypal-icons.component';
import { WithdrawalComponent } from '../withdrawal/withdrawal.component';
import { BuyersSellersComponent } from '../buyers-sellers/buyers-sellers.component';
import { SocialComponent } from '../social/social.component';
import { GetStartedComponent } from '../get-started/get-started.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,
    BackgroundImageComponent,
    PaypalIconsComponent,
    WithdrawalComponent,
    BuyersSellersComponent,
  SocialComponent,
  GetStartedComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
