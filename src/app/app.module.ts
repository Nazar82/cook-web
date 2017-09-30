import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FullRecipeComponent } from './full-recipe/full-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

import { AppRoutingModule } from './app.routing.module';
import { RecipeService } from './recipe.service';


@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    HeaderComponent,
    FooterComponent,
    RecipesListComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    FullRecipeComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
