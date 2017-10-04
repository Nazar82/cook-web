import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { DataService } from '../../services/data.service';
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
    private dataService: DataService
  ) {}

    getRecipes() {
      this.recipeService.getRecipes()
      .subscribe(
        recipes => {
          this.recipes = recipes;
        }
      );
    }

    redirect(id) {
      this.dataService.storage = id;
      console.log(id);
      console.log(this.dataService.storage);
      this.router.navigate(['./full-recipe']);
    }

  ngOnInit(): void {
    this.getRecipes();
    }

  }

