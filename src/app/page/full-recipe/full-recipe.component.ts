import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Params, ParamMap, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { PassingRecipeService } from '../../services/passing-recipe.service';
import { AuthService } from '../../services/auth.service';
import { Recipe } from '../../models/recipe';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

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
  current_user = '';

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private passingRecipeService: PassingRecipeService,
    private authService: AuthService,
    private router: Router
  ) { }

  getOneRecipe(): void {
    this.activatedRoute.paramMap
      .switchMap((params: ParamMap) =>
        this.recipeService.getOneRecipe(params.get('id'))
      )
      .subscribe(
        recipe => {
          this.recipe = recipe;
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

  redirect(id): void {
    this.passingRecipeService.saveRecipe(this.recipe);
    this.router.navigate(['./recipes', id, 'edit']);
  }

  deleteRecipe(id): void {
    const conFirm = confirm(
      'The recipe will be permanently deleted. Continue?'
    );
    if (conFirm) {
      this.recipeService.deletRecipe(id);
      setTimeout(() => this.router.navigate(['./']), 500);
    }
  }

  ngOnInit(): void {
    this.getOneRecipe();
    const userObj = JSON.parse(this.authService.loadUser());
    this.current_user = userObj.username;
  }
}
