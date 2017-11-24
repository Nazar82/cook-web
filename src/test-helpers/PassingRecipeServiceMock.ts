import { Injectable } from '@angular/core';

@Injectable()
export class PassingRecipeServiceMock {

    recipe: string;

    saveRecipe(recipe): string {
        this.recipe = recipe;
        return this.recipe;
    }

    getRecipe(): string {
        return this.recipe;
    }
}
