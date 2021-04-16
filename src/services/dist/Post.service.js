"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostService = void 0;
var core_1 = require("@angular/core");
var PostService = /** @class */ (function () {
    function PostService(userService, httpClient) {
        this.userService = userService;
        this.httpClient = httpClient;
        this.posts = [
            {
                id: 1,
                titre: 'titres 1',
                body: 'corps du post 1',
                nombreVote: 0,
                auteur: {
                    idUser: 1,
                    identite: 'samuel',
                    login: 'samuel',
                    password: 'samuel'
                },
                img: ''
            },
            {
                id: 2,
                titre: 'titres 2',
                body: 'corps du post 2',
                nombreVote: 0,
                auteur: {
                    idUser: 1,
                    identite: 'samuel',
                    login: 'samuel',
                    password: 'samuel'
                },
                img: ''
            },
            {
                id: 3,
                titre: 'titres 3',
                body: 'corps du post 3',
                nombreVote: 0,
                auteur: {
                    idUser: 1,
                    identite: 'samuel',
                    login: 'samuel',
                    password: 'samuel'
                },
                img: ''
            }
        ];
    }
    PostService.prototype.getAllpost = function () {
        /*  this.httpClient.get<Post[]>('http://localhost:8080/post/all')
            .subscribe( (response) => {
              this.posts = response;
            },
            (error) => {
              console.log(error); });
        */
        return this.httpClient.get('http://localhost:8080/post/all');
    };
    PostService.prototype.getOnePost = function (id) {
        return this.httpClient.get('http://localhost:8080/post/one/' + id);
        /*
          let pnull : Post | null= null;
          
          for (let p of this.posts){
            
            if (p.id === id){
              return p;
            }
          }
        
          return pnull;*/
    };
    PostService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
