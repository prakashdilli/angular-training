import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
 @Input('userDetail') user;
 @Input() userIndex;
 @Output() removeUserEvent = new EventEmitter();
 userId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((userId)=>{
      console.log(userId)
      this.userId = userId['id']
    })
  }
  removeUser(){
    console.log(this.userIndex)
    this.removeUserEvent.emit(this.userIndex)
  }
}
