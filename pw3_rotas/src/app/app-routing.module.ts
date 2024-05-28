import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [

  { path:'sobre/:id', component:SobreComponent},
  { path: 'home', component:HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component:LoginComponent},
  { path: '**', component:NaoEncontradoComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
