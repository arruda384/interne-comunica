import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheVirusPageRoutingModule } from './detalhe-virus-routing.module';

import { DetalheVirusPage } from './detalhe-virus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheVirusPageRoutingModule
  ],
  declarations: [DetalheVirusPage]
})
export class DetalheVirusPageModule {}
