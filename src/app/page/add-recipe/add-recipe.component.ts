import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})

export class AddRecipeComponent implements OnInit {
  recipe: Recipe;
  title: string;
  descript: string;
  ingredients: string;
  directions: string;
  main: string;
  type: string;
  cuisine: string;
  posted_by: string;

  constructor(private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  addRecipe(): void {
    this.recipe = new Recipe(
      this.title,
      this.descript,
      this.ingredients,
      this.directions,
      this.main,
      this.type,
      this.cuisine,
      this.posted_by
    );

    this.recipeService.addRecipe(this.recipe);
    this.title = '';
    this.descript = '';
    this.ingredients = '';
    this.directions = '';
    this.main = '';
    this.type = '';
    this.cuisine = '';
  }

  ngOnInit() {
  }

}
