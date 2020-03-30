import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheComunicadoPage } from './detalhe-comunicado.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheComunicadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheComunicadoPageRoutingModule {}
