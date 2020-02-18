/**
* @module bubbleSort
*/
module.exports = {
    /**
    * valdate the lenght of array and call the bubbleSort()
    * @param {String Array} list - Original unsorted Array
    * @return {String Array} list -sorted Array
    */
    bubblesort: (a) => {
        let swap;
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < a.length; j++) {
                if (a[i] < a[j]) {
                    swap = a[i];
                    a[i] = a[j];
                    a[j] = swap;
                }
            }
        }
        return a;
    }
}