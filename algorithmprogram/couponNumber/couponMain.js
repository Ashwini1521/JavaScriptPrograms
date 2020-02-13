
/******************************************************************************
	 *  Execution       :   1. default node         cmd> node couponMain.js
	 *                      2. if nodemon installed cmd> nodemon couponMain.js
	 *
	 *  Purpose         : CouponNumber.
	 *
	 *  @description    : taking input from given distinct coupon number and finding how many times coupon number is generating using random function...
	 *
	 *  @file           : couponMain.js
	 *  @overview       : coupon number generation. 
	 *  @module         : module_name - This is optional if expeclictly its an npm or local package
	 *  @author         : Ashwini M <ashwiniswamy1521@gmail.com>
	 *  @version        : 1.0
	 *  @since          : 13-02-2020
	 ******************************************************************************/
let readline = require('readline-sync');
let callFunction = require('./couponBL');

    try {
    let NoOfCoupon = readline.questionInt("how many times you want to generate coupon");
    console.log("Enter" + NoOfCoupon + "distinct coupon between 10 to 100");
    let coupon = [];
    for (let i = 0; i < NoOfCoupon;){
            let num = readline.questionInt();
            if(num >= 1){
                coupon.push(num);
                i++;
            } 
        }
        
       let num= callFunction.CouponNumber(coupon); // calling CouponNumber()
        console.log(num);
} catch (error) {
    console.log(error);
}