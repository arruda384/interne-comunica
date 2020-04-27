import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { HomePage } from '../home/home.page';
import { STORAGE_KEYS } from 'src/config/storage_keys.config';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  checkBoxLoginInterne: boolean = true;
  checkBoxLoginGoogle: boolean = true;

  exibirForm = false;
  exibirLoginGogole = false;
  exibirLoginAd = false;
  creds: CredenciaisDTO;
  form: FormGroup;



  constructor(private router: Router, public navCtrl: NavController, private formBuilder: FormBuilder, private alertController: AlertController,
    public loadingController: LoadingController,
    private googlePlus: GooglePlus,
    private auth: AuthService) {

    this.form = this.formBuilder.group({
      matricula: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

  }

  ngOnInit() {

  }

  exibirTipoLogin(id: number) {

    if (id === 1) {
      this.exibirLoginAd = true;
      this.exibirLoginGogole = false;
      this.checkBoxLoginInterne = true;
      this.checkBoxLoginGoogle = false;
    } else if (id === 2) {
      this.exibirLoginAd = false;
      this.exibirLoginGogole = true;
      this.checkBoxLoginInterne = true;
      this.checkBoxLoginGoogle = false;
    }
  }

  async loginAD() {
    // this.navCtrl.setRoot(TabsPage); //apagar
    const loading = await this.loadingController.create({
      message: 'Carregando...',
      // duration: 2000
    });

    this.setCred(this.form.value);
    this.presentLoading(loading);

    localStorage.setItem('dat_nascimento', this.formatDat(this.form.value.password));

    console.log(this.creds)
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        loading.dismiss();

        console.log(response);
        if (response.tipo === "ERROR") {

          this.mensagem(response);

        } else if (response.tipo === "INFO") {
          this.auth.successfulLogin(response, 1)
          this.router.navigateByUrl('home');
        }
      },
        error => {
          this.mensagem(error);
          console.log(error);
        });
  }

  setCred(form) {
    this.creds = {
      matricula: form.matricula,
      password: form.password,
      token: 'SU5URVJORSNDT1JPTkFfVklSVVMj'
    };
  }

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
        this.router.navigateByUrl('/covid');
        break;
      default:
        break;
    }
  }

  formatDat(dat) {
    const day = dat.slice(0, 2);
    const month = dat.slice(2, 4);
    const year = dat.slice(4, 8);
    return day + "/" + month + "/" + year;
  }

  // loginGoogle() {
  //   localStorage.setItem('loginGoogle', 'true');
  //   this.go(0);
  // }

  async doGoogleLogin() {

    this.checkBoxLoginInterne = false;
    this.checkBoxLoginGoogle = true;

    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });

    this.presentLoading(loading);

    this.googlePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId' : '185631541508-i8tvo2fvb51shtfp796acdf12kgpcbgb.apps.googleusercontent.com',
      // 'webClientId': '185631541508-mu5s1bkfnghe6iekparc90g0b67p7l5a.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    })
      .then(user => {

        localStorage.setItem(STORAGE_KEYS.idade, (null));
        localStorage.setItem(STORAGE_KEYS.matricula, ('0'));
        localStorage.setItem(STORAGE_KEYS.nome, (user.displayName));
        localStorage.setItem(STORAGE_KEYS.sexo, (null));
        localStorage.setItem(STORAGE_KEYS.telefone, (null));
        localStorage.setItem(STORAGE_KEYS.email, (user.email));
        loading.dismiss();
        // alert("Sucesso")
        this.router.navigateByUrl('home');

      }, err => {
        console.log(err)
        loading.dismiss();
      }
      );

  }

  // loginAD() {
  //   localStorage.setItem('loginAD', 'true');
  //   this.go(0);
  // }

  async presentLoading(loading) {
    return await loading.present();
  }

  async mensagem(responde: any) {
    const alert = await this.alertController.create({
      header: responde.tipo,
      message: responde.message,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }
      ]
    });

    await alert.present();
  }

  get f() { return this.form.controls; }


}
