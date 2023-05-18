import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/empleado/lista/lista.component'

const routes: Routes = [
  {path: '', redirectTo: 'lista', pathMatch: 'full'},
  {path: 'lista', component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
