let store =[
    {name: 'Foggy Blue Liquid Liner', price:19.97}
    {name: 'Charmed Poppy Powder Blush', price:15.97}
    {name: 'April Showers HI-Shine Plumping Lipgloss', price:17.97}
    {name: 'Deep Rose Satin Lip Stain', price:15.97}
]

let currentBalance = 60;
let shoppingcart =[];
let amountInStock = 4;

for (let i = 0; i < amountInStock; i++) 
{
    let product = store[s];
    if (currentBalance >= product.price) 
    {  console.log('Purchase of:'+ product.name + product.price + 'USD'+ "" + 'Completed');
    shoppingcart[s]= product.name;
    currentBalance = currentBalance - product.price;

        
    } else {
        console.log(" Insufficient Funds, Unable to Complete Purchase of:" + product.name + "" + product.price + 'USD');
        console.log ('Current Balance:' + currentBalance)
        }
    
}