import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  userDetails;
  constructor(private userService:UserService) { }
  onLogout()  {
    this.userService.logout();
  }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err=> {
        console.log('error');
      },
    )
  }

}
