import { Component, OnInit } from '@angular/core'
import { EMICalculator } from './loan-calculator.model'

@Component({
    selector: '<my-loan></my-loan>',
    templateUrl: 'app/loancalculator/loan-calculator.component.html',
    styleUrls: ['app/loancalculator/loan.component.css']
})
export class LoanCalculatorComponent {
    myloan: string = 'EMI Calculator';

    calculateEMI: EMICalculator;

    emi: number;

    constructor() {
        this.calculateEMI = {
            amount: 0,
            interest: 0,
            duration: 0,
            res: 0
        }
    }

    /**
     * Calculate EMI
     */
    showVal() {
        /**
         * EMI = ₹10,00,000 * 0.00875 * (1 + 0.00875)120 / ((1 + 0.00875)120 – 1) = ₹13,493
         */
        let principal = this.calculateEMI.amount;
        let rateofint = this.calculateEMI.interest;
        let tenure = this.calculateEMI.duration;
        let totalemi = (this.calculateEMI.amount) * (this.calculateEMI.interest);
        if (principal > 0 && rateofint > 0 && tenure > 0 && totalemi > 0) {
            this.emi = totalemi / 100 * 2;
        }

    }

}