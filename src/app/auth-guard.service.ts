import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { map, Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private socialAuthService: SocialAuthService) { }

  canActivate(): Observable<boolean> {
    return this.socialAuthService.authState.pipe(
      map((socialUser: SocialUser) => !!socialUser),
      tap((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['login']);
        }
      })
    );
  }
}