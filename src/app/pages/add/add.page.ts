import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item.model';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  lista:Lista
  nameItem:string

  constructor(private wishService:DeseosService, private route:ActivatedRoute) { 
    const listId=this.route.snapshot.paramMap.get('listId');
    this.lista = this.wishService.getList(listId);
  }

  ngOnInit() {
  }

  addItem(){
    if(this.nameItem.length===0){
      alert("Ingrese todos los campos")
    }
    const newItem = new ListaItem(this.nameItem);
    this.lista.items.push(newItem);
    this.nameItem=""
    this.wishService.saveStorage()
  }

  cambioCheck(item:ListaItem){
    const pending = this.lista.items.filter(itemData=>!itemData.completado).length;
    if(pending===0){
      this.lista.completedOn= new Date();
      this.lista.completed=true;
    }else{
      this.lista.completedOn= null;
      this.lista.completed=false;
    }

    this.wishService.saveStorage()
  }

  deleteItem(i:number){

    if(confirm("Está seguro que desea eliminar esta tarea?")){
      this.lista.items.splice(i,1);
      this.wishService.saveStorage()
    }
    

  }

}
