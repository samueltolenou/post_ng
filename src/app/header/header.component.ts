import { User } from './../../models/User';
import { UsersService } from './../../services/Users.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userIcon: string = '/assets/images/assi_image.png';

  constructor(private userService: UsersService) { }

  ngOnInit(): void {


  }

  getUser(){
    return this.userService.userActif;
  }
}
