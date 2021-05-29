let shelves = window.dataLayer[3].payload_recommendation_load.shelves.shelves;
let productsIds = [];
let productsLength;

for(let i=0; i<shelves.length; i++){
    for(let j=0; j<shelves[i].products.length; j++){
        productsIds.push(shelves[i].products[j].id);
    }
}

console.log(productsIds.length); //Quantidade de itens
console.log(productsIds); //IDs dos produtos

// OBS: O datalayer do site às vezes não carrega direito, então caso encontre
// o erro "Cannot read property 'shelves' of undefined" recarregue a página.