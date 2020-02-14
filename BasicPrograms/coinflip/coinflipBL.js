module.exports= {
    flip:(number) => {
        var head=0;
        var tail=0;

        for(i=1; i<=number; i++){
            let check = Math.random();
            if(check < 0.5){
                head++;
            }
            else{
                tail++;
            }
            

        }
        headpercent=((head*100)/number);
            tailpercent=((tail*100)/number);
        return {headpercent : headpercent, 
                tailpercent : tailpercent};


    }
}

