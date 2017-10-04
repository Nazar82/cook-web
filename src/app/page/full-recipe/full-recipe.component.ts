import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { DataService } from '../../services/data.service';
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
    private dataService: DataService) { }

  getOneRecipe(id) {
    this.recipeService.getOneRecipe(id)
      .subscribe(
      recipe => {
        this.recipe = recipe;
      }
      );
  }

  ngOnInit() {
    this.getOneRecipe(this.dataService.storage);
  }
}
