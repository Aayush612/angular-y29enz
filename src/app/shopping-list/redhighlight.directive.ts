import { Directive, ElementRef, HostListener } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';


@Directive({
  selector: '[appRedHighlight]'
})
export class RedHighlightDirective {
  constructor(private el: ElementRef, private slService: ShoppingListService) { }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('lightyellow');
  // }

  @HostListener('mouseup') onMouseUp() {
    this.highlight(null);
    // console.log("Mouseup")
    // console.log(this.el.nativeElement.id)
    this.slService.deleteIngredients(this.el.nativeElement.id)

  }

  @HostListener('mousedown') onMouseDown() {
    this.highlight("#ff5b4f");
    // console.log("click")
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}