import { from } from 'rxjs';
import{ Directive, HostBinding, HostListener } from '@angular/core'
@Directive({
    selector: '[app-dropdown]'
})
export class DropDown{
    @HostBinding('class.open') isopne=false;
    @HostListener('click') toggle(){
        this.isopne=!this.isopne;
    }
    
    constructor(){

    }
}