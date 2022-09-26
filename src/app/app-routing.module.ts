import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'users-list',
    pathMatch:'full'
  },
  {
    path:'users-list',
    component:UsersListComponent
  },
  {
    path:'users-list/add-user',
    component:UserFormComponent
  },
  {
    path:'users-list/edit-user/:userId',
    component:UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


