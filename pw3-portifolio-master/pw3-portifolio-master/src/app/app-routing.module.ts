import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagPrincipalComponent } from './pag-principal/pag-principal.component';
import { PagSecundariaComponent} from './pag-secundaria/pag-secundaria.component';
import { PagTerceariaComponent} from './pag-tercearia/pag-tercearia.component'

const routes: Routes = [

  
  {path: '', redirectTo: '/pagP', pathMatch: 'full'},
  {path: 'pagP', component: PagPrincipalComponent},
  { path: 'pagS', component:PagSecundariaComponent},
  { path: 'pagT', component:PagTerceariaComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
