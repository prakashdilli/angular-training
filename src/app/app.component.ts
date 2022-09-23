import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userDetails = { userId: 1, userName: 'New User' }
  title = 'myApp';
  users = ['userr 1', 'user 2']
  event = "event"
  usersList: any;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getAllUsers().subscribe((usersList) => {
      this.usersList = usersList
    })

  }

  changeUserDetails() {
    // this.userDetails['userId'] = 3
    this.userDetails = { userId: 2, userName: 'New User 2' }
  }

  newUserEmitted(event) {
    this.users.push(event)
    console.log(event)
  }
}
