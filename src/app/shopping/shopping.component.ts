import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredients.model'
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit,OnDestroy {
ingredients : Ingredient[];
private subscription: Subscription;
constructor(private slService: ShoppingService){}

  
  OnIngredientsAdded(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }
  ngOnInit(): void {
    this.ingredients=this.slService.getIngredients();
    this.subscription=this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }

  OnEditItem(index : Number){
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
