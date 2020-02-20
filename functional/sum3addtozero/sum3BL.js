module.exports = {
    //Find And Print distinct triples which sum = 0.
    
    findTriples: (arr) => {
        let len = arr.length;
        let flag = false;
        for (let i = 0; i < len - 2; i++) {
            for (let j = i + 1; j < len - 1; j++) {
                for (let k = j + 1; k < len; k++) {
                    if (arr[i] + arr[j] + arr[k] == 0) {
                        console.log(`${arr[i]} , ${arr[j]} , ${arr[k]}`);
                        flag = true;
                    }
                }
            }
        }
        if (!flag)
            console.log('Three Element sum as ZERO Not Exist.');
    }
}