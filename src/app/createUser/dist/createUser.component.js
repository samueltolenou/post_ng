"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(userService, route, formBuilder) {
        this.userService = userService;
        this.route = route;
        this.formBuilder = formBuilder;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.users = this.userService.geUsers();
    };
    CreateUserComponent.prototype.initForm = function () {
        this.userForm = this.formBuilder.group({
            identite: ['', [forms_1.Validators.maxLength(30), forms_1.Validators.required]],
            login: ['', [forms_1.Validators.maxLength(30), forms_1.Validators.required]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(30)]],
            confirmation: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(30)]]
        }, {
            validators: this.mustMatch('password', 'confirmation'),
            updateOn: 'change'
        });
    };
    // retourner les controls du formaulaire
    CreateUserComponent.prototype.getF = function () {
        return this.userForm.controls;
    };
    // méthode pour le submit
    CreateUserComponent.prototype.createUser = function () {
        var formValue = this.userForm.value;
        var u = {};
        u.identite = formValue.identite;
        u.login = formValue.login;
        u.password = formValue.password;
        if (this.userService.addUser(u)) {
            alert("compte créer avec succès");
        }
        // remettre le formulaire
        this.userForm.reset();
    };
    CreateUserComponent.prototype.voirUserform = function () {
        console.log(this.userForm);
    };
    // validateur de mot de passe
    CreateUserComponent.prototype.mustMatch = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    CreateUserComponent = __decorate([
        core_1.Component({
            selector: 'app-createUser',
            templateUrl: './createUser.component.html',
            styleUrls: ['./createUser.component.css']
        })
    ], CreateUserComponent);
    return CreateUserComponent;
}());
exports.CreateUserComponent = CreateUserComponent;
