import { Post } from './../../models/Post';
import { Reponse } from './../../models/Reponse';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/services/Post.service';

import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';

@Component({
  selector: 'app-detailPost',
  templateUrl: './detailPost.component.html',
  styleUrls: ['./detailPost.component.css']
})
export class DetailPostComponent implements OnInit {
postReponse = {} as Reponse<Post>;
erreur?: string;
post =  {} as Post;
newNbVote: any | number = 0 ;
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

  // tslint:disable-next-line: typedef
  ngOnInit(){

    
    let id: any;
    id = this.activatedRoute.snapshot.paramMap.get('id');
    this.postService.getOnePost(+id).subscribe(
      (data: Reponse<Post>) => {
        this.postReponse = data; 
        
      },
      (error) => {
        this.erreur = 'erreur de chargement' ;
        console.log(error); }
    );
  }

  onLike(postLiker: Post){
    
  let v = confirm('vraiment liker ?');
  if(v== true){
    this.postService.sendLike(+postLiker.id).subscribe(
      (data: Reponse<number>) => {
          postLiker.nombreVote = data.data; 
        },
      (error) => {
        this.erreur = 'erreur' ;
        console.log(error); }
     );
    }
  }

  


}


/*this.post = {
      id : 0,
      titre: '',
      body: '',
      nombreVote: 0 ,
      auteur: {} as User,
      img: ''

    } ;

    */