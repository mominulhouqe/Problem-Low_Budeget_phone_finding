


const Productss =[
    {names: "Shoe", price: 1234},
    {names: "Shirt", price: 654},
    {names: "Monitor", price: 6734},
    {names: "Keyboard", price: 934},
];

function totalCost(Products){
    let totalAmount = 0;

    for(let i= 0; i < Products.length; i++){
        const index = Products[i];
        const element = Products[i];
        console.log( element.names," = ",index.price);
        totalAmount = totalAmount + index.price;
    }
    return totalAmount;
    
}

const Cost = totalCost(Productss);
console.log( "Total Cost is = " , Cost);