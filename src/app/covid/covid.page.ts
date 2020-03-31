import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticias } from 'src/models/noticiais';
import { NoticiaService } from 'src/services/noticia.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.page.html',
  styleUrls: ['./covid.page.scss'],
})
export class CovidPage implements OnInit {
  noticias  = new Array<Noticias>();
  noticiasFixa = new Array<Noticias>();
  idTipoNoticia : number;

 constructor(private router: Router,  private notService: NoticiaService) { }

 ngOnInit() {
   this.idTipoNoticia = 3 ;

   this.noticiasFixa = [
     { 
       idnoticia: 1,
       titulo:'NOVO CORONAVÍRUS',   
       data: '28/03/2020',
       texto: 'Está todo mundo falando " fique em casa", mas você sabe o porquê?',
       link: '',
       tipolink: 1
       
     },
     
     { 
       idnoticia: 2,
       titulo:'FAKE NEWS',   
       data: '28/03/2020',
       texto: 'Compartilhar notícias falsas provoca graves consequências.',
       link: '',
       tipolink: 1
       
     },

     { 
       idnoticia: 3,
       titulo:'NOVO CORONAVÍRUS',   
       data: '27/03/2020',
       texto: 'Higienização dos alimentos',
       link: '',
       tipolink: 1
       
     },

     { 
      idnoticia: 4,
      titulo:'NOVO CORONAVÍRUS',   
      data: '27/03/2020',
      texto: 'Depoimento de uma enfermeira',
      link: '',
      tipolink: 1
      
    },

    { 
      idnoticia: 5,
      titulo:'NOVO CORONAVÍRUS',   
      data: '25/03/2020',
      texto: 'Hábitos saudáveis',
      link: '',
      tipolink: 1
      
    },

    { 
      idnoticia: 6,
      titulo:'NOVO CORONAVÍRUS',   
      data: '25/03/2020',
      texto: 'Aprenda como lavar as mãos corretamente',
      link: '',
      tipolink: 1
      
    },

    { 
      idnoticia: 7,
      titulo:'FIQUE EM CASA',   
      data: '23/03/2020',
      texto: 
        `Nós estamos de peito aberto para enfrentar os desafios que a pandemia do novo Coronavírus tem imposto ao nosso
        dia a dia`,
      link: '',
      tipolink: 1
      
    },

    { 
      idnoticia: 8,
      titulo:'NOVO CORONAVÍRUS',   
      data: '21/03/2020',
      texto: 
        `CEO reafirma compromisso com pacientes e familiares`,
      link: '',
      tipolink: 1
      
    },

    { 
      idnoticia: 9,
      titulo:'NOVO CORONAVÍRUS',   
      data: '20/03/2020',
      texto: 
        `Lavar as mãos com água e sabão é a melhor maneira de se prevenir contra o novo Coronavírus`,
      link: '',
      tipolink: 1
      
    },

    { 
      idnoticia: 10,
      titulo:'NOVO CORONAVÍRUS',   
      data: '20/03/2020',
      texto: 
        `Os perigos da automedicação`,
      link: '',
      tipolink: 1
      
    },

    { 
      idnoticia: 11,
      titulo:'PODCAST',   
      data: '20/03/2020',
      texto: 
        `Minuto da Saúde: Novo Coronavírus`,
        link: '',
      tipolink: 1
      
    },
     
    { 
      idnoticia: 12,
      titulo:'NOVO CORONAVÍRUS',   
      data: '19/03/2020',
      texto: 
        `Você sabe quem deve usar máscara?`,
        link: '',
      tipolink: 1
      
    },

      
    { 
      idnoticia: 13,
      titulo:'NOVO CORONAVÍRUS',   
      data: '19/03/2020',
      texto: 
        `Como se tratar em casa`,
        link: '',
      tipolink: 1
      
    },

    { 
      idnoticia: 14,
      titulo:'NOVO CORONAVÍRUS',   
      data: '18/03/2020',
      texto: 
        `Como se tratar em casa`,
        link: '',
      tipolink: 1
      
    },

    { 
      idnoticia: 14,
      titulo:'NOVO CORONAVÍRUS',   
      data: '18/03/2020',
      texto: 
        `Como se tratar em casa`,
        link: '',
      tipolink: 1
      
    },

    { 
      idnoticia: 15,
      titulo:'NOVO CORONAVÍRUS',   
      data: '18/03/2020',
      texto: 
        ` Saiba as diferenças para os sintomas da gripe e do resfriado`,
        link: '',
      tipolink: 1
      
    },

    { 
      idnoticia: 16,
      titulo:'NOVO CORONAVÍRUS',   
      data: '18/03/2020',
      texto: 
        `Previna-se!`,
        link: '',
      tipolink: 1
      
    },
     
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
  this.router.navigateByUrl('/detalhe-covid');
}

}
