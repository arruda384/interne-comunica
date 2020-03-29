import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticias } from 'src/models/noticiais';

@Component({
  selector: 'app-comunicado',
  templateUrl: './comunicado.page.html',
  styleUrls: ['./comunicado.page.scss'],
})
export class ComunicadoPage implements OnInit {

   noticias  = new Array<Noticias>();

  constructor(private router: Router) { }

  ngOnInit() {

    this.noticias = [
      { 
        idnoticia: 1,
        titulo:'Boletim 1 ',   
        data: '19/03/2020',
        texto: 'Texto da notícia',
        link: 'http://sistemas.interne.com.br:8082/boletim/boletim001.pdf',
        tipolink: 1
        
      },
      
      { 
        idnoticia: 2,
        titulo:'Boletim 2 ',   
        data: '20/03/2020',
        texto: 'Texto da notícia',
        link: 'http://sistemas.interne.com.br:8082/boletim/boletim001.pdf',
        tipolink: 1
        
      },

      { 
        idnoticia: 3,
        titulo:'Boletim 3',   
        data: '21/03/2020',
        texto: 'Texto da notícia',
        link: 'http://sistemas.interne.com.br:8082/boletim/boletim001.pdf',
        tipolink: 1
        
      },
      
    ];

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

  goDetalheComunicado(number) {
    this.router.navigateByUrl('/detalhe-comunicado');
  }

}
