import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  // user = new FormGroup({
  //   name : new FormControl(null,[Validators.required,Validators.minLength(4)]),
  //   email : new FormControl(null,[Validators.required])
  // })
  user;
  roles = [
    {roleId:1,roleName:'Super Admin'},
    {roleId:2,roleName:'Admin'},
    {roleId:3,roleName:'User'},
  ]
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      name:[null,[Validators.required,Validators.minLength(4)]],
      email:[null,[Validators.required]],
      role:[null,[Validators.required]]
    })
  }
  submit(){
    // console.log(this.user.value)
    // this.user.patchValue({name:'test user'})
    console.log(this.user.value )
  }
  // getForm(){
  //   return this.user.controls
  // }
  // getName(){
  //   return this.user.controls.name
  // }
  // getEmail(){
  //   return this.user.controls.email
  // }
  get form(){
    return this.user.controls
  }

}
