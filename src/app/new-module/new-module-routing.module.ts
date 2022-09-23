import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponentNew } from './users-list/users-list.component';


const routes: Routes = [
  {
    path:'',
    component:UsersListComponentNew
  },
  {
    path:'test',
    component:UsersListComponentNew
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewModuleRoutingModule { }
