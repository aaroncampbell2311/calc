function c(val)
{
document.getElementById("d").value=val;
}
//'d' is the display screen
function v(val)
{
document.getElementById("d").value+=val;
}

function e() 
{ 
try 
{ 
  c(eval(document.getElementById("d").value)) 
} 

catch(e) 
{
  c('Error') 
} 
}  

//use null value from lecture to clear calculater