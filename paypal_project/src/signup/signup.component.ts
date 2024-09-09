import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../app/footer/footer.component';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule,FooterComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  selectOption: string | null = null;

  constructor(private router: Router) { }

  selectAccountType(accountType: string) {
    this.selectOption = accountType;
  }

  continue() {
    if (this.selectOption === 'personal') {
      this.router.navigate(['/p_a_signup']);
    } else if (this.selectOption === 'business') {
      this.router.navigate(['/b_a_signup']);
    }
  }


}
