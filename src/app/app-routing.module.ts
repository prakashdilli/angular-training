import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
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
    component:ContactusComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// {
//   path:'contactus',component:ContactusComponent
// },
// {
//   path:'aboutus',component:AboutusComponent
// },
// {
//   path:'',redirectTo:'/aboutus',pathMatch:'full'
// },
// { path: '**', component: ChildComponent }