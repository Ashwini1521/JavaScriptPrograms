module.exports = {
    factor:(number) => {
         var n= number;
         var a=[];
         var count=0;
         
         for (i=2;i<=n;i++){
            while (n%i == 0){
                n=n/i;              
                    a[count++]=i;
                }
            }
            if (n==1){
                return a;
            }
            
         }
        
    }

