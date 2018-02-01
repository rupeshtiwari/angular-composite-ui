import { Component, OnInit } from '@angular/core';

// <div pmc-add-product></div>

@Component({
  selector: 'wa-home-container',
  template: `
  <add-product-container></add-product-container>
  `,
  styles: [],
})
export class HomeContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
