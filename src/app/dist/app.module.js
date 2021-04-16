"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var auth_guard_service_1 = require("./../services/auth-guard.service");
var createUser_component_1 = require("./createUser/createUser.component");
var ajouterPost_component_1 = require("./ajouterPost/ajouterPost.component");
var Post_service_1 = require("./../services/Post.service");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var navigation_component_1 = require("./navigation/navigation.component");
var router_1 = require("@angular/router");
var Users_service_1 = require("src/services/Users.service");
var forms_1 = require("@angular/forms");
var connexion_component_1 = require("./connexion/connexion.component");
var lists_component_1 = require("./lists/lists.component");
var detailPost_component_1 = require("./detailPost/detailPost.component");
var appRoute = [
    {
        path: '',
        component: lists_component_1.ListsComponent
    },
    {
        path: 'liste_des_post',
        component: lists_component_1.ListsComponent
    },
    {
        path: 'ajouter_post',
        //canActivate : [AuthGuardService],
        component: ajouterPost_component_1.AjouterPostComponent
    },
    {
        path: 'post/:id',
        component: detailPost_component_1.DetailPostComponent
    },
    {
        path: 'creer_compte',
        component: createUser_component_1.CreateUserComponent
    },
    {
        path: 'connexion',
        component: connexion_component_1.ConnexionComponent
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                navigation_component_1.NavigationComponent,
                ajouterPost_component_1.AjouterPostComponent,
                connexion_component_1.ConnexionComponent,
                createUser_component_1.CreateUserComponent,
                lists_component_1.ListsComponent,
                detailPost_component_1.DetailPostComponent
            ],
            imports: [forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(appRoute)
            ],
            providers: [Post_service_1.PostService, Users_service_1.UsersService, auth_guard_service_1.AuthGuardService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
