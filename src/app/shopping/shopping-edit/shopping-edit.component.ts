import { formatCurrency } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slform :NgForm;
subscription : Subscription;
editMode=false;
EditIndex: number;
EditItem: Ingredient;
@Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private slservice: ShoppingService) { }

  ngOnInit(): void {
    this.subscription=this.slservice.startedEditing.subscribe(
      (index: number)=>{
        this.EditIndex=index;
        this.editMode=true;
       
        this.EditItem=this.slservice.getIngredient(index);
        this.slform.setValue({
          name: this.EditItem.name,
          amount: this.EditItem.amount
        })
      }
    );
  }
  onSubmit(form : NgForm){
    const value= form.value;
    const newIngredient=new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.slservice.updateIngredient(this.EditIndex,newIngredient);
    }
    else{
      this.ingredientAdded.emit(newIngredient);
    }
    this.editMode=false;
    form.reset();
    
  }

  onClear(){
    this.slform.reset();
    this.editMode=false;
  }
 ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onDelete(){
    this.slservice.deleteIngredient(this.EditIndex);
    this.onClear();
  }

}
