function Palindrome(str){
    var isPalindrome = true, str = str.replace(/[^a-zA-Z ]+/g, '').replace(/\s+/g, ''), lenStr = str.length - 1;
    for(var i = 0; i < str.length; i ++){
        if( str.charAt(i) !== str.charAt(lenStr - i) ){
          isPalindrome = false;
        }
    }
 return isPalindrome;
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome("oro");           
