module.exports = {
    binarysearch: (string1, file) => {
        var result = file.split(" ").sort()
        let first = 0, last = result.length - 1, key, value;
        key = string1;
        while (first <= last) {
            let middle = (first + last) / 2;
            let answer = key.localeCompare(result[middle]);
            if (answer == 0) {
                value = 0;
                break;
            }
            else if (answer > 0) {
                first = middle + 1;
            } else {
                last = middle - 1;
            }
        }
        if (value == 0) {
            return "String is found"
        }
        else {
            return "String is not found"
        }
    }

}