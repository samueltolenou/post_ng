import { Reponse } from './../../models/Reponse';
import { Post } from './../../models/Post';
import { UsersService } from 'src/services/Users.service';
import { Router } from '@angular/router';
import { PostService } from './../../services/Post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouterPost',
  templateUrl: './ajouterPost.component.html',
  styleUrls: ['./ajouterPost.component.css']
})
export class AjouterPostComponent implements OnInit {

  postForm!: FormGroup;

  constructor(private postService: PostService, private userService: UsersService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.initForm();
  }
  
  initForm(){
    this.postForm = this.formBuilder.group(
      {
      titre: ['', [Validators.maxLength(255), Validators.required]],
      body: ['', [Validators.required]]
      },
      {
        updateOn: 'change'
      }
    );
  }

  getF(){
    return this.postForm.controls;
  }

  onPost(){

    let done: boolean = false;

    const formValue = this.postForm.value;

    const p: Post = <Post> {};

    p.titre = formValue.titre;
    p.body = formValue.body;
    p.auteur = this.userService.userActif;

    this.postService.sendPost(p).subscribe(
      (data: Reponse<Post>) => { 
        if (data?.status === 1){
          done = true;
          this.postForm.reset();
          alert('article : ' + data?.data?.titre + ' enregisrtrer');
        }else{
          alert('erreur : ' + data?.message);
        }
      },
      (error) => {console.log(error); }
    );

    if(done){
      
    }
  }







}
