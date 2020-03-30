import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/services/noticia.service';
import { Noticias } from 'src/models/noticiais';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  noticias  = new Array<Noticias>();
  noticiasFixa = new Array<Noticias>();
  idTipoNoticia : number;

  constructor(private router: Router, private notService: NoticiaService) { }

  ngOnInit() {
    this.idTipoNoticia = 1;

    this.noticiasFixa = [
      { 
        idnoticia: 1,
        titulo: 
          `Gripe comum, resfriado ou COVID-19?`,   
        data: '23/03/2020',
        texto: 
          `Olá, amigos. A Interne está aqui novamente pra discutir esse tema tão polêmico e atual que é a infecção pelo
          Coronavírus. Mas diversas pessoas apresentam a mesma dúvida: qual a diferença entre uma gripe comum, um resfriado
          e uma infecção pelo Coronavírus? Calma, pessoal, e se liga nas dicas!`,
        link: 'http://sistemas.interne.com.br:8082/video/VIDEO_01.mp4',
        tipolink: 1
        
      },
      
      { 
        idnoticia: 2,
        titulo:'Pânico e o COVID-19<',   
        data: '23/03/2020',
        texto: 
          `Olá, amigos. Pânico? Medo? Ficar em casa? Deixar de trabalhar? Calma! Muita coisa está acontecendo aqui em Recife,
          tudo isso por causa do Coronavírus, mas a gente está aqui pra ajudar você e tirar suas dúvidas.`,
        link: 'http://sistemas.interne.com.br:8082/video/VIDEO_02.mp4',
        tipolink: 1
        
      },

      { 
        idnoticia: 3,
        titulo:'Carnaval e o COVID-19',   
        data: '21/03/2020',
        texto: 
          `Olá, amigos. O Carnaval chegou, e com ele diversas infecções são propensas a serem transmitidas nessa época
          também. Como lidar com o Coronavírus nessa época?`,
        link: 'http://sistemas.interne.com.br:8082/video/VIDEO_03.mp4',
        tipolink: 1
        
      }
  
    ];

    this.getListaNoticias(this.idTipoNoticia);

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
    this.router.navigateByUrl('/detalhe-video');
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

}
