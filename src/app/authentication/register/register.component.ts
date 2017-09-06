import { contentHeaders } from '../../common/headers';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  reg_errors = false;
  error: string;
  // success: string = 'Registeration successful. Please log in to use the service.';
  errors = [];

  constructor(public router: Router, public http: Http) { }


  register(event, username, password) {
    this.errors = []
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://127.0.0.1:5000/api/v1/auth/register', body, { headers: contentHeaders })
      .subscribe(
      response => {
        this.router.navigate(['login']);
        // this.showSuccess();
      },
      error => {
        this.reg_errors = true;
        this.error = error.json();
        let errorObj = error.json();
        if (errorObj.hasOwnProperty('username')) {
          this.errors.push('Username error: ' + errorObj.username[0]);
        }

        if (errorObj.hasOwnProperty('password')) {
          this.errors.push('Error: Password is Required');
        }

        console.log(this.errors)
      }
      );

  }
  login(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }

  // showSuccess() {
  //   this.toastr.success('Registeration Successful! Please log in to use the service.', 'Success!');
  // }

}
