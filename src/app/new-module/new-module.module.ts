import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewModuleRoutingModule } from './new-module-routing.module';
import { UsersListComponentNew } from './users-list/users-list.component';


@NgModule({
  declarations: [UsersListComponentNew],
  imports: [
    CommonModule,
    NewModuleRoutingModule
  ]
})
export class NewModuleModule { }
