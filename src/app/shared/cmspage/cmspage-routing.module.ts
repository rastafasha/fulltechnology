import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizacionFormComponent } from './cotizacion-form/cotizacion-form.component';

const routes: Routes = [
  {path: 'contact', component: CotizacionFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmspageRoutingModule { }
