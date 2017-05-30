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
var LoanCalculatorComponent = (function () {
    function LoanCalculatorComponent() {
        this.myloan = 'EMI Calculator';
        this.calculateEMI = {
            amount: 0,
            interest: 0,
            duration: 0,
            res: 0
        };
    }
    /**
     * Calculate EMI
     */
    LoanCalculatorComponent.prototype.showVal = function () {
        /**
         * EMI = ₹10,00,000 * 0.00875 * (1 + 0.00875)120 / ((1 + 0.00875)120 – 1) = ₹13,493
         */
        var principal = this.calculateEMI.amount;
        var rateofint = this.calculateEMI.interest;
        var tenure = this.calculateEMI.duration;
        var totalemi = (this.calculateEMI.amount) * (this.calculateEMI.interest);
        if (principal > 0 && rateofint > 0 && tenure > 0 && totalemi > 0) {
            this.emi = totalemi / 100 * 2;
        }
    };
    return LoanCalculatorComponent;
}());
LoanCalculatorComponent = __decorate([
    core_1.Component({
        selector: '<my-loan></my-loan>',
        templateUrl: 'app/loancalculator/loan-calculator.component.html',
        styleUrls: ['app/loancalculator/loan.component.css']
    }),
    __metadata("design:paramtypes", [])
], LoanCalculatorComponent);
exports.LoanCalculatorComponent = LoanCalculatorComponent;
//# sourceMappingURL=loan-calculator.component.js.map