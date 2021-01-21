import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recipe.Model'
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipies: RecipeModel[];
  constructor(private Rescipeser: RecipeService) { }

  ngOnInit() {
    this.recipies = this.Rescipeser.getRecipe();
  }
}
