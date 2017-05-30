"use strict";
/**
 * EMICalculator Class
 *
 * @export
 * @class EMICalculator
 */
var EMICalculator = (function () {
    function EMICalculator(amount, interest, duration, res) {
        this.amount = amount;
        this.interest = interest;
        this.duration = duration;
        this.res = res;
    }
    return EMICalculator;
}());
exports.EMICalculator = EMICalculator;
//# sourceMappingURL=loan-calculator.model.js.map