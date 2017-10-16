import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { RecipeService } from '../../services/recipe.service';
import { PassingIdService } from '../../services/passing-id.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-full-recipe',
  templateUrl: './full-recipe.component.html',
  styleUrls: ['./full-recipe.component.css']
})

export class FullRecipeComponent implements OnInit {

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

  constructor(private recipeService: RecipeService,
    private passingIdService: PassingIdService) { }

  getOneRecipe(id): void {
    this.recipeService.getOneRecipe(id)
      .subscribe(
      recipe => {
        this.recipe = recipe;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.error('An error occurred:', err.error.message);
        } else {
          console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
      );
  }

  ngOnInit(): void {
    this.getOneRecipe(this.passingIdService.getId());
  }
}
