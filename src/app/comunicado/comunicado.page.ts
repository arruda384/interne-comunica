import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticias } from 'src/models/noticiais';
import { NoticiaService } from 'src/services/noticia.service';


@Component({
  selector: 'app-comunicado',
  templateUrl: './comunicado.page.html',
  styleUrls: ['./comunicado.page.scss'],
})
export class ComunicadoPage implements OnInit {

   noticias  = new Array<Noticias>();
   noticiasFixa = new Array<Noticias>();
   idTipoNoticia : number;

  constructor(private router: Router,  private notService: NoticiaService) { }

  ngOnInit() {
    this.idTipoNoticia = 2 ;

    this.noticiasFixa = [
      { 
        idnoticia: 1,
        titulo:'Boletim 1 ',   
        data: '19/03/2020',
        texto: 'Comitê de Crise',
        link: 'http://sistemas.interne.com.br:8082/boletim/boletim001.pdf',
        tipolink: 1
        
      },
      
      // { 
      //   idnoticia: 2,
      //   titulo:'Boletim 2 ',   
      //   data: '20/03/2020',
      //   texto: 'Texto da notícia',
      //   link: 'http://sistemas.interne.com.br:8082/boletim/boletim001.pdf',
      //   tipolink: 1
        
      // },

      // { 
      //   idnoticia: 3,
      //   titulo:'Boletim 3',   
      //   data: '21/03/2020',
      //   texto: 'Texto da notícia',
      //   link: 'http://sistemas.interne.com.br:8082/boletim/boletim001.pdf',
      //   tipolink: 1
        
      // },
      
    ];

    this.getListaNoticias(this.idTipoNoticia);

  }

    getListaNoticias(idTipoNoticia: number){

      this.notService.findAll(idTipoNoticia).subscribe( val => {
        if(val.length > 0){
          this.noticias = val;
        }else{
          this.noticias = this.noticiasFixa;
        }
        
      }, error => {    
        this.noticias = this.noticiasFixa;    
      })
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

  goDetalheNoticia(not: Noticias) {
    this.notService.setNoticia(not);
    this.router.navigateByUrl('/detalhe-comunicado');
  }

}
