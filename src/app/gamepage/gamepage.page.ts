import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gamepage',
  templateUrl: './gamepage.page.html',
  styleUrls: ['./gamepage.page.scss'],
})
export class GamepagePage implements OnInit {
  gamedata:any;
  image:any;
  Name:any;
  Price:any;
  Developer:any;
  Release:any;
  Platforms:any;
  Rating:any;
  Review:any;
  constructor(private navigationdata:NavParams,private modalCtrl:ModalController) { }

  ngOnInit() {
    this.gamedata=this.navigationdata.get('games');
console.log(this.gamedata)
this.image=this.gamedata.image;
this.Name=this.gamedata.Name;
this.Developer=this.gamedata.Developer;
this.Release=this.gamedata.Release;
this.Platforms=this.gamedata.Platforms;
this.Price=this.gamedata.Price;
this.Rating=this.gamedata.Rating;
this.Review=this.gamedata.Review;

  }
  exit(){
    this.modalCtrl.dismiss();
  }
}
