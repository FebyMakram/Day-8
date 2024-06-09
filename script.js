var name=prompt("Enter your name");

var product=prompt("Enter the product");

var price=Number(prompt("Enter your price"));

var profitMargin= Math.round (price* 1.1) ;

var sellingPrice=Math.round(profitMargin* 1.05) ;

console.log(name);
console.log(product);
console.log(price);
console.log(sellingPrice);

document.getElementById("name").innerHTML="The Name is :" +name ;
document.getElementById("product").innerHTML="The product is :" + product ;
document.getElementById("price").innerHTML="The price before taxes :" + price ;
document.getElementById("taxes").innerHTML="The  Taxes =1.05 ";
document.getElementById("selling price").innerHTML="The selling price after taxes :" + sellingPrice ;


