/* Using the JavaScript language, have the function LetterCapitalize(str) 
take the str parameter being passed and capitalize the first letter of each word. 
Words will be separated by only one space. 

Input = "hello world" Output = "Hello World"
Input = "i ran there" Output = "I Ran There"

 * ====================== */ 

 function LetterCapitalize(str){
    var aWord = str.split(" ");
    var aWordCapitalize = aWord.map(function(element){
      return element.charAt(0).toUpperCase() + element.slice(1);
    });
    return aWordCapitalize.join(" ");
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize("hello world");   