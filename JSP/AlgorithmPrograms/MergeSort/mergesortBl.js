module.exports = {
    Sort: (array) => {
        if (array.length < 2)
            return array;
        let mid = Math.floor(array.length / 2);
        let left = array.slice(0, mid);
        let right = array.slice(mid, array.length);
        return module.exports.MergeSort(module.exports.Sort(left), module.exports.Sort(right));
    },
    MergeSort: (left, right) => {
        var i = 0;
        var j = 0;
        var result = [];
        while (i < left.length || j < right.length) {
            if (i === left.length) {
                result.push(right[j]);
                j++;
            }
            else if (j === right || left[i] < right[j]) {
                result.push(left[i]);
                i++;
            }
            else {
                result.push(right[j]);
                j++;
            }
        }
        return result;
    }
}