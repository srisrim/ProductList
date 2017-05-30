import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: '<pm-products>',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
})

export class ProductListComponent {
    pageTitle: string = 'Product List';
    imgWidth: number = 50;
    imgMargin: number = 20;
    listFilter: string;
    allProduct: Iproduct[];
    products: Iproduct[];
    count: string;
    imgUrl: string;
    productDetail: Iproduct;

    constructor(private _productService: ProductService) {

    }

    toggleImg(product: Iproduct) {
        this.products.filter(e => e.showImg = false);
        this.products.filter(e => e.productId === product.productId).map(e => e.showImg = true);
        this.productDetail = product;
    }
    ngOnInit() {
        this.allProduct = this._productService.getProducts();
        this.products = this._productService.getProducts();
        this.products.filter(e => e.showImg = false);
        //this.products;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List' + " " + message;
    }

    filterName(text: string, exponent: string) {
        this.count = '';
        this.products = this.allProduct.filter(e => e.productName.includes(text));
    }
    getCount() {
        this.count = 'Number of Products is :' + this.products.length;
    }
}