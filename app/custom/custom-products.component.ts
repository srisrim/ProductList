import {Component} from '@angular/core';
import { LoanCalculatorComponent } from '../loancalculator/loan-calculator.component';

@Component({
    selector: '<custom></custom>',
    templateUrl: 'app/custom/custom-products.component.html'
})

export class CustomProducts {
    title: string = 'My Custom Products';
    foo: boolean = false;
    
}


