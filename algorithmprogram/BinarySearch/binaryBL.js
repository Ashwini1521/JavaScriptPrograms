module.exports = {
    binarysearch: (string1, file) => {

        var str1 = file;
        var res = str1.split(" ");
        var result = res.sort();
        let first = 0, last = result.length - 1, key, value;
        key = string1;
        while (first <= last) {
            let mid = parseInt((first + last) / 2);
            let ans = key.localeCompare(result[mid]);
            if (ans == 0) {
                //console.log(result[mid]);
                value = 0;
                break;
            }
            else if (ans > 0) {
                first = mid + 1;
            } else {
                last = mid - 1;
            }
        }
        if (value == 0) {
            return "String is found"
        }
        else {
            return "String is not found"
        }
        //return -1;

    },

    filereading: () => {
        const fs = require('fs');
        var file = fs.readFileSync("Demo.txt", 'utf8');
        return file;
    }


}