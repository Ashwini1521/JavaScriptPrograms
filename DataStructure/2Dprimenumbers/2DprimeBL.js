
let resultArr = [];
let index = 0;
let range = 100;
let i =0;
let arr = [];
module.exports = {
    resultArr,
   
     
    primeNumbers: (number) => {   // it will find prime numbers.
        for(let i=2;i<=number+10;i++){
            let isPrime =true;
            for(j=2;j<=i/2;j++){
                if(i%j == 0){
                    isPrime=false;
                }
            }
            isPrime ? module.exports.storeDataInRange(i) : j;
        }
    },
    
         
    storeDataInRange: (value) => { //it will store the value in array.
        if(value < range){
            arr[i++] = value;
        } else if(value > range) {
            range = range + 100;
            resultArr[index++] = arr;
            arr = [];
            i = 0;
            arr[i++] = value;
        }
    }
}