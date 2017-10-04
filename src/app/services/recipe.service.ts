import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../models/recipe';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private recipesUrl = 'http://localhost:8080/api/recipes';
  private oneRecipeUrl = 'http://localhost:8080/api/recipe';

  constructor(private http: Http) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get(this.recipesUrl).map((response: Response) => response.json() as Recipe[]);
  }

  getOneRecipe(id: string): Observable<Recipe> {
    return this.http.get(`${this.oneRecipeUrl}/${id}`).map((response: Response) => response.json() as Recipe);
  }

  addRecipe(recipe) {
    return this.http.post(this.recipesUrl, recipe)
      .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      );
  }





  /* getRecipes(): Promise<Recipe[]> {
       return this.http.get(this.recipesUrl)
                  .toPromise()
                  .then(response => response.json().data as Recipe[])
                  .catch(this.handleError);
     }

     private handleError(error: any): Promise<any> {
       console.error('An error occurred', error); // for demo purposes only
       return Promise.reject(error.message || error);
     }  */
}

