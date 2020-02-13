module.exports = {
    CouponNumber: (coupon) => {
       
        let NoOfRandomCall =0
        let length=coupon.length;
        while(coupon.length > 0){

            let index=-1;
            let num = Math.floor(Math.random()*100)+1;
            NoOfRandomCall++;
            index = coupon.indexOf(num,0);

            if(index>-1){
                coupon.splice(index,1);
            }
            
        }
        return NoOfRandomCall;
    }
}