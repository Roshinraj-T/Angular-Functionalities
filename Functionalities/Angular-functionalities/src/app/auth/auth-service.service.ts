import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(
    private router : Router
  ) { }

  isLogged(){
    if(localStorage && localStorage.getItem('token')){
      return true;
    } else{
      return false;
    }
  }

  redirectTo(url : string){
    this.router.navigate([url])
  }

  isConfirm(confirmMessage : string){
    return confirm(confirmMessage)
  }

}
