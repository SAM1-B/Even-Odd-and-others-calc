


// TO CHECK IF A NUMBER IS ODD OR EVEN
function show(){

    if (getNumber.value=="") {
        document.getElementById("display").innerHTML="Enter a digit";
    }

   else if (getNumber.value%2== " ") {
   document.getElementById("display").innerHTML="EVEN";
   
   }
   else{
    document.getElementById("display").innerHTML="ODD";
}
getNumber.value="";
}


// TO CHECK NUBER DIVISIBLE BY 5, 3 AND NUMBER DIVISIBLE BY 5&3

function check3(){

    if (getNumber2.value=="") {
        document.getElementById("display").innerHTML="Enter a digit";
    }
    else if (getNumber2.value%3 == " " && getNumber2.value%5 == " " ) {
        document.getElementById("display").innerHTML="FIZZBUZZ";
        }
    else if (getNumber2.value%3== " ") {
    document.getElementById("display").innerHTML="FIZZ";
    }
    else if (getNumber2.value%5== " ") {
    document.getElementById("display").innerHTML="BUZZ";
    }
    
    else{
    document.getElementById("display").innerHTML="I DON'T KNOW";
   }
   getNumber.value=""; 
  }


//   TO PLAY AUDIOS