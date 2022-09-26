import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList:any;
  constructor(private appService:AppService,private router:Router,private aRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers(){
    this.appService.getAllUsers().subscribe((usersList)=>{
      this.usersList = usersList
    })
  }

  addUser(){
    this.router.navigate(['add-user'],{relativeTo:this.aRoute})
  }
  editUser(userId){
    this.router.navigate(['edit-user',userId],{relativeTo:this.aRoute})
  }
  deleteUser(userId){
    this.appService.deleteUser(userId).subscribe((usersList)=>{
      this.getAllUsers()
    })
  }
}
