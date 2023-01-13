// https://www.w3schools.com/js/js_function_definition.asp

function handleClickNumber(){
   let x =document.getElementById("input").value;
   document.getElementById("btn1").innerHTML=x;
}

function handleCheckWeather(){
    let weather=document.getElementById("temp").value;
    if(weather<32){
        document.getElementById("btn2").innerText="Freezing Weather!";
    } else if (weather<= 41){
        document.getElementById("btn2").innerText="Very Cold Weather!";
    } else if (weather<= 51){
        document.getElementById("btn2").innerText="Cold Weather!";
    } else if (weather<= 61){
        document.getElementById("btn2").innerText="It's Nice Today!";
    } else{
        document.getElementById("btn2").innerText="It's Warm Today!";
    }
    



}



