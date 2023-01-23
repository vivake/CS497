let requestURL = "https://fakestoreapi.com/products?limit=10"
fetch(requestURL)
.then((res)=>{ 
    return res.json()})
.then((data)=>{
    return populateList(data);
});

let productData = document.getElementById("productList");

function populateList(productList){

    let stringProduct = '';

    productList.map((product)=>{

        stringProduct += 
            `<div class="col-md-7">
                <h2>${product.title}</h2>
                <div>$${product.price}</div>
                <p>${product.description}</p>
                <div>${product.category}</div>
                <div class="my-3">
                    <button id="${product.id}" onclick= btnToggle("${product.id}")>Dismiss</button>
                </div>
            </div>
                <div class="col-md-5">
                    <img src=${product.image} width="250" height="250">
                </div>
                <hr />
                <br>`
    })

    productData.innerHTML = stringProduct

}

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

 function searchResults(){
    fetch(requestURL)
    .then((res)=>{ 
        return res.json()})
    .then((data)=>{        
        return populateList(data.filter((product)=>product.title.includes(document.getElementById("input").value)));
        
    });
  
}
