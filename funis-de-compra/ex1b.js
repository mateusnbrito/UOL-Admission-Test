let products = window.dataLayer[4].ecommerce.checkout.products;
let selectedProductsIds = [];
let checkoutPrice = window.dataLayer[4].valorSacola;

for(let i=0; i<products.length; i++){
    selectedProductsIds.push(products[i].id);
}

console.log(selectedProductsIds); //IDs dos produtos selecionados
console.log(checkoutPrice); //Valor do carrinho