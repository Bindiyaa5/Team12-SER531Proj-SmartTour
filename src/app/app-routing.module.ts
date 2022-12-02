import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: '' , component: HomeComponent, pathMatch: 'full'},
  // {path: 'home' , component: HomeComponent},
  { path: 'about', component: AboutComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppRoutingModule { }
