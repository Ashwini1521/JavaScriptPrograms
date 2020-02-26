module.exports = {
    getHarmonicNum: (num) => {
        var undefined = null;
        if (Math.floor(num) != num || num <= 0)
            return "undefined";
        let sum = 0.0;
        while (num > 0) {
            sum += 1 / num;
            num--;
        }
        return sum;
    }
}
