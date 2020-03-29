import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ControlContainer, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule, } from './login-routing.module';

import { LoginPage } from './login.page';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
    
  ],
  
  declarations: [LoginPage,],
  providers: [
    GooglePlus,
    FormBuilder
    
  ]
})
export class LoginPageModule {}
