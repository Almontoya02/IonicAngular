import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  
  listas:Lista[] =[]
  constructor() {
    this.setStorage();
  }


  createList(titulo:string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista)
    this.saveStorage()
    return nuevaLista.id;
  }

  editList(lista:Lista){
    this.listas=this.listas.filter(listData=>listData.id!==lista.id);
    this.saveStorage()
  }
  deleteList(lista:Lista){
    this.listas=this.listas.filter(listData=>listData.id!==lista.id);
    this.saveStorage()
  }

  saveStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas))
  }

  setStorage(){

    localStorage.getItem('data')?this.listas=JSON.parse(localStorage.getItem('data')):this.listas=[];
  }

  getList(id:string|number){
    id=Number(id);
    return this.listas.find(listData=>listData.id==id);
  }

}
