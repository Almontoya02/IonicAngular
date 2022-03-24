import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public wishServices:DeseosService,private router:Router,private alertController:AlertController) {
  }

  goToViewList(listId:number){
    this.router.navigateByUrl(`/tabs/tab1/add/${listId}`)
  }
  async goToAddList(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'New List',
      inputs:[
        {
          name:'titulo',
          type:'text',
          placeholder:'List name'
        }
      ],
      message: 'Add a new List',
      buttons: [
        {
          text:'Cancel',
          role:'cancel',
          handler:()=>{
            console.log('Cancelar')
          }
        },
        {
          text:'Create',
          handler:(data)=>{
            console.log(data);
            if(data.titulo.length===0){
              return;
            }
            const listId = this.wishServices.createList(data.titulo)
            //Creación de la lista
            this.router.navigateByUrl(`/tabs/tab1/add/${listId}`)
          },
        }
      ]
    });
    await alert.present();
  }
  
}
