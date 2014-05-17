/* Using the JavaScript language, have the function TimeConvert(num) 
take the num parameter being passed and return the number of hours and 
minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). 
Separate the number of hours and minutes with a colon.  

Input = 126 Output = "2:6"
Input = 45 Output = "0:45" 
 * ====================== */  

function TimeConvert(num){
    //las horas y minutos
    var minutes = parseInt( (num / 60), 10 ) * 60;
    return parseInt( (num / 60), 10 ) + ':' + (num - minutes) ;
}

TimeConvert(126);           
