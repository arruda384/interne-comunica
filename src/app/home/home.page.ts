import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  funcionario: boolean;

  constructor(private router: Router, public alertController: AlertController) { }

  go(page) {
    switch (page) {
      case 0:
        this.router.navigateByUrl('/home');
        break;
      case 1:
        this.router.navigateByUrl('/video');
        break;
      case 2:
        this.router.navigateByUrl('/comunicado');
        break;
      case 3:
        this.router.navigateByUrl('/virus');
        break;
      default:
        break;
    }
  }

  ngOnInit(){

    
    if(localStorage.getItem("matricula") ==='0'){
      this.funcionario = false;

    }else{
      this.funcionario = true;
    }
  

  }
  async preLogout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Deseja mesmo sair?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            
          }
        }, {
          text: 'Sim',
          handler: () => {
            localStorage.clear();
            this.router.navigateByUrl('login');
          }
        }
      ]
    });

    await alert.present();
  }

}
