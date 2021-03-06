import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../../recipe.Model'
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor(private Recipeserv: RecipeService) { }

  OnSelected() {

    this.Recipeserv.recipeSelected.emit(this.recipe);
  }
  ngOnInit(): void {

  }

}
