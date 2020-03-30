const assert = require('chai').assert; //assert to determine the status of the failure
const callfunction = require('./add.js');
describe('get if callfunction generates coupon number or not from couponNumberBl.js', () => { //holds collection of test
   
    it("should not be negative", () => { //it() is the test itself
        assert.equal(callfunction.CouponNumber(-1929), false);
    });
    it("should not be decimal number", () => {
        assert.equal(callfunction.CouponNumber(1.2), false);
    });
    
});