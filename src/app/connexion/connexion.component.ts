import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './../../services/Users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

 
  connexionForm!: FormGroup;
  erreurDeConnexion : string="";
  
  constructor(private userService: UsersService,private route: Router,private formBuilder: FormBuilder) {
    
   }

  ngOnInit() {
    this.initForm();
    
  }

  initForm(){
    this.connexionForm = this.formBuilder.group(
      {
      login: ['',[Validators.required]],
      password: ['',[ Validators.required]],
      }
    );
  }

  // retourner les controls du formaulaire
  getF(){
    return this.connexionForm.controls;
  }

  // méthode pour le submit
  seConnecter(){
    let res = this.userService.seConnecter(this.getF().login.value, this.getF().password.value);
    if(res){
      // remettre le formulaire  
      this.connexionForm.reset();

      this.userService.isUserConected = true;

      this.route.navigate(['/liste_des_post']);
    }else{
      this.erreurDeConnexion = "le login ou le mot est incorrecte";
    }
    
    
    
  }

  voirUserform(){
  
    console.log(this.connexionForm);
  }


}
