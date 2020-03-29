import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { Router } from '@angular/router';
import { CovidPage } from './covid/covid.page';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{

  rootPage: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, private rota: Router
  ) {
  }

  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.rootPage = (localStorage.getItem('matricula') != null) ? 'home' : 'login';
      this.rota.navigateByUrl(this.rootPage);


    });
  }

  ngOnInit() {
    this.initializeApp();
  }

  ngOnDestroy() {
  }

}
