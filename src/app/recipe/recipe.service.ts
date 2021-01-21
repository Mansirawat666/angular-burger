import { EventEmitter, Injectable } from '@angular/core'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RecipeModel } from './recipe.Model'

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  resizeSubject = new Subject()
  recipeSelected = new EventEmitter<RecipeModel>();
  constructor() { }

  private receipeSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public getReceipeList(): Observable<any> {
    return this.receipeSubject;

  }

  private recipies: RecipeModel[] = [
    new RecipeModel('Test Recipe', 'Very delicious', 'https://media.timeout.com/images/102998923/image.jpg'),
    new RecipeModel('Test Recipe1', 'Not delicious', 'https://downshiftology.com/wp-content/uploads/2015/11/shakshuka-12.jpg')
  ];


  getRecipe() {
    return this.recipies.slice();
  }
}
