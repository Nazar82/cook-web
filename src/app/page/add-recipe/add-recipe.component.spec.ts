import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AddRecipeComponent } from './add-recipe.component';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';

import { ActivatedRouteStub } from '../../../test-helpers/AcrivatedRouteStub';
import { RouterStub } from '../../../test-helpers/RouterStub';
import { RecipeServiceMock } from '../../../test-helpers/RecipeServiceMock';
import { AuthServiceMock } from '../../../test-helpers/AuthServiceMock';

fdescribe('AddRecipeComponent', () => {
  let component: AddRecipeComponent;
  let fixture: ComponentFixture<AddRecipeComponent>;
  let recipeServiceMock;
  let activatedRouteStub;
  let recipeService;
  let authService;
  let authServiceMock;
  let routerStub;
  let activatedRoute;
  let router;

  beforeEach(() => {
    recipeServiceMock = new RecipeServiceMock();
    activatedRouteStub = new ActivatedRouteStub();
    authServiceMock = new AuthServiceMock();
    routerStub = new RouterStub();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AddRecipeComponent],
      providers: [{ provide: RecipeService, useValue: recipeServiceMock },
      { provide: AuthService, useValue: authServiceMock },
      { provide: ActivatedRoute, useValue: activatedRouteStub },
      { provide: Router, useValue: routerStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeComponent);
    component = fixture.componentInstance;
    recipeService = TestBed.get(RecipeService);
    authService = TestBed.get(AuthService);
    activatedRoute = TestBed.get(ActivatedRoute);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create component and set value to posted_by', () => {
    expect(component).toBeTruthy();
    expect(component.posted_by).toBe('Mike');
  });

  it('should call RecipeService addRecipe() method', () => {
    spyOn(recipeService, 'addRecipe');
    component.addRecipe();
    expect(recipeService.addRecipe).toHaveBeenCalledTimes(1);
  });

  it('should call component addRecipe() method', () => {
    spyOn(component, 'addRecipe');
    fixture.nativeElement.querySelector('.addBtn').click();
    expect(component.addRecipe).toHaveBeenCalledTimes(1);
  });

  it('should navigate to home page', () => {
    jasmine.clock().install();
    spyOn(router, 'navigate');
    component.addRecipe();
    jasmine.clock().tick(501);
    expect(router.navigate).toHaveBeenCalledWith(['./']);
    jasmine.clock().uninstall();
  });

});
