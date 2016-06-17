I created this Calculator to practice JavaScript functionality...and make basic arithmetic calculations as need be.  
Below is a snippet of the HTML to briefly demonstrate its simplicity.

<div class='box'>
      <div class='display'><input type='text' readonly size='20' id='d'></div>
        <div class="keys">
          <p>

          </p>
          <p>
          <input type='button' class='button grey' value='7' onCLick='v("7")'>
          <input type='button' class='button grey' value='8' onClick='v("8")'>
          <input type='button' class='button grey' value='9' onClick='v("9")'>
          <input type='button' class='button black' value='*' onClick='v("*")'>

Below is one of the JavaScript functions used to receive user input, perform the appropriate operation and display the output. 

function c(val)
{
document.getElementById("d").value=val;
}

This project was written as a practice exercise to more fully understand JavaScript functionality. 


