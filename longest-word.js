/* Using the JavaScript language, have the function LongestWord(sen) 
take the sen parameter being passed and return the largest word in the string. 
If there are two or more words that are the same length, return the first word 
from the string with that length. Ignore punctuation and assume sen will not be empty.  

Input = "fun&!! time"Output = "time"
Input = "I love dogs"Output = "love" 
* ====================== */  

function LongestWord(sen){
  //separar parametro
  var s = sen.split(" ");
  var result = "";
  //comparar longitud de parametro
  for(var i = 0; i < s.length; i ++){
    if( s[i].length > result.length ){
      result = s[i];
    } 
  }
  //devolver el mayor 
  return result.toString();
}

LongestWord("fun&!! time");