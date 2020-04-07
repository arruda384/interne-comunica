import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheVirusPage } from './detalhe-virus.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheVirusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheVirusPageRoutingModule {}
