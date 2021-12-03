/*

--------------------------------------------
*** Question ***

Write a function that detects if two strings are an anagram e.g. ‘bleat’ and ‘table’ are anagrams but ‘eat’ and ‘tar’ are not.

____________________________________________

"npm test" to test this script

*/

// This code should work in Node.js v16.13.0 LTS



function extractLetters(string) {
    let pos = 0;
    let letters =[];

    //checking if the character is alphabet or number
    for (let position = 0; position < string.length; position++) {
        if (
            (string[position] >= 'A' && string[position] <= 'Z')
            ||
            (string[position] >= 'a' && string[position] <= 'z')
            ||
            (string[position] >= '0' && string[position] <= '9')
        ) {
            letters[pos++] = string[position].toLowerCase();
        }

    }

    return letters;
}


function isAnagrams(string1, string2) {

    const letters1 = extractLetters(string1);
    const letters2 = extractLetters(string2);

    //comparing the letters of two strings
    if (JSON.stringify(letters1.sort()) == JSON.stringify(letters2.sort())) {
        return true;
    } else {
        return false;
    }

}

console.log(isAnagrams("bleat", "table"));
console.log(isAnagrams("eat", "tar"));


module.exports = isAnagrams;