import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'acercade', component: AcercadeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
