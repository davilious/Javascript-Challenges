/* 
Using the JavaScript language, have the function FirstReverse(str) 
take the str parameter being passed and return the string in reversed order.
Use the Parameter Testing feature in the box below to test your code with 
different arguments.  
Input = "coderbyte" Output = "etybredoc"
Input = "I Love Code" Output = "edoC evoL I" 
* ====================== */  

function FirstReverse(str) { 

  var lenString = str.length, 
      reverse = "";
  
  for(var i = lenString - 1; i >= 0; i --){
    reverse += str.charAt( i ); 
  }
  return reverse;         
}

FirstFactorial("coderbyte");