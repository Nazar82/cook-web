import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { PassingRecipeService } from '../../services/passing-recipe.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Params, ParamMap, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-edit-recipe',
    templateUrl: './edit-recipe.component.html',
    styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
    recipe: Recipe;
    title: string;
    descript: string;
    ingredients: string;
    directions: string;
    main: string;
    type: string;
    cuisine: string;
    posted_by: string;

    constructor(
        private recipeService: RecipeService,
        private authService: AuthService,
        private passingRecipeService: PassingRecipeService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    updateRecipe(): void {
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
        this.activatedRoute.paramMap.subscribe((params: ParamMap) =>
            this.recipeService.updateRecipe(this.recipe, params.get('id'))
        );

        this.title = '';
        this.descript = '';
        this.ingredients = '';
        this.directions = '';
        this.main = '';
        this.type = '';
        this.cuisine = '';

        setTimeout(() => this.router.navigate(['./']), 500);
    }

    getRecipeToEdit(id) {
        this.recipeService.getOneRecipe(id).subscribe(
            recipe => {
                this.recipe = recipe;
                this.title = this.recipe.title;
                this.descript = this.recipe.descript;
                this.ingredients = this.recipe.ingredients;
                this.directions = this.recipe.directions;
                this.main = this.recipe.main;
                this.type = this.recipe.type;
                this.cuisine = this.recipe.cuisine;
                this.posted_by = this.recipe.posted_by;
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.error('An error occurred:', err.error.message);
                } else {
                    console.error(
                        `Backend returned code ${err.status}, body was: ${err.error}`
                    );
                }
            }
        );
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.getRecipeToEdit(params['id']);
        });
    }
}
