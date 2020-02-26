module.exports = {
    getHarmonicNum: (num) => {
        if (Math.floor(num) != num || num <= 0)
            return "undefiend";
        let sum = 0.0;
        while (num > 0) {
            sum += 1 / num;
            num--;
        }
        return sum;
    }
}
