import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['app-forbidden']);
      return false;
    }
  }
}
