/* Using the JavaScript language, 
have the function FirstFactorial(num) 
take the num parameter being passed and 
return the factorial of it 
(ie. if num = 4, return (4 * 3 * 2 * 1)). 

For the test cases, the range will be between 1 and 18.


Input = 4Output = 24
Input = 8Output = 40320 
* ====================== */  

function FirstFactorial(num) { 
  var result = 1;
  for(var i= 0; i < num; i ++){
    result +=result * i;
  } 
  return result ; 
         
}
FirstFactorial(18);