import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  name:any;
  email:any;
  userId:any
  isUpdate:boolean = false;
  constructor(private appService:AppService,private router:Router,private aRoute:ActivatedRoute) { }

  ngOnInit() {
    this.aRoute.params.subscribe((user)=>{
      console.log(user)
      this.isUpdate = user.hasOwnProperty('userId')? true:false

      if(this.isUpdate){
        this.userId = user['userId']
        this.getUserById(this.userId)
      }
    })
  }

  addUser(){
    this.appService.addUser({name:this.name,email:this.email}).subscribe((newUser)=>{
      console.log(newUser)
      this.router.navigate(['../'])
    })
  }

  getUserById(userId){
    this.appService.getUserById(userId).subscribe((userDetail)=>{
      console.log(userDetail)
      this.name = userDetail['name']
      this.email = userDetail['email']
    })
  }

  updateUser(){
    this.appService.editUser(this.userId,{name:this.name,email:this.email}).subscribe((newUser)=>{
      console.log(newUser)
      this.router.navigate(['../'])

    })
  }
}
