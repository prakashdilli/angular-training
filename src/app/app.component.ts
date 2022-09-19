import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userDetails = {userId:1,userName:'New User'}
  title = 'myApp';
  users= ['userr 1','user 2']
  event = "event"

  changeUserDetails(){
    // this.userDetails['userId'] = 3
    this.userDetails = {userId:2,userName:'New User 2'}
  }

  newUserEmitted(event){
    this.users.push(event)
    console.log(event)
  }
}
