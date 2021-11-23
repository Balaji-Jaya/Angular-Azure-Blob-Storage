import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService,private router:Router){
}

canActivate():boolean{
  if(this.authService.loggedIn()){
    return true;
  }else{
    //alert("you have not logged in")
    this.router.navigate(['/home']);
    return false;
  }
}
}
