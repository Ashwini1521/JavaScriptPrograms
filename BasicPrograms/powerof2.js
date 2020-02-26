module.exports = {
    powerof2: (number) => {
        let power = 1;
        let Invalid = 0;
        if (0 <= number && number < 31) {
            for (let i = 1; i <= number; i++) {
                power = power * 2;
            }
            return power;
        }
        else {
            return Invalid;
        }

    }
}

