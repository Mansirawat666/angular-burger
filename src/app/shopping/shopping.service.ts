import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredients.model";

export class ShoppingService
{
    ingredientsChanged=new Subject<Ingredient[]>();
    startedEditing=new Subject<Number>();
    private ingredients : Ingredient[]=[
        new Ingredient("Tomato",2),
        new Ingredient("Apple",5)
      ];


      getIngredients(){
          return this.ingredients.slice();
      }

    

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
          this.ingredients.push(...ingredients);
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      getIngredient(index: number){
        return this.ingredients[index];
      }

      updateIngredient(index : number, newIngredient : Ingredient){
          this.ingredients[index]=newIngredient;
          this.ingredientsChanged.next(this.ingredients.slice());
      }

      deleteIngredient(index : number){
          this.ingredients.slice(index,1);
          this.ingredientsChanged.next(this.ingredients.slice())
      }
    
}