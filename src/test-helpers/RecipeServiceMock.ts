import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeServiceMock {
    addRecipe() {
        return 'Added recipe';
    }
    getOneRecipe(id) {
        return Observable.of('recipe');
    }
}
