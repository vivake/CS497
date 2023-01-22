function btnToggle(divID){

   var x= document.getElementById(divID).innerHTML;

   if(x=="Dismiss"){
    document.getElementById(divID).innerHTML="Dismissed";
    document.getElementById(divID).style.backgroundColor="red";
   } 

   else{
    document.getElementById(divID).innerHTML="Dismiss";
    document.getElementById(divID).style.backgroundColor="gray";
   }

}

function inputReal(){
var input= document.getElementById("input").value;
document.getElementById("searchingFor").innerHTML=input;

}