import { DataStateEnum } from './../../models/post.state';
import { User } from './../../models/User';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/Post';
import { PostService } from 'src/services/Post.service';
import { Observable } from 'rxjs';
import { AppDataState } from 'src/models/post.state';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
posts$?: Observable<Post[]>;



  constructor(private postService: PostService, private httpClient : HttpClient) { }

  ngOnInit() {

   

    this.posts$ = this.postService.getAllpost();

  }
  onGetAllPosts(){
    
  }

     //observable avec les pipes pour gérer les erreurs
    /*.pipe(map(data_=>({dataState: DataStateEnum.LOADED, data: data_})),
          startWith({dataState: DataStateEnum.LOADING}),
          catchError(err=>of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
          );
*/

 /* this.httpClient.get<User>('http://localhost:8080/user')
    .subscribe((response) => {
      this.users = response;
    },
    (error) => {
      console.log(error);
    });*/
	
  



}
