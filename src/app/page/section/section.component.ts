import { Component, OnInit } from '@angular/core';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';
import { AppComponent } from '../main/app.component';
import { PassingFilterService } from '../../services/passing-filter.service';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material';


@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

    constructor(private recipesList: RecipesListComponent,
        private passingFilterSrvice: PassingFilterService,
        private router: Router,
        private appComponent: AppComponent
    ) { }

    filterByMain(filter: string): void {
        this.passingFilterSrvice.saveFilter(filter);
        this.router.navigate(['/recipes'], { queryParams: { main_ingredient: filter, page: 1 } });
    }

    filterByType(filter: string): void {
        this.passingFilterSrvice.saveFilter(filter);
        this.router.navigate(['/recipes'], { queryParams: { dish_type: filter, page: 1 } });
    }

    filterByCuisine(filter: string): void {
        this.passingFilterSrvice.saveFilter(filter);
        this.router.navigate(['/recipes'], { queryParams: { cuisine: filter, page: 1 } });
    }

    hideMenu() {
        this.appComponent.block = undefined;
    }

    redirectHome(): void {
        this.router.navigate(['./recipes'], { queryParams: { page: 1 } });
    }

    ngOnInit() {
    }

}
