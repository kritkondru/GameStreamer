import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {
myData:any;

  constructor(private http:HttpClient) { }

  gamesDetails(){
    this.http.get('assets/games.json')
    .subscribe( (data:any) => {
      this.myData=data;
      console.log(this.myData);
    });
    console.log(this.myData);
  }
}
