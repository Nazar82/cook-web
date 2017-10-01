import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

 @Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
   }
   getRecipes(): void {
   this.recipes = this.recipeService.getRecipes();
   }

  ngOnInit(): void {
    this.getRecipes();
  }

}
