"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailPostComponent = void 0;
var core_1 = require("@angular/core");
var DetailPostComponent = /** @class */ (function () {
    function DetailPostComponent(postService, activatedRoute) {
        this.postService = postService;
        this.activatedRoute = activatedRoute;
    }
    // tslint:disable-next-line: typedef
    DetailPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        id = this.activatedRoute.snapshot.paramMap.get('id');
        this.postService.getOnePost(+id).subscribe(function (data) { _this.postReponse = data; }, function (error) {
            _this.erreur = "erreur de chargement";
            console.log(error);
        });
    };
    DetailPostComponent = __decorate([
        core_1.Component({
            selector: 'app-detailPost',
            templateUrl: './detailPost.component.html',
            styleUrls: ['./detailPost.component.css']
        })
    ], DetailPostComponent);
    return DetailPostComponent;
}());
exports.DetailPostComponent = DetailPostComponent;
