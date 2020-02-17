module.exports={
    checkharmonic:(num) => {
        console.log('Harmonic Number');
        console.log(num);
        let harmonic = 0.0;
        for (let i=1; i<= num; i++){
            harmonic = harmonic + (1+i);
        }
        return harmonic;
    }
}