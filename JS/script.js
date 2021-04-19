


function callApi(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

window.onload = function (produto) {
 
    var image = innerHTML(produto.image);
    var productname = innerHTML(produto.name);
    var price = innerHTML(produto.oldPrice);
    var productprice = innerHTML(produto.price);
    var otherprice = innerHTML(produto.count);
    var description = innerHTML(produto.description);


    document.getElementById("ftext").innerHTML = price;
    
}

function fill() {
    let data = callApi("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1");
    let produtos = JSON.parse(data);
    let box = document.getElementById("products_item");
    produtos.forEach(element => {
        let card = createCard(element);
        box.appendChild(card);
    });
}



// window.onload = function () {
//     let naty = "Nataly";
//     document.getElementById("ftext")
//     .innerHTML = naty;
// }

// card = document.createElement("div");
// image = document.createElement("img");
// productname = document.createElement("p");
// price = document.createElement("p");
// productprice = document.createElement("p");
// otherprice = document.createElement("p");
// description = document.createElement("p");


// card.appendChild("image");
//     card.appendChild("productname");
//     card.appendChild("price");
//     card.appendChild("productprice");
//     card.appendChild("otherprice");
//     card.appendChild("description");
    
//     return card;

// var image = innerHTML(produto.image);
//     productname.innerHTML = produto.name;
//     price.innerHTML = produto.oldPrice;
//     productprice.innerHTML = produto.price;
//     otherprice.innerHTML = produto.count;
//     description = produto.description;