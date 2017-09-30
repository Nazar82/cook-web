import { Injectable } from '@angular/core';
import { RECIPES } from './mock.recipes';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
    getRecipes(): Recipe[] {
        return RECIPES;
    }
}
