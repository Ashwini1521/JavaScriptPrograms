module.exports={
    Binary:(array,String) => {
        var high = array.length-1;
        var mid = 0;
        var low = 0;
        while (low <= high){
            mid = parseInt((high + low)/2);
            if (array[mid] === String) {
                return true;
            } 
            else if(String > array[mid]){
                low = mid +1;
            } 
            else {
                high = mid - 1;
            }
        }
        return false;
    }                                                                                                                                                                                                                                                                  
    }
    