import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PartnerComponent } from '../partner/partner.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'signup',
        loadComponent:()=>import('../signup/signup.component').then(signup=>signup.SignupComponent)
    },
    {

        path:'login',
        loadComponent:()=>import ('../login/login.component').then(l =>l.LoginComponent)

    },
    {
        path:'partner',
        loadComponent:()=>import ('../partner/partner.component').then(partner=>partner.PartnerComponent)
    }
];
