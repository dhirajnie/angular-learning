import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  isAuthenticate() {
    const promise = new Promise((resolve, reject) => {
      console.log('Authenticating...')
      setTimeout(() => resolve(this.loggedIn), 800);

    });
    return promise;
  }
  constructor() { }

  login() {

    this.loggedIn = true;
    //after 5 sec logout automtically 
    setTimeout(this.logout, 5000);
  }
  logout() {
    this.loggedIn = false;
  }
}
