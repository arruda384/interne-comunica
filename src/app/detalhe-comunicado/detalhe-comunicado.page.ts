import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticias } from 'src/models/noticiais';
import { NoticiaService } from 'src/services/noticia.service';

@Component({
  selector: 'app-detalhe-comunicado',
  templateUrl: './detalhe-comunicado.page.html',
  styleUrls: ['./detalhe-comunicado.page.scss'],
})
export class DetalheComunicadoPage implements OnInit {

  constructor(private router: Router, private notService: NoticiaService) { }

  noticia = new Noticias();

  ngOnInit() {
    this.noticia = this.notService.getNoticia();
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
        this.router.navigateByUrl('/virus');
        break;
      default:
        break;
    }
  }

}
