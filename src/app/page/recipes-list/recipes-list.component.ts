import { Component, OnInit, Optional, NgZone } from '@angular/core';
import { Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { Router, Event, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})

export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService,
    private router: Router,
    private headerComponent: HeaderComponent,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute
  ) { }

  getAllRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(
      recipes => {
        console.log(recipes);
        this.recipes = recipes;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.error('An error occurred:', err.error.message);
        } else {
          console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }

  getRecipesByMain(main): void {
    this.recipeService.getRecipesByMain(main).subscribe(
      (recipes) => {
        this.recipes = recipes;
        console.log(this.recipes);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.error('An error occurred:', err.error.message);
        } else {
          console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }

  getRecipesByType(type): void {
    this.recipeService.getRecipesByType(type).subscribe(
      (recipes) => {
        this.recipes = recipes;
        console.log(this.recipes);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.error('An error occurred:', err.error.message);
        } else {
          console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }

  getRecipesByCuisine(cuisine): void {
    this.recipeService.getRecipesByCuisine(cuisine).subscribe(
      (recipes) => {
        this.recipes = recipes;
        console.log(this.recipes);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.error('An error occurred:', err.error.message);
        } else {
          console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }

  getRecipes(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['main_ingredient']) {
        this.getRecipesByMain(params['main_ingredient']);
      } else if (params['dish_type']) {
        this.getRecipesByType(params['dish_type']);
      } else if (params['cuisine']) {
        this.getRecipesByCuisine(params['cuisine']);
      } else {
        this.getAllRecipes();
      }
    });
  }

  redirect(id): void {
    this.router.navigate(['./recipes', id]);
  }

  ngOnInit() {
    this.getRecipes();
  }
}

