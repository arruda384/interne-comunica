import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticias } from 'src/models/noticiais';
import { API_CONFIG } from 'src/config/api.config';
import { StorageService } from './storage.service';

@Injectable()
export class NoticiaService {

  constructor(private http: HttpClient, public storage: StorageService) { }

  

    findAll(idTipoNoticia: number){
    let httpOptions = this.createOptions();
    return this.http.post<any>(API_CONFIG.baseUrl + '/prevencao/lista-noticia/', + 'token=SU5URVJORSNDT1JPTkFfVklSVVMj'  +  '&idTipoNoticia=' +idTipoNoticia, httpOptions);
  }

  private createOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    };
    return httpOptions;
  }

}