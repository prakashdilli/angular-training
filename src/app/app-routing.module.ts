import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'users-list',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'users-list',
    component:UsersListComponent,
    // canActivate:[AuthGuardGuard]
  },
  {
    path:'users-list/add-user',
    component:FormsComponent
  },
  {
    path:'users-list/edit-user/:userId',
    component:FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


