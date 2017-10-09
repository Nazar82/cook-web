import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../models/recipe';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private recipesUrl = 'http://localhost:8080/api/recipes';
  private oneRecipeUrl = 'http://localhost:8080/api/recipe';

  constructor(private http: HttpClient) { }

 getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);
  }

  getOneRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.oneRecipeUrl}/${id}`);
  }

  addRecipe(recipe) {
    return this.http.post(this.recipesUrl, recipe)
      .subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
      );
  }
}

