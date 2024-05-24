import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authorizationGuard, loginGuard } from './auth/auth.guard';
export const routes: Routes = [
    {
        path : '',
        redirectTo : 'login',
        pathMatch : 'full'
    }, { 
        path : 'login',
        component : LoginComponent,
        canActivate : [loginGuard]
    },{
        path : 'user',
        loadChildren : ()=>import('../app/user/user.module').then(m => m.UserModule),
        canActivate : [authorizationGuard]
    }
];
