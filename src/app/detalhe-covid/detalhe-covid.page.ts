import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticias } from 'src/models/noticiais';
import { NoticiaService } from 'src/services/noticia.service';

@Component({
  selector: 'app-detalhe-covid',
  templateUrl: './detalhe-covid.page.html',
  styleUrls: ['./detalhe-covid.page.scss'],
})
export class DetalheCovidPage implements OnInit {

  constructor(private router: Router, private  notService : NoticiaService) { }

  noticia = new Noticias();

  ngOnInit() {
    this.noticia = this.notService.getNoticia();
    console.log(this.noticia);
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
