import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class RecipeServiceMock {
    addRecipe() {
        return 'Added recipe';
    }
    getOneRecipe(id): Observable<{}>  {
        return Observable.of({
            title: 'Recipe',
            descript: 'description',
            ingredients: 'ingredients',
            directions: 'directions',
            main: 'main',
            type: 'type',
            cuisine: 'cuisine',
            posted_by: 'Mike'
        });
    }
}
