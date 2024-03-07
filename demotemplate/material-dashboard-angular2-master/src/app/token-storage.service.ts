import { Injectable } from '@angular/core';
import { Constants } from './Constants';
import { AuthServiceService } from './auth-service.service';



const TOKEN_KEY = 'AuthToken';
const TOKEN_TIME_OUT =  60 * 5; // ACCESS_TOKEN_VALIDITY_SECONDS
const REFRESH_TOKEN_KEY = 'RefreshToken';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(private authService: AuthServiceService) { }
  CT=Constants
  refreshTokenInt: any = null;
  refreshTokenFlag = true;

  signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    this.clearRefreshTokenInterval();
    window.localStorage.clear();
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public saveUserRole(role:string){
    window.sessionStorage.removeItem(this.CT.USER_ROLE);
    window.sessionStorage.setItem(this.CT.USER_ROLE, role);
  }

  public getToken(): string {
    if (this.refreshTokenInt == null && this.refreshTokenFlag) {
      this.refreshTokenFlag = false;
      this.initializeRefreshToken();
      // setTimeout(() => {
      //   this.refreshTokenInterval();
      // }, 1000*60);      
    }
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public initializeRefreshToken() {
    console.log('initialize refersh token');
    this.refreshTokenInt = setInterval(() => {
      this.refreshTokenInterval()
    }, TOKEN_TIME_OUT * 1000);
  }

  public refreshTokenInterval() {
    console.log("referesh token service called");
    this.authService.refreshToken().subscribe(
      (data) => {
        this.saveToken(data.token);
      },
      (err) => {
        console.log("error initializeRefreshToken--: " + err);
        // this.saveRefreshToken(null);
      }
    );
  }

  public clearRefreshTokenInterval() {
    clearInterval(this.refreshTokenInt);
    setTimeout(() => {
      this.refreshTokenFlag = true;
    }, 1000);    
  }
}
