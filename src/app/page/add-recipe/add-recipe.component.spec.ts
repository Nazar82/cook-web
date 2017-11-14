import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddRecipeComponent } from './add-recipe.component';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

fdescribe('AddRecipeComponent', () => {
  let component: AddRecipeComponent;
  let fixture: ComponentFixture<AddRecipeComponent>;
  let recipeService: RecipeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AddRecipeComponent],
      providers: [RecipeService, AuthService, HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeComponent);
    component = fixture.componentInstance;
    recipeService = TestBed.get(RecipeService);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create recipe', () => {
    spyOn(component, 'addRecipe').and.callThrough();
    spyOn(recipeService, 'addRecipe').and.callThrough();
    component.addRecipe();
    expect(component.recipe).toBeTruthy();
    expect(recipeService.addRecipe).toHaveBeenCalled();
  });
  it('should fire addRecipe() method', async() => {
    spyOn(component, 'addRecipe');
    const button = fixture.debugElement.nativeElement.querySelector('input');
    button.triggerEventHandler('click', null);
    fixture.whenStable().then(() => expect(component.addRecipe).toHaveBeenCalled());
  });
});
