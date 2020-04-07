import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticias } from 'src/models/noticiais';
import { NoticiaService } from 'src/services/noticia.service';

@Component({
  selector: 'app-detalhe-virus',
  templateUrl: './detalhe-virus.page.html',
  styleUrls: ['./detalhe-virus.page.scss'],
})
export class DetalheVirusPage implements OnInit {

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
        this.router.navigateByUrl('/virus');
        break;
      default:
        break;
    }
  }

}
