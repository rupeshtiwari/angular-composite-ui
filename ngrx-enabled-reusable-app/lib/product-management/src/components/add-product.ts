import {
  Component,
  Input,
  ElementRef,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Output } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'pm-add-product',
  template: `
        <div>
        <form (submit)="addProductClick($event)">
            <p>Product Name:<input type="text" #prodName name="prodName" id="prodName"></p>
        </form>
        </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent {
  @Output() addProduct = new EventEmitter();
  @ViewChild('prodName') prodName: ElementRef;
  constructor() {}
  addProductClick(event: KeyboardEvent) {
    event.stopPropagation();
    event.preventDefault();
    const name = this.prodName.nativeElement.value;
    this.addProduct.emit(name);
  }
}
