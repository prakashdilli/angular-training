import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:any = 'This is the New Title for Header'
  userInput;
  twoWayBinding;
  isDisabled = true;
  isActive:boolean=true;
  planets = [{planetId:1,planetName:'earth'},{planetId:2,planetName:'mars'},{planetId:3,planetName:'saturn'}]
  constructor() { }

  ngOnInit() {
    console.log('Inside header Oninit')
  }
  onBtnClick(event){
    console.log(`Button ${event} again print arg ${event}`)
  }
  onUserInput(event){
    console.log(event.target.value)
    this.userInput = event.target.value
  }
  toggle(){
    this.isDisabled = !this.isDisabled
  }

}
