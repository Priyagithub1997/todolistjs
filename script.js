var userinput=document.getElementById("userinput");
var btn=document.getElementById("btn");
var list=document.getElementById("list");

btn.addEventListener("click",function(){

   var task=userinput.value;
   var li=document.createElement("li");
  
   li.textContent=task;
  
  list.appendChild(li);
 


});










