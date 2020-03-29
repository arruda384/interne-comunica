export class Noticias {
    idnoticia :number;
    titulo : string;
    data: string;
    texto: string;
    link: string;
    tipolink: number; // 1 imagem 2 video

    constructor(){
        this.idnoticia= null;
        this.titulo  = null;
        this.data = null;
        this.texto = null;
        this.link = null;
        this.tipolink = null;
    }

}