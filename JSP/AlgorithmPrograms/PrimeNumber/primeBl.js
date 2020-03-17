module.exports = {
    Primes: (min, max) => {
        let prime = [];
        for (let i = min; i <= max; i++) {
            if (isprime(i)) {
                prime.push(i);
            }
        }
        return prime;
    }
}
isprime = (i) => {
    let j = 2;
    while (j <= i / 2) {
        if (i % j == 0) {
            return false;
        }
        j++;
    }
    return true;

}
