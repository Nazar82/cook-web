import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap, Router, convertToParamMap, } from '@angular/router';
import { ActivatedRouteStub } from '../../../test-helpers/AcrivatedRouteStub';
import { RouterStub } from '../../../test-helpers/RouterStub';
import { RecipeServiceMock } from '../../../test-helpers/RecipeServiceMock';
import { PassingRecipeServiceMock } from '../../../test-helpers/PassingRecipeServiceMock';
import { AuthServiceMock } from '../../../test-helpers/AuthServiceMock';
import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';
import { PassingRecipeService } from '../../services/passing-recipe.service';
import { FullRecipeComponent } from './full-recipe.component';

fdescribe('FullRecipeComponent', () => {
  let component: FullRecipeComponent;
  let fixture: ComponentFixture<FullRecipeComponent>;
  let recipeServiceMock;
  let activatedRouteStub;
  let passingRecipeServiceMock;
  let recipeService;
  let authService;
  let authServiceMock;
  let passingRecipeService;
  let routerStub;
  let activatedRoute;
  let router;

  beforeEach(async(() => {
    recipeServiceMock = new RecipeServiceMock();
    activatedRouteStub = new ActivatedRouteStub();
    routerStub = new RouterStub();
    passingRecipeServiceMock = new PassingRecipeServiceMock();
    authServiceMock = new AuthServiceMock();

    TestBed.configureTestingModule({
      declarations: [FullRecipeComponent],
      providers: [{ provide: RecipeService, useValue: recipeServiceMock },
      { provide: PassingRecipeService, useValue: passingRecipeServiceMock },
      { provide: ActivatedRoute, useValue: activatedRouteStub },
      { provide: AuthService, useValue: authServiceMock },
      { provide: Router, useValue: routerStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullRecipeComponent);
    component = fixture.componentInstance;
    recipeService = TestBed.get(RecipeService);
    authService = TestBed.get(AuthService);
    passingRecipeService = TestBed.get(PassingRecipeService);
    activatedRoute = TestBed.get(ActivatedRoute);
    router = TestBed.get(Router);
  });

  it('should create component and set value to current_user', () => {
    expect(component.current_user).toBeFalsy();
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.current_user).toBeTruthy();
  });

  it('should call getOneRecipe() method', () => {
    spyOn(component, 'getOneRecipe');
    fixture.detectChanges();
    expect(component.getOneRecipe).toHaveBeenCalled();
  });

  it('should call recipeService method getOneRecipe()', () => {
    spyOn(recipeService, 'getOneRecipe');
    fixture.detectChanges();
    expect(recipeService.getOneRecipe).toHaveBeenCalled();
  });

  it('should call recipeService method getOneRecipe() with set id', () => {
    spyOn(recipeServiceMock, 'getOneRecipe');
    activatedRouteStub.testParamMap = { id: '123' };
    fixture.detectChanges();
    expect(recipeServiceMock.getOneRecipe).toHaveBeenCalledWith('123');
  });

  it('should call passingRecipeService saveRecipe() method and router navigate() method', () => {
    spyOn(passingRecipeService, 'saveRecipe');
    spyOn(router, 'navigate');
    component.redirect('123');
    fixture.detectChanges();
    expect(passingRecipeService.saveRecipe).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should call passingRecipeService saveRecipe() method and router navigate() method', () => {
    spyOn(router, 'navigate');
    component.redirect('123');
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalled();
  });

});
