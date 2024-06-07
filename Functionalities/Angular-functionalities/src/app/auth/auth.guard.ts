import {  inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

export const authorizationGuard: CanActivateFn = () => {
  const authService = inject(AuthServiceService);
  if(authService.isLogged()){
    return true;
  } else{
    authService.redirectTo('/login')
    return false;
  }
};

export const loginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthServiceService);
  if(state.url == '/login' && !authService.isLogged()){
    return true;
  } else {
    return false;
  }
};

export const canDeactivateGuard: CanDeactivateFn<boolean> = (): Observable<boolean | UrlTree> | boolean | UrlTree => {
  const authService = inject(AuthServiceService);
  return authService.isConfirm('Are you sure you want to leave?');
};

export const canActivateChild : CanActivateChildFn =(
  route : ActivatedRouteSnapshot
) =>{
  const authService = inject(AuthServiceService);
  const permission = localStorage.getItem('role') == route.data['role'];
  if(permission){
    return permission;
  } else {
    authService.redirectTo('/user')
    return false;
  }
}