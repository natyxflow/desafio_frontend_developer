


function validation() {
    if (document.getElementById('name').value.length<3) {
        alert("Por favor, informe o seu nome!");
        document.getElementById("name").focus();
        return false;
    }

    if (document.getElementById("email").value.length<9){
        alert("Por favor, informe um endereço de e-mail válido!");
        document.getElementById("email").focus();
        return false;
    }

    if (document.getElementById("cpf").value.length!=11){
        alert("Por favor, informe um CPF válido!");
        document.getElementById("cpf").focus();
        return false;
    }

    else {
        alert("Cadastro realizado com sucesso!")
    }
    return true;
}

function validations() {
    if (document.getElementById('friendname').value.length<3) {
        alert("Por favor, informe o nome do seu amigo!");
        document.getElementById("friendname").focus();
        return false;
    }

    if (document.getElementById("friendmail").value.length<9){
        alert("Por favor, informe um endereço de e-mail válido!");
        document.getElementById("friendmail").focus();
        return false;
    }

    else {
        alert("Convite realizado com sucesso!")
    }
    return true;
}

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