import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage{

 // tslint:disable-next-line: no-inferrable-types
 public IsAdmin: boolean;
  constructor(
    private usersService: UsersService
  ) {
  }


  ionViewWillEnter(){
    this.IsAdmin= this.usersService.GetIsAdmin();
    console.log(this.IsAdmin);
  }

}
