import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'my-app',
//   template: `<div class="container">
// 	<h1>{{pageTitle}}</h1>
// 	<pm-products></pm-products>
// 	<my-loan></my-loan>
// </div>`,
  templateUrl: './app/app.component.html',

  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = 'Product List';
}
