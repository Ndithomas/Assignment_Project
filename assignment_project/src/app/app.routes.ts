import { Routes } from '@angular/router';
import { LoginComponent } from '../admin/login/login.component';



export const routes: Routes = [

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        loadComponent: () => import('../admin/logout/logout.component').then(l => l.LogoutComponent)
    },

];
