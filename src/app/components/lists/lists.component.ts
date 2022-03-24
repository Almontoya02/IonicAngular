import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  lista:Lista
  nameItem:string
  @Input() terminada = true
  @ViewChild(IonList) listahtml :IonList;
  constructor(public wishService:DeseosService,private router:Router,private alertController:AlertController) {
  }

  ngOnInit(): void {
    console.log(this.wishService.listas)
  }
  goToViewList(listId:number){
    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/add/${listId}`)
    }else{
      this.router.navigateByUrl(`/tabs/tab1/add/${listId}`)
    }
  }
  
  deleteList(list:Lista){
    if(confirm("Está seguro que desea eliminar esta Lista?")){
      
      this.wishService.deleteList(list)
      this.wishService.saveStorage()
    } 
  }

  async editNameList(list:Lista){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit List title',
      inputs:[
        {
          name:'titulo',
          type:'text',
          value:list.title,
          placeholder:'List name'
        }
      ],
      buttons: [
        {
          text:'Cancel',
          role:'cancel',
          handler:()=>{
            this.listahtml.closeSlidingItems()
          }
        },
        {
          text:'Update',
          handler:(data)=>{
            console.log(data);
            if(data.titulo.length===0){
              return alert("Ingrese un titulo");
            }
            list.title=data.titulo
            this.wishService.saveStorage();
            this.listahtml.closeSlidingItems()
            //const listId = this.wishService.editList(data)
            //Creación de la lista
          },
        }
      ]
    });
    await alert.present();
  }  
  

}
