"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AjouterPostComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var AjouterPostComponent = /** @class */ (function () {
    function AjouterPostComponent(postService, userService, formBuilder) {
        this.postService = postService;
        this.userService = userService;
        this.formBuilder = formBuilder;
    }
    AjouterPostComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    AjouterPostComponent.prototype.initForm = function () {
        this.postForm = this.formBuilder.group({
            titre: ['', [forms_1.Validators.maxLength(255), forms_1.Validators.required]],
            body: ['', [forms_1.Validators.required]]
        }, {
            updateOn: 'change'
        });
    };
    AjouterPostComponent.prototype.getF = function () {
        return this.postForm.controls;
    };
    AjouterPostComponent.prototype.onPost = function () {
        alert(this.userService.userActif);
    };
    AjouterPostComponent = __decorate([
        core_1.Component({
            selector: 'app-ajouterPost',
            templateUrl: './ajouterPost.component.html',
            styleUrls: ['./ajouterPost.component.css']
        })
    ], AjouterPostComponent);
    return AjouterPostComponent;
}());
exports.AjouterPostComponent = AjouterPostComponent;
