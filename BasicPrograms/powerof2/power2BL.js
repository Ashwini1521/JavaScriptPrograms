module.exports = {
    power2:(number) => {
        let power=1;
        if ( 0 <= number && number < 31 ) {
            for ( i=1; i<=number; i++ ) {
                power=power*2;
                console.log("2^" +i+" "+power);

            }
        }
        else{
            console.log("Inavalid input");
        }

    }
}


