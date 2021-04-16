import { Reponse } from './../models/Reponse';
import { AppDataState } from './../models/post.state';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/models/Post';
import { UsersService } from './Users.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

posts: Post[] = [
  {
    id: 1,
    titre: 'titres 1',
    body: 'corps du post 1',
    nombreVote: 0,
    auteur: {
      idUser : 1,
      identite : 'samuel',
      login : 'samuel',
      password : 'samuel'
    },

    img:''
  
  },
  {
    id: 2,
    titre: 'titres 2',
    body: 'corps du post 2',
    nombreVote: 0,
    auteur: {
      idUser : 1,
      identite : 'samuel',
      login : 'samuel',
      password : 'samuel'
    },

    img: ''
  },
  {
    id: 3,
    titre: 'titres 3',
    body: 'corps du post 3',
    nombreVote: 0,
    auteur: {
      idUser : 1,
      identite : 'samuel',
      login : 'samuel',
      password : 'samuel'
    },

    img:''
  }
];

 constructor(private userService: UsersService, private httpClient: HttpClient) { }


getAllpost() {

/*  this.httpClient.get<Post[]>('http://localhost:8080/post/all')
    .subscribe( (response) => {
      this.posts = response;
    },
    (error) => {
      console.log(error); });
*/
  return this.httpClient.get<Post[]>('http://localhost:8080/post/all');
}


getOnePost(id: number){

  return this.httpClient.get<Reponse<Post>>('http://localhost:8080/post/one/'+id);
/*  
  let pnull : Post | null= null;
  
  for (let p of this.posts){
    
    if (p.id === id){
      return p;
    }
  }

  return pnull;*/
}

sendPost(p: Post ): Observable<Reponse<Post>>{
  return this.httpClient.post<Reponse<Post>>('http://localhost:8080/post/add', p);
  
}

// 
sendLike(idPost: number): Observable<Reponse<number>>{
  return this.httpClient.get<Reponse<number>>('http://localhost:8080/post/like?postId='+idPost);
}

}
