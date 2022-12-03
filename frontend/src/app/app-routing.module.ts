import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';



const routes: Routes = [
  {path: '' , component: HomeComponent, pathMatch: 'full'},
  // {path: 'home' , component: HomeComponent},
  { path: 'about', component: AboutComponent},
  {path: 'app', component:AppComponent},
  { path: 'results', component: ResultsComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // AppComponent,
    // HomeComponent,
    // AboutComponent,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppRoutingModule { }
