import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage{

 // tslint:disable-next-line: no-inferrable-types
 public IsAdmin: boolean;
  constructor(
    private storage: Storage,
  ) {
  }


  ionViewWillEnter(){
    this.storage.get('userAuth').then((data) => {
      this.IsAdmin= data.isAdmin;
    });
  }

}
