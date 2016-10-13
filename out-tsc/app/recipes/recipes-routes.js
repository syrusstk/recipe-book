import { RecipeStartComponent } from "./recipe-start.component";
import { RecipeDetailComponent } from "./recepi-detail/recepi-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
export var RECIPE_ROUTES = [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },
];
//# sourceMappingURL=C:/Anugular-project/recipe-book/src/app/recipes/recipes-routes.js.map