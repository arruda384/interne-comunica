import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-comunicado',
  templateUrl: './detalhe-comunicado.page.html',
  styleUrls: ['./detalhe-comunicado.page.scss'],
})
export class DetalheComunicadoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('loginAD') && !localStorage.getItem('loginGoogle')) {
      this.router.navigateByUrl('/login');
    }
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

}
