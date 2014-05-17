/* 

Using the JavaScript language, have the function AlphabetSoup(str) 
take the str string parameter being passed and return the string with 
the letters in alphabetical order (ie. hello becomes ehllo). 

Assume numbers and punctuation symbols will not be included in the string.

Input = "coderbyte" Output = "bcdeeorty"
Input = "hooplah" Output = "ahhloop" 
* ====================== */

function AlphabetSoup(str) {
    var sWord = str.replace(/[^a-z]/gi, '');
    var aLetters = [];
    for (var i = 0; i < sWord.length; i++) {
        aLetters.push( sWord.charAt(i) );
    }
    return aLetters.sort().join("");
}
   
AlphabetSoup("coderbyte");           
