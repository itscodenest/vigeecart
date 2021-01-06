import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    // alert(this.localStorageService.retrieve('user') && this.localStorageService.retrieve('user').token)
    if (sessionStorage.getItem("email")) {
      return true;
    }
    // navigate to login page as user is not authenticated
    this.router.navigate(["/"]);
    return false;
  }
  canActivateChild(): boolean {
    // alert(this.localStorageService.retrieve('user') && this.localStorageService.retrieve('user').token)
    if (sessionStorage.getItem("email")) {
      return true;
    }
    // navigate to login page as user is not authenticated
    this.router.navigate(["/"]);
    return false;
  }
}
