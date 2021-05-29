let url = window.location.href;
let regexExp = new RegExp("www.americanas.com.br\/(.*)\/");
let page = regexExp.exec(url);
let step;
let shelves;
let productsIds = [];

if(window.dataLayer[3].payload_recommendation_load?.shelves?.shelves){
    shelves = window.dataLayer[3].payload_recommendation_load.shelves.shelves;

    for(let i=0; i<shelves.length; i++){
        for(let j=0; j<shelves[i].products.length; j++){
            productsIds.push(shelves[i].products[j].id);
        }
    }
}

if(page){
    if(page[1] == "categoria"){
        step = page[1];
    }
    if(page[1] == "produto"){
        step = page[1];
    }
}
else{
    step = "home";
}

console.log("etapa atual: "+step);
if(shelves){
    console.log("Ids listados: "+productsIds);
}

// OBS: O datalayer do site às vezes não carrega direito, então caso encontre
// o erro "Cannot read property 'shelves' of undefined" recarregue a página.