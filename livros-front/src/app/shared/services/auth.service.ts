import { Injectable } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticated: boolean = false;

  constructor(private router: Router) { }

  Login(user: User){

    if (user.name === "carol" && user.password === "123456"){
      this.userAuthenticated = true;

      this.router.navigate(['/'])
    }
    else {
      this.userAuthenticated = false;
    }

  }
}
