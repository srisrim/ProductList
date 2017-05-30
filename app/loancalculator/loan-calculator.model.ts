
/**
 * EMICalculator Class
 * 
 * @export
 * @class EMICalculator
 */
export class EMICalculator {
    constructor(
        public amount: number,
        public interest: number,
        public duration: number,
        public res: number ) {
    }
}
