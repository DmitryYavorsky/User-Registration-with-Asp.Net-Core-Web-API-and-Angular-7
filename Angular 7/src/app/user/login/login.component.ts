import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router, private toatsr: ToastrService) {}
  formModel = {
    UserName: '',
    Password: ''
  };
  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 400) {
          this.toatsr.error('Incorrect username or password', 'Authentication failed');
        } else {
          console.log(err);
        }
      }
    );
  }
  ngOnInit() {}
}
