import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../models/recipe';
import { API_URL } from '../urls/urls';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient,
        private authService: AuthService
    ) { }

    getRecipes(page: string): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`${API_URL}/api/recipes`, {
            params: new HttpParams().set('page', page),
        });
    }

    getOneRecipe(id: string): Observable<Recipe> {
        return this.http.get<Recipe>(`${API_URL}/api/recipes/${id}`);
    }

    getRecipesByMain(main: string, page: string): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`${API_URL}/api/recipesbymain`, {
            params: new HttpParams().set('main', main).set('page', page),
        });
    }

    getRecipesByType(type: string, page: string): Observable<Recipe[]> {
        console.log(type);
        return this.http.get<Recipe[]>(`${API_URL}/api/recipesbytype`, {
            params: new HttpParams().set('type', type).set('page', page),
        });
    }

    getRecipesByCuisine(cuisine: string, page: string): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`${API_URL}/api/recipesbycuisine`, {
            params: new HttpParams().set('cuisine', cuisine).set('page', page),
        });
    }

    addRecipe(recipe: Recipe) {
        return this.http.post(`${API_URL}/api/recipes`, recipe)
            .subscribe(
                (response) => console.log(response),
                (error) => console.error(error)
            );
    }

    updateRecipe(recipe: Recipe, id: string) {
        return this.http.put(`${API_URL}/api/recipe/${id}`, recipe)
            .subscribe(
                (response) => console.log(response),
                (error) => console.error(error)
            );
    }

    deletRecipe(id: string) {
        return this.http.delete(`${API_URL}/api/recipe/${id}`)
            .subscribe(
                (response) => console.log(response),
                (error) => console.error(error)
            );
    }

}

