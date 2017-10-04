import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './page/main/app.component';
import { SectionComponent } from './page/section/section.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { RecipesListComponent } from './page/recipes-list/recipes-list.component';
import { AboutComponent } from './page/about/about.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { FullRecipeComponent } from './page/full-recipe/full-recipe.component';
import { AddRecipeComponent } from './page/add-recipe/add-recipe.component';

import { AppRoutingModule } from './routing/app.routing.module';
import { RecipeService } from './services/recipe.service';
import { DataService } from './services/data.service';

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
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RecipeService, DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
