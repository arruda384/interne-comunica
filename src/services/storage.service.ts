import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '../config/storage_keys.config';
import { Noticias } from 'src/models/noticiais';




@Injectable()
export class StorageService {

    noticia = new Noticias();

    getLocalUser(chave: string): string {
        let usr = localStorage.getItem(chave);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }

    }

    setLocalUser(obj: any) {

        
        if (obj.matricula !== '0') {

            localStorage.setItem(STORAGE_KEYS.idade, (obj.idade));
            localStorage.setItem(STORAGE_KEYS.matricula, (obj.matricula));
            localStorage.setItem(STORAGE_KEYS.nome, (obj.nome));
            localStorage.setItem(STORAGE_KEYS.sexo, (obj.sexo));
            localStorage.setItem(STORAGE_KEYS.telefone, (obj.telefone));
            localStorage.setItem(STORAGE_KEYS.email, (null));
            localStorage.setItem(STORAGE_KEYS.idprofissao, (obj.idprofissao));
            localStorage.setItem(STORAGE_KEYS.dat_nascimento, (obj.dat_nascimento));

        } else {
            localStorage.setItem(STORAGE_KEYS.idade, (null));
            localStorage.setItem(STORAGE_KEYS.matricula, ('0'));
            localStorage.setItem(STORAGE_KEYS.nome, (obj.displayName));
            localStorage.setItem(STORAGE_KEYS.sexo, (null));
            localStorage.setItem(STORAGE_KEYS.telefone, (null));
            localStorage.setItem(STORAGE_KEYS.email, (obj.displayEmail));

        }
    }

    setNoticiaSelecionada(obj: Noticias){
        localStorage.setItem(STORAGE_KEYS.titulo, ((obj.titulo)));
        localStorage.setItem(STORAGE_KEYS.texto, (obj.texto));
        localStorage.setItem(STORAGE_KEYS.data, (obj.data));
        localStorage.setItem(STORAGE_KEYS.link, (obj.link));
        localStorage.setItem(STORAGE_KEYS.idnoticia, (obj.idnoticia.toString()));
        localStorage.setItem(STORAGE_KEYS.tipolink, (obj.tipolink.toString()));
    
      }

      getNoticiaSelecionada() : Noticias{

        this.noticia.idnoticia = Number(localStorage.getItem(STORAGE_KEYS.idnoticia));
        this.noticia.data = localStorage.getItem(STORAGE_KEYS.data);
        this.noticia.link = localStorage.getItem(STORAGE_KEYS.link);
        this.noticia.texto = localStorage.getItem(STORAGE_KEYS.texto);
        this.noticia.titulo = localStorage.getItem(STORAGE_KEYS.titulo);
        this.noticia.tipolink = Number(localStorage.getItem(STORAGE_KEYS.tipolink));
        return this.noticia;
      }
      
}