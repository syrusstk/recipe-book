
import {RecipeStartComponent} from "./recipe-start.component";
import {RecipeDetailComponent} from "./recepi-detail/recepi-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";

export const RECIPE_ROUTES = [
  {path:'', component: RecipeStartComponent},
  {path:'new', component: RecipeEditComponent},
  {path: ':id', component: RecipeDetailComponent},
  {path: ':id/edit', component: RecipeEditComponent},
];
