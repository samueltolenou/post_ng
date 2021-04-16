import { UsersService } from 'src/services/Users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  _isUserConected!: boolean;

  constructor(private userService :UsersService) { }

  ngOnInit(): void {
    this._isUserConected = this.userService.isUserConected;
  }

  getUser(){
    return this.userService.userActif;
  }
  isUsConect(){
    return this.userService.isUserConected;
  }

  deconnexion(){
    this.userService.seDeconnecter();
  }
}
