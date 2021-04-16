"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersService = void 0;
var core_1 = require("@angular/core");
var UsersService = /** @class */ (function () {
    function UsersService() {
        this.userActif = null;
        this.usersTab = [
            {
                idUser: 1,
                identite: 'samuel',
                login: 'samuel',
                password: 'samuel'
            },
            {
                idUser: 2,
                identite: 'daniel',
                login: 'daniel',
                password: 'daniel'
            }
        ];
        this.userActif = this.usersTab[0];
    }
    UsersService.prototype.geUsers = function () {
        return this.usersTab;
    };
    UsersService.prototype.addUser = function (u) {
        u.idUser = this.usersTab[this.usersTab.length - 1].idUser + 1;
        this.usersTab.push(u);
        return true;
    };
    UsersService.prototype.seConnecter = function (login, pwd) {
        for (var _i = 0, _a = this.usersTab; _i < _a.length; _i++) {
            var u = _a[_i];
            if (u.login === login && u.password === pwd) {
                this.userActif = u;
                this.isUserConected = true;
                return true;
            }
        }
        return false;
    };
    UsersService.prototype.seDeconnecter = function () {
        this.userActif = null;
        this.isUserConected = false;
    };
    UsersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
