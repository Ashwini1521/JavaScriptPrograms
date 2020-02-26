module.exports = {
    Leap: (year) => {
        if (year % 4 == 0) {
            return true;
        }
        else if (year % 400 == 0 && year % 100 != 0) {
            return true;
        }
        else {
            return false;
        }
    }
}