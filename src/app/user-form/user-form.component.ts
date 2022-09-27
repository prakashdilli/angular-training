import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user;
  userId:any
  isUpdate:boolean = false;
  constructor(private fb:FormBuilder,private appService:AppService,private router:Router,private aRoute:ActivatedRoute) { }

  ngOnInit() {

    // init reactive form
    // this.user = new FormGroup({
    //   name: new FormControl(null,[Validators.required,Validators.minLength(4)]),
    //   email: new FormControl(null,[Validators.required,Validators.email])
    // })

    this.user = this.fb.group({
      name:[null,[Validators.required,Validators.minLength(4)]],
      email:[null,[Validators.required,Validators.email]]
    })

    this.aRoute.params.subscribe((user)=>{
      console.log(user)
      this.isUpdate = user.hasOwnProperty('userId')? true:false

      if(this.isUpdate){
        this.userId = user['userId']
        this.getUserById(this.userId)
      }
    })
  }
  get form(){
    return this.user.controls
  }


  addUser(){
    console.log(this.user)
    // this.appService.addUser(this.user.value).subscribe((newUser)=>{
    //   console.log(newUser)
    //   this.router.navigate(['../'])
    // })
  }

  getUserById(userId){
    this.appService.getUserById(userId).subscribe((userDetail)=>{
      console.log(userDetail)
      this.user.patchValue(userDetail)
    })
  }

  updateUser(){
    this.appService.editUser(this.userId,this.user).subscribe((newUser)=>{
      console.log(newUser)
      this.router.navigate(['../'])

    })
  }
}
