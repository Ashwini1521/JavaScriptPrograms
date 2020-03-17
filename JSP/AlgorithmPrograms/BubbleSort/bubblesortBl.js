function swap(array, first_index, second_index) {
    var temp = array[first_index];
    array[first_index] = array[second_index];
    array[second_index] = temp;
}
function BubbleSort(array) {
    var size = array.length, i, j, stop;
    for (i = 0; i < size; i++) {
        stop = size - i;
        for (j = 0;  j < stop; j++) {
            if(array[j]>array[j+1]){
                swap(array,j,j+1)
            }
        }
    }
    return array;
}
module.exports={
    swap,BubbleSort
}