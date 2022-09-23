import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
// import { UsersListComponentNew } from './new-module/users-list/users-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent,
    children:[
      {
        path:'comp2',
        component:Component2Component
      },
      {
        path:':user',
        component:Component1Component
      }
    ]
  },
  {
    path:'contactus',
    component:ContactusComponent,
    children:[
      {
        path:'user/:id',
        component:UserDetailComponent
      }
    ]
  },
  {
    path:'newModuleUsers',
    loadChildren: () => import('./new-module/new-module.module').then(m => m.NewModuleModule)
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


