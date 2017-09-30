import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock.recipes';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  model: Recipe;
  title: string;
  body: string;
  addRecipe() {
    this.model = new Recipe(this.title, this.body);
    RECIPES.push(this.model);
  }

  constructor() { }

  ngOnInit() {
  }

}
