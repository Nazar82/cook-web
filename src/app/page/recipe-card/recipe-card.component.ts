import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Router } from '@angular/router';

@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipe-card.component.html',
    styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
    @Input() recipe: Recipe;

    constructor(private router: Router) { }

    redirect(id): void {
        this.router.navigate(['./recipes', id]);
    }

    ngOnInit() { }
}
