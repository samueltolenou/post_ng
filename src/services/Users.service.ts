import { User } from './../models/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  // boolean pour savoir si l'utilisateur est connecter
  isUserConected!: boolean;
  userActif: User| null= null;
  usersTab : User[]=[
    {
    idUser:1,
    identite: 'samuel',
    login: 'samuel',
    password: 'samuel'
    },
    {
      idUser:2,
      identite: 'daniel',
      login: 'daniel',
      password: 'daniel'
      }
  ];
constructor() {
  this.userActif  = this.usersTab[0];
 }

geUsers() : User[]{
  return this.usersTab;
}

addUser(u: User){
  u.idUser = this.usersTab[this.usersTab.length - 1].idUser + 1;
  this.usersTab.push(u);
  return true;
}

seConnecter(login: string,pwd: string){
  for (const u of this.usersTab) {
    if(u.login === login && u.password === pwd ){
      this.userActif = u;

      this.isUserConected = true;
      return true;
      
    }
  }
  
  return false;
}

seDeconnecter(){
  this.userActif = null;
  this.isUserConected = false;
}












}
