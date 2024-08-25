import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BackgroundImageComponent } from '../background-image/background-image.component';
import { PaypalIconsComponent } from '../paypal-icons/paypal-icons.component';
import { WithdrawalComponent } from '../withdrawal/withdrawal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,BackgroundImageComponent,PaypalIconsComponent,WithdrawalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
