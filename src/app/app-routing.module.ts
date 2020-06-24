import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GituserComponent } from './gituser/gituser.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GituserDetailComponent } from './gituser-detail/gituser-detail.component';

const routes: Routes = [
  { path: 'gitusers', component: GituserComponent},
  { path: 'about', component: AboutComponent},
  { path: 'goals/:id', component: GituserDetailComponent },
  { path: '', redirectTo:"/goals", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }