import { ListaItem } from "./lista-item.model";

export class Lista {
    id:number;
    title:string;
    createdOn:Date;
    completedOn:Date;
    completed:boolean;
    items:ListaItem[];

    constructor(title:string){
        this.title=title;
        this.createdOn= new Date();
        this.completed=false;
        this.items=[];
        this.id= new Date().getTime();

    }

}
