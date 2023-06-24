import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public alertController:AlertController) { }

  onClick(){
    this.presentform();
  }

  async presentform(){
    const alert = await this.alertController.create({
      header:'Prompt!',
      cssClass:'my-custom-class',
      inputs:[
        {
          name:'Nombre',
          placeholder: 'Nombres',
        },
        {
          name:'Apellido',
          placeholder: 'Apellidos',

        },
        {
          name:'Descripcion',
          placeholder: 'Descripcion Materia',

        },
        {
          name:'Fecha',
          value: 'dd/mm/aaaa',
          cssClass: 'icon',
        },
        {
          name:'Link',
          value: 'https://ionicframework.com'
        },
        {
          name:'Clave',
          placeholder: 'Clave',

        },
        {
          name:'Nickname',
          placeholder: 'Nickname (max 8 characters)',

        },
        {
          name:'Edad',
          placeholder: 'Edad',

        },
      ],
      buttons:[
        {
          text:'CANCEL',
          handler: ()=>{
            console.log('cancel clicked')
          }
        },
        {
          text:'OK',
          handler: ()=>{
            console.log('cancel clicked')
          }
        }

      ]
    });
    await alert.present();
    
  }

  ngOnInit() {
  }


 

}
