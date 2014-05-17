/* Using the JavaScript language, have the function SimpleAdding(num) 
add up all the numbers from 1 to num. 
For the test cases, the parameter num will be any number from 1 to 1000.  

Input = 12 Output = 78
Input = 140 Output = 9870 
* ====================== */  

 function SimpleAdding(num){
  var result = 0;
  for(var i = 0; i <= num; i ++){
    result = result + i;
  }
  return result;
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(12);           
