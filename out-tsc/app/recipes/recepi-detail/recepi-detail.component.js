var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import { Router, ActivatedRoute } from "@angular/router";
import { RecipeService } from "../recipe.service";
export var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(sls, router, route, recipesService) {
        this.sls = sls;
        this.router = router;
        this.route = route;
        this.recipesService = recipesService;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.recipeIndex = params['id'];
            _this.selectedRecipe = _this.recipesService.getRecipe(_this.recipeIndex);
        });
    };
    RecipeDetailComponent.prototype.onAddtoShoppingList = function () {
        this.sls.addItems(this.selectedRecipe.ingredients);
    };
    RecipeDetailComponent.prototype.onEdit = function () {
        this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
    };
    RecipeDetailComponent.prototype.onDelete = function () {
        this.recipesService.deleteRecipe(this.selectedRecipe);
        this.router.navigate(['/recipes']);
    };
    RecipeDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RecipeDetailComponent = __decorate([
        Component({
            selector: 'rb-recepi-detail',
            templateUrl: './recepi-detail.component.html',
        }), 
        __metadata('design:paramtypes', [ShoppingListService, Router, ActivatedRoute, RecipeService])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());
//# sourceMappingURL=C:/Anugular-project/recipe-book/src/app/recipes/recepi-detail/recepi-detail.component.js.map