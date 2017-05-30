"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var ProductListComponent = (function () {
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.pageTitle = 'Product List';
        this.imgWidth = 50;
        this.imgMargin = 20;
    }
    ProductListComponent.prototype.toggleImg = function (product) {
        this.products.filter(function (e) { return e.showImg = false; });
        this.products.filter(function (e) { return e.productId === product.productId; }).map(function (e) { return e.showImg = true; });
        this.productDetail = product;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        this.allProduct = this._productService.getProducts();
        this.products = this._productService.getProducts();
        this.products.filter(function (e) { return e.showImg = false; });
        //this.products;
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List' + " " + message;
    };
    ProductListComponent.prototype.filterName = function (text, exponent) {
        this.count = '';
        this.products = this.allProduct.filter(function (e) { return e.productName.includes(text); });
    };
    ProductListComponent.prototype.getCount = function () {
        this.count = 'Number of Products is :' + this.products.length;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: '<pm-products>',
        templateUrl: 'app/products/product-list.component.html',
        styleUrls: ['app/products/product-list.component.css'],
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map