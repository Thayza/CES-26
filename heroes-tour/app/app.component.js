"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
    }
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<h1>{{title}}</h1>\n<my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n<h2>My Heroes</h2>\n<ul class=\"heroes\">\n<li *ngFor=\"let hero of heroes\" \n[class.selected]=\"hero === selectedHero\"\n(click)=\"onSelect(hero)\">\n<!-- each hero goes here -->\n<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n</li>\n</ul>\n",
            styles: ["\n.selected {\nbackground-color: #CFD8DC !important;\ncolor: white;\n}\n.heroes {\nmargin: 0 0 2em 0;\nlist-style-type: none;\npadding: 0;\nwidth: 15em;\n}\n.heroes li {\ncursor: pointer;\nposition: relative;\nleft: 0;\nbackground-color: #EEE;\nmargin: .5em;\npadding: .3em 0;\nheight: 1.6em;\nborder-radius: 4px;\n}\n.heroes li.selected:hover {\nbackground-color: #BBD8DC !important;\ncolor: white;\n}\n.heroes li:hover {\ncolor: #607D8B;\nbackground-color: #DDD;\nleft: .1em;\n}\n.heroes .text {\nposition: relative;\ntop: -3px;\n}\n.heroes .badge {\ndisplay: inline-block;\nfont-size: small;\ncolor: white;\npadding: 0.8em 0.7em 0 0.7em;\nbackground-color: #607D8B;\nline-height: 1em;\nposition: relative;\nleft: -1px;\ntop: -4px;\nheight: 1.8em;\nmargin-right: .8em;\nborder-radius: 4px 0 0 4px;\n}\n"],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map