import { Component, OnInit } from '@angular/core';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';
import { PassingFilterService } from '../../services/passing-filter.service';
import { Router } from '@angular/router';

import {MatButtonModule} from '@angular/material';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private recipesList: RecipesListComponent,
    private passingFilterSrvice: PassingFilterService,
    private router: Router
  ) { }

  filterByMain(filter) {
    this.passingFilterSrvice.saveFilter(filter);
    this.router.navigate(['/recipes'], { queryParams: { main: filter } });
  }

  filterByType(filter) {
    this.passingFilterSrvice.saveFilter(filter);
    this.router.navigate(['/recipes'], { queryParams: { type: filter } });
  }

  filterByCuisine(filter) {
    this.passingFilterSrvice.saveFilter(filter);
    this.router.navigate(['/recipes'], { queryParams: { cuisine: filter } });
  }

  ngOnInit() {
  }

}
