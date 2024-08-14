import { Routes } from '@angular/router';
import { LoginComponent } from '../admin/login/login.component';



export const routes: Routes = [

    {
        path: 'logout',
        loadComponent: () => import('../admin/logout/logout.component').then(l => l.LogoutComponent)
    },
{
    path: 'login',

    loadChildren: ()=>import('../admin/admin-routing.module').then(r=>r.AdminRoutingModule)
}

];
