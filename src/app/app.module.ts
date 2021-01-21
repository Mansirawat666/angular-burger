import { BrowserModule } from '@angular/platform-browser';

import{ FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';
import { DropDown } from './shared/dropdown';
import { ShoppingService } from './shopping/shopping.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingComponent,
    ShoppingEditComponent, 
    DropDown
  ],
  imports: [
    FormsModule,
    BrowserModule

  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
