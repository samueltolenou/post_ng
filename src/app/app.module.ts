import { AuthGuardService } from './../services/auth-guard.service';
import { CreateUserComponent } from './createUser/createUser.component';
import { AjouterPostComponent } from './ajouterPost/ajouterPost.component';
import { PostService } from './../services/Post.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { UsersService } from 'src/services/Users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { ListsComponent } from './lists/lists.component';
import { DetailPostComponent } from './detailPost/detailPost.component';


const appRoute: Routes  = [
  {
    path: '',
    component: ListsComponent
  },
  {
    path: 'liste_des_post',
    component: ListsComponent
  },

  {
    path: 'ajouter_post',
    //canActivate : [AuthGuardService],
    component: AjouterPostComponent
  },
  {
    path: 'post/:id',
    component: DetailPostComponent
  },
  {
    path: 'creer_compte',
    component: CreateUserComponent
  },
  {
    path: 'connexion',
    component: ConnexionComponent
  }


];

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    AjouterPostComponent,
    ConnexionComponent,
    CreateUserComponent,
    ListsComponent,
      DetailPostComponent
   ],
  imports: [FormsModule,
    ReactiveFormsModule,
  
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],

  providers: [PostService, UsersService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
