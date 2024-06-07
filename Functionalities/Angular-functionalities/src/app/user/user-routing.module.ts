import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { canActivateChild, canDeactivateGuard } from '../auth/auth.guard';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  }, { 
    path : 'home',
    component : HomeComponent,
    canDeactivate : [canDeactivateGuard],
    canActivateChild : [canActivateChild],
    children : [
      {
        path : 'settings',
        component : SettingsComponent,
        data : {
          role : 'admin'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
