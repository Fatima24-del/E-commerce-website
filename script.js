
let cart=[];



function addCart(name,price){


cart.push({

name:name,

price:price

});


displayCart();


alert(name+" Added To Cart");


}




function displayCart(){


let cartBox=document.getElementById("cartItems");


let total=0;


cartBox.innerHTML="";



cart.forEach(item=>{


cartBox.innerHTML+=`

<div class="review-box">

<h3>${item.name}</h3>

<p>Price : ₹${item.price}</p>

</div>

`;



total+=item.price;


});



document.getElementById("total").innerHTML=

"Total Amount : ₹"+total;


}





function placeOrder(){


if(cart.length==0)

{

alert("Your cart is empty!");

}

else{


alert("🎉 Order Placed Successfully!");

cart=[];

displayCart();


}


}