import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../models/recipe';
import { MAIN_URL } from '../urls/urls';
import { AuthService } from '../services/auth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient,
    private authService: AuthService
  ) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${MAIN_URL}/api/recipes`);
  }

  getOneRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${MAIN_URL}/api/recipe/${id}`);
  }

  addRecipe(recipe: Recipe) {
    return this.http.post(`${MAIN_URL}/api/recipes`, recipe)
      .subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
      );
  }
}

