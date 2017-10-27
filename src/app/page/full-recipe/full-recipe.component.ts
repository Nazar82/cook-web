import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';

import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

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
    private activatedRoute: ActivatedRoute
  ) { }

  getOneRecipe(): void {
    this.activatedRoute.paramMap
      .switchMap((params: ParamMap) => this.recipeService.getOneRecipe(params.get('id')))
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
      });
  }

  ngOnInit(): void {
    this.getOneRecipe();
  }
}
