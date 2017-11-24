import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/Rx';
import { Router, Event, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { PaginationService } from '../../services/pagination.service';
import { DebugElement } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';



import { RecipesListComponent } from './recipes-list.component';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../main/app.component';

describe('RecipesListComponent', () => {
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;
  let de: DebugElement;
  let recipeService: RecipeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [RecipesListComponent],
      providers: [RecipeService, PaginationService, HttpClient, HttpHandler, AuthService,
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }, HeaderComponent,
        AppComponent, { provide: ActivatedRoute, useClass: class { ActivatedRouteStub; } }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    recipeService = TestBed.get(RecipeService);

  });


  it('should call getRecipe() method when initialised', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    expect(component.getRecipes()).toHaveBeenCalled();
  });


});
