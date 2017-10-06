import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { PassingIdService } from '../../services/passing-id.service';
import { Router } from '@angular/router';

 @Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService,
    private router: Router,
    private passingIdService: PassingIdService
  ) {}

    getRecipes() {
      this.recipeService.getRecipes()
      .subscribe(
        recipes => {
          this.recipes = recipes;
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }
        );
    }

    redirect(id) {
      this.passingIdService.saveId(id);
      this.router.navigate(['./full-recipe']);
    }

  ngOnInit(): void {
    this.getRecipes();
    }

  }

