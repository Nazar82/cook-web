import { Component, OnInit, Optional, NgZone } from '@angular/core';
import { Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { PaginationService } from '../../services/pagination.service';
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
    private activatedRoute: ActivatedRoute,
    private paginationService: PaginationService
  ) { }

  recipesNumber: number;
  pages = [];
  currentPage = 1;

  getAllRecipes(page: string): void {
    this.recipeService.getRecipes(page)
      .subscribe(
      recipes => {
        this.recipes = recipes['recipes'];
        this.recipesNumber = recipes['recipes_number'];
        this.pages = this.paginationService.getPagesNumber(this.recipesNumber, this.currentPage);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.error('An error occurred:', err.error.message);
        } else {
          console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }

  getRecipesByMain(main: string, page: string): void {
    this.recipeService.getRecipesByMain(main, page).subscribe(
      (recipes) => {
        this.recipes = recipes['recipes'];
        this.recipesNumber = recipes['recipes_number'];
        this.pages = this.paginationService.getPagesNumber(this.recipesNumber, this.currentPage);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.error('An error occurred:', err.error.message);
        } else {
          console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }

  getRecipesByType(type: string, page: string): void {
    this.recipeService.getRecipesByType(type, page).subscribe(
      (recipes) => {
        this.recipes = recipes['recipes'];
        this.recipesNumber = recipes['recipes_number'];
        this.pages = this.paginationService.getPagesNumber(this.recipesNumber, this.currentPage);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.error('An error occurred:', err.error.message);
        } else {
          console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }

  getRecipesByCuisine(cuisine: string, page: string): void {
    this.recipeService.getRecipesByCuisine(cuisine, page).subscribe(
      (recipes) => {
        this.recipes = recipes['recipes'];
        this.recipesNumber = recipes['recipes_number'];
        this.pages = this.paginationService.getPagesNumber(this.recipesNumber, this.currentPage);
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
        this.currentPage = Number(params['page']);
        this.getRecipesByMain(params['main_ingredient'], params['page']);
      } else if (params['dish_type']) {
        this.currentPage = Number(params['page']);
        this.getRecipesByType(params['dish_type'], params['page']);
      } else if (params['cuisine']) {
        this.currentPage = Number(params['page']);
        this.getRecipesByCuisine(params['cuisine'], params['page']);
      } else {
        params['page'] ? this.currentPage = Number(params['page']) : this.currentPage = 1;
        this.getAllRecipes(params['page']);
      }
    });
  }

  getRecipesByPage(): void {
    this.router.navigate(['/recipes/'], { queryParams: { page: this.currentPage }, queryParamsHandling: 'merge' });
  }

  redirect(id): void {
    this.router.navigate(['./recipes', id]);
  }

  ngOnInit() {
    this.getRecipes();
  }
}

