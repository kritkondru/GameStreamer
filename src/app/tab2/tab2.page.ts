import { Component } from '@angular/core';
import { GameserviceService } from '../gameservice.service';
import { ModalController } from '@ionic/angular';
import { GamepagePage } from '../gamepage/gamepage.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  fdata:any
  constructor(public gameservice:GameserviceService,private modalCtr:ModalController){}
  ngOnInit(){
    this.gamedata();
  
}
gamedata(){
  this.gameservice.gamesDetails();
    }
    async showdetail(event){
      console.log(event.srcElement.innerHTML)
      for(let i=0;i<30;i++){
        console.log(this.gameservice.myData.games[i].Name);
        if(event.srcElement.innerHTML==this.gameservice.myData.games[i].Name){
          this.fdata=this.gameservice.myData.games[i];
          console.log(this.fdata);
        }
      }
    const modal= await this.modalCtr.create({
      component:GamepagePage,
      componentProps:{games:this.fdata}
    });
    modal.present();
    }
  }