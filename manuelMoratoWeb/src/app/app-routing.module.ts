import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/globals/home/home.component';
import { AboutMeComponent } from './components/globals/about-me/about-me.component';


const routes: Routes = [
{ path: '', component: HomeComponent, pathMatch:'full' },
{ path: 'home', component: HomeComponent, pathMatch:'full' },
{ path: 'about-me', component: AboutMeComponent, pathMatch:'full' },


{ path: '**', component: HomeComponent ,pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
