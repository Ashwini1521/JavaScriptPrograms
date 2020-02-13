module.exports = {
    checkanagram: (String1, String2) => {
        console.log("String1:" + String1);
        console.log("String2:" + String2);
        return String1.split("").sort().join("") === String2.split("").sort().join("");   
    
    }


}
