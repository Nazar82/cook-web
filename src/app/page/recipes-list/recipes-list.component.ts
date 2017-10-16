import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { PassingIdService } from '../../services/passing-id.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService,
    private router: Router,
    private passingIdService: PassingIdService,
    private headerComponent: HeaderComponent
  ) { }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(
      recipes => {
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

  redirect(id): void {
    this.passingIdService.saveId(id);
    this.router.navigate(['./full-recipe']);
  }

  ngOnInit(): void {
    this.getRecipes();
  }

}

