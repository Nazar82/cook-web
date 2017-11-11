import { Injectable } from '@angular/core';
import { Recipe } from './../models/recipe';

@Injectable()
export class PassingRecipeService {

    recipe: Recipe = {
        title: '',
        descript: '',
        ingredients: '',
        directions: '',
        main: '',
        type: '',
        cuisine: '',
        posted_by: ''
      };

    constructor() { }

    saveRecipe(recipe): void {
        this.recipe = recipe;
    }

    getRecipe(): Recipe {
        return this.recipe;
    }
}
