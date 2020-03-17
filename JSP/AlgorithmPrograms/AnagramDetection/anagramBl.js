module.exports = {
    anagram: (string1, string2) => {
        if (string1.split('').sort().join('') === string2.split('').sort().join('')) {
            console.log("the above strings are anagram.");
        }
        else {
            console.log("the above strings are not anagrams.")
        }
    }
}