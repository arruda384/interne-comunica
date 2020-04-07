import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirusPageRoutingModule } from './virus-routing.module';

import { VirusPage } from './virus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirusPageRoutingModule
  ],
  declarations: [VirusPage]
})
export class VirusPageModule {}
