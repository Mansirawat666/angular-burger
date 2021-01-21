import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.Model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe:RecipeModel;
  constructor(private recipeService : RecipeService  ) { 
    
    this.recipeService.recipeSelected.subscribe(() => {
      console.log("yaha bhi  aara")
    })
  }

  ngOnInit(): void {
    
  }
}
