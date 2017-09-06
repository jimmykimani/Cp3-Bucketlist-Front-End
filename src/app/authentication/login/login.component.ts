import { MdSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MdSnackBarRef } from '@angular/material/snack-bar/snack-bar-ref';
import { AuthService } from '../authentication.service';



@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = { username: '', password: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private service: AuthService, private router: Router,
    public snackBar: MdSnackBar) { }

  ngOnInit() { }

  /**
   * Login a user
   */
  login() {
    this.errorMessage = '';

    this.service.login(this.credentials.username, this.credentials.password)
      .subscribe(
      data => {
        this.router.navigate(['/dashboard']);
        this.welcomeNotification();
        console.log(data);
      },
      err => {
        this.errorMessage = err;
        console.error(err);
        this.snackBar.open(err, 'Fail', {
          duration: 5000,
        });
      }
      );
  }
  welcomeNotification() {
    let message: string = "Woot! Woot! happy to see you here"
    this.snackBar.open(message, ':)', {
      duration: 5000,
    });
  }
}
