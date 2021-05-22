import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service.';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private alertify: AlertifyService) { }
  canActivate(): boolean {
    return true;

    //this.alertify.error('You have not passed!!');
    // this.router.navigate(['/home']);
    // return false;
  }
}
