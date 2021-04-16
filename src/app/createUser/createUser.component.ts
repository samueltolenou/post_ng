import { User } from './../../models/User';
import { Router } from '@angular/router';
import { UsersService } from 'src/services/Users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createUser',
  templateUrl: './createUser.component.html',
  styleUrls: ['./createUser.component.css']
})
export class CreateUserComponent implements OnInit {


  userForm!: FormGroup;
  users!: User[];
  
  constructor(private userService: UsersService,private route: Router,private formBuilder: FormBuilder) {
    
   }

  ngOnInit() {
    this.initForm();
    this.users = this.userService.geUsers();
  
  }

  initForm(){
    this.userForm = this.formBuilder.group(
      {
      identite: ['', [Validators.maxLength(30), Validators.required]],
      login: ['',[ Validators.maxLength(30), Validators.required]],
      password: ['',[ Validators.required,Validators.maxLength(30)]],
      confirmation: ['',[ Validators.required,Validators.maxLength(30)]]
      },
    
      {
        validators: this.mustMatch('password', 'confirmation'),
        updateOn: 'change'
      }
    )
  }

  // retourner les controls du formaulaire
  getF(){
    return this.userForm.controls;
  }

  // méthode pour le submit
  createUser(){
    const formValue = this.userForm.value;

    let u: User=<User>{};

    u.identite= formValue.identite;
    u.login= formValue.login;
    u.password= formValue.password;
                        
    if(this.userService.addUser(u)){
      alert("compte créer avec succès");
    }
    // remettre le formulaire
    this.userForm.reset();
    
  }

  voirUserform(){
  
    console.log(this.userForm);
  }

  // validateur de mot de passe
mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}


}


