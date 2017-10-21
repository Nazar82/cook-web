import { Component, OnInit, Optional, NgZone } from '@angular/core';
import { Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { PassingIdService } from '../../services/passing-id.service';
import { PassingFilterService } from '../../services/passing-filter.service';
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
    private passingIdService: PassingIdService,
    private headerComponent: HeaderComponent,
    private passingFilterSrvice: PassingFilterService,
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

  getRecipesByMain(): void {
    this.recipeService.getRecipesByMain(this.passingFilterSrvice.getFilter()).subscribe(
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

  getRecipesByType(): void {
    this.recipeService.getRecipesByType(this.passingFilterSrvice.getFilter()).subscribe(
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

  getRecipesByCuisine(): void {
    this.recipeService.getRecipesByCuisine(this.passingFilterSrvice.getFilter()).subscribe(
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
      if (params['main']) {
        this.getRecipesByMain();
      } else if (params['type']) {
        this.getRecipesByType();
      } else if (params['cuisine']) {
        this.getRecipesByCuisine();
      } else {
        this.getAllRecipes();
      }
    });
  }

  redirect(id): void {
    this.passingIdService.saveId(id);
    this.router.navigate(['./full-recipe']);
  }

  ngOnInit() {
    this.getRecipes();
  }
}

