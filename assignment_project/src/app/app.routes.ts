import { Routes } from '@angular/router';




export const routes: Routes = [

    {
        path: 'logout',
        loadComponent: () => import('../admin/logout/logout.component').then(l => l.LogoutComponent)
    },
    {
        path: '',

        loadChildren: () => import('../admin/admin-routing.module').then(r => r.AdminRoutingModule)
    },
   
];
