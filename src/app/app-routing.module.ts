import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MensagemErro404Component } from './components/mensagem/mensagem-erro404/mensagem-erro404.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},      
  {path:'medico', loadChildren: ()=> import('./components/medico/medico.module').then(m => m.MedicoModule)},
  {path:'**', component:MensagemErro404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
