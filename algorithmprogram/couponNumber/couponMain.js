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