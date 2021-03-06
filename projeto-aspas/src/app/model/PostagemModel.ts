import { SafeResourceUrl } from '@angular/platform-browser';
import { ComentarioModel } from './ComentarioModel';
import { TemaModel } from './TemaModel';
import { UsuarioModel } from './UsuarioModel';

export class PostagemModel {

    public idPostagem!: number;
    public titulo!: string;
    public descricao!: string;
    public imagem!: string;
    public video!: string;
    public urlSegura!: SafeResourceUrl;
    public dataPostagem!: Date;
    public tema!: TemaModel;
    public usuario!: UsuarioModel;
    public comentario!: ComentarioModel[]
    
}