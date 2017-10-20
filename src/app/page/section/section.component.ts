import { Component, OnInit } from '@angular/core';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';
import { PassingTypeService } from '../../services/passing-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private recipesList: RecipesListComponent,
    private passingTypeSrvice: PassingTypeService,
    private router: Router
  ) { }

  filterByType(type) {
    this.passingTypeSrvice.saveType(type);
    this.recipesList.getRecipesByType();
   }
  ngOnInit() {
  }

}
