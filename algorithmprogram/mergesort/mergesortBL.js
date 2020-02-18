/**
* @module MergeSort
*/
module.exports = {
    /**
    * valdate the lenght of array and call the mergeSort()
    * @param {String Array} list - Original unsorted Array
    * @return {String Array} list -sorted Array
    */
    sortList: (list) => {
    if (list.length <= 1) {
    return list;
    }
    else {
    list = mergeSort(list);
    return list;
    }
    }
    }
    /**
    * recursive function to divide the array
    * @param {String Array} strlist - unsorted Array
    * @return {String Array} -sorted Array
    */
    function mergeSort(strlist) {
    if (strlist.length <= 1) {
    return strlist;
    }
    const mid = Math.floor(strlist.length / 2);
    const leftList = strlist.slice(0, mid);
    const rightList = strlist.slice(mid, strlist.length);

    const leftSortedList = mergeSort(leftList);
    const rightSortedList = mergeSort(rightList);
    return merge(leftSortedList, rightSortedList);
    }

    /**
    * merge two sorted array in sorted format
    * @param {String Array} leftList - sorted Array
    * @param {String Array} rightList - sorted Array
    * @return {String Array} - merged sorted Array
    */
    function merge(leftList, rightList) {
    let sortedArray = [];

    while (leftList.length && rightList.length) {
    let minimumElement = null;

    if (leftList[0] < rightList[0]) {
    minimumElement = leftList.shift();
    } else {
    minimumElement = rightList.shift();
    }
    sortedArray.push(minimumElement);
    }

    while (leftList.length > 0) {
    sortedArray.push(leftList.shift());
    }

    if (rightList.length > 0) {
    sortedArray.push(rightList.shift());
    }
    return sortedArray;
    }
