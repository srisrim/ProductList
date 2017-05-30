"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var product_list_component_1 = require("./products/product-list.component");
var custom_products_component_1 = require("./custom/custom-products.component");
var loan_calculator_component_1 = require("./loancalculator/loan-calculator.component");
var product_filter_pipe_1 = require("./products/product-filter.pipe");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var star_component_1 = require("./shared/star.component");
var layout_component_1 = require("./layout/layout.component");
var landing_component_1 = require("./landing/landing.component");
var login_component_1 = require("./login/login.component");
// Routing imports
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(app_routing_1.appRoutes)],
        declarations: [app_component_1.AppComponent, product_list_component_1.ProductListComponent, custom_products_component_1.CustomProducts, loan_calculator_component_1.LoanCalculatorComponent, product_filter_pipe_1.ProductFilterPipe, star_component_1.StarComponent, layout_component_1.LayoutComponent, landing_component_1.LandingPageComponent, login_component_1.LoginComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
/**
 * Fixes::
 * Angular 2.0 Release: Pipes and Directives are not properties of @Component anymore. SO we should set Pipes in @NgModule => declarations[];
 * Angular 2: Can't bind to 'ngModel' since it isn't a known property of 'input'. So We should set FormsModule in @NgModule => imports[];
 * Angular2 exception: Can't bind to 'ngFor' since it isn't a known native property. So =>
 * usage of #... to declare local variables inside of structural directives like NgFor is deprecated. Use let instead.
 */ 
//# sourceMappingURL=app.module.js.map