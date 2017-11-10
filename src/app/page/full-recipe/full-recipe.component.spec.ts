import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute, Params, ParamMap, Router, convertToParamMap, } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';
import { Recipe } from '../../models/recipe';

import { FullRecipeComponent } from './full-recipe.component';

fdescribe('FullRecipeComponent', () => {
  let component: FullRecipeComponent;
  let fixture: ComponentFixture<FullRecipeComponent>;
  let recipeServiceMock;
  let activatedRouteStub;

  class RecipeServiceMock {
    constructor() { }
    recipe = {
      title: 'Title'
    };
    getOneRecipe(id) {
      return Observable.of('recipe');
    }
  }

  class ActivatedRouteStub {

    private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
    paramMap = this.subject.asObservable();

    private _testParamMap: ParamMap;
    get testParamMap() { return this._testParamMap; }
    set testParamMap(params: {}) {
      this._testParamMap = convertToParamMap(params);
      this.subject.next(this._testParamMap);
    }

    get snapshot() {
      return { paramMap: this.testParamMap };
    }
  }

  beforeEach(async(() => {
    recipeServiceMock = new RecipeServiceMock();
    activatedRouteStub = new ActivatedRouteStub();
    TestBed.overrideProvider(RecipeService, { useValue: recipeServiceMock });

    TestBed.configureTestingModule({
      declarations: [FullRecipeComponent],
      providers: [RecipeService, { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullRecipeComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call getOneRecipe() method', () => {
    spyOn(component, 'getOneRecipe').and.callThrough();
    fixture.detectChanges();
    expect(component.getOneRecipe).toHaveBeenCalled();
  });

  it('should call recipeService method getOneRecipe()', () => {
    spyOn(recipeServiceMock, 'getOneRecipe').and.callThrough();
    fixture.detectChanges();
    expect(recipeServiceMock.getOneRecipe).toHaveBeenCalled();
  });

  it('should call recipeService method getOneRecipe() with set id', () => {
    spyOn(recipeServiceMock, 'getOneRecipe').and.callThrough();
    activatedRouteStub.testParamMap = { id: '123' };
    fixture.detectChanges();
    expect(recipeServiceMock.getOneRecipe).toHaveBeenCalledWith('123');
  });

});
