let url = window.location.href;
let regexExp = new RegExp("www.americanas.com.br\/(.*)\/");
let page = regexExp.exec(url);

if(page){
    if(page[1] == "categoria"){
        console.log("Você está na página de categoria.");
    }
    if(page[1] == "produto"){
        console.log("Você está na página de produto.");
    }
}
else{
    console.log("Você está na página home.");
}