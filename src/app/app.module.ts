import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { PassingIdService } from './services/passing-id.service';
import { PassingTypeService } from './services/passing-type.service';

import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth-interceptor.service';

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
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RecipeService, PassingIdService, AuthService, HeaderComponent,
    RecipesListComponent, PassingTypeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})

export class AppModule { }
