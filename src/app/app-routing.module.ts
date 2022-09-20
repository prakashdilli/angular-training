import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChildComponent } from './child/child.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'aboutus',component:AboutusComponent
  },
  {
    path:'',redirectTo:'/aboutus',pathMatch:'full'
  },
  { path: '**', component: ChildComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
