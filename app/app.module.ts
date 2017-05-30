import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProductListComponent } from './products/product-list.component';
import { CustomProducts } from './custom/custom-products.component';
import { LoanCalculatorComponent } from './loancalculator/loan-calculator.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import {FormsModule} from '@angular/forms';
import { AppComponent}  from './app.component';
import { StarComponent } from './shared/star.component';
import { LayoutComponent } from './layout/layout.component';
import { LandingPageComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

// Routing imports
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ProductListComponent, CustomProducts, LoanCalculatorComponent, ProductFilterPipe, StarComponent, LayoutComponent, LandingPageComponent, LoginComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/**
 * Fixes::
 * Angular 2.0 Release: Pipes and Directives are not properties of @Component anymore. SO we should set Pipes in @NgModule => declarations[];
 * Angular 2: Can't bind to 'ngModel' since it isn't a known property of 'input'. So We should set FormsModule in @NgModule => imports[];
 * Angular2 exception: Can't bind to 'ngFor' since it isn't a known native property. So =>
 * usage of #... to declare local variables inside of structural directives like NgFor is deprecated. Use let instead. 
 */