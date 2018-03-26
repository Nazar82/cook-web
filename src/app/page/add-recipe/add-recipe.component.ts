import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { PassingRecipeService } from '../../services/passing-recipe.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Params, ParamMap, Router } from '@angular/router';

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
    posted_by: string = JSON.parse(this.authService.loadUser()).username;

    constructor(private recipeService: RecipeService,
        private authService: AuthService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    addRecipe(): void {
        this.recipe = new Recipe(
            this.title,
            this.descript,
            this.ingredients.replace(/\n+/g, '\n'),
            this.directions.replace(/\n+/g, '\n\n'),
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
        setTimeout(() => this.router.navigate(['./']), 500);
    }

    ngOnInit() {
    }

}
