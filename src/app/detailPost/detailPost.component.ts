import { Reponse } from './../../models/Reponse';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/services/Post.service';
import { Post } from 'src/models/Post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailPost',
  templateUrl: './detailPost.component.html',
  styleUrls: ['./detailPost.component.css']
})
export class DetailPostComponent implements OnInit {
postReponse?: Reponse<Post>;
erreur?: string;
post =  {} as Post;
newNbVote: any | number = 0 ; 
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

  // tslint:disable-next-line: typedef
  ngOnInit(){

    let id: any;
    id = this.activatedRoute.snapshot.paramMap.get('id');
    this.postService.getOnePost(+id).subscribe(
      (data: Reponse<Post>) => {this.postReponse = data; },
      (error) => {
        this.erreur = 'erreur de chargement' ;
        console.log(error); }
    );
  }

  onLike(idPost: any){


  this.postService.sendLike(+idPost).subscribe(
    (data?: Reponse<number>) => { this.newNbVote = data?.data; 
      
      },
    (error) => {
      this.erreur = 'erreur' ;
      console.log(error); }
   );
  }


}
