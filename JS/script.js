


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

// function apiget(url) {
//     let request = new XMLHttpRequest()
//     request.open("GET", url, false)
//     request.send()
//     return request.responseText
// }

// function columcreate(product) {
//     colum = document.createElement("col");
//     image = document.createElement("row");
//     productname = document.createElement("row");
//     description = document.createElement("row");
//     oldprice = document.createElement("row");
//     price = document.createElement("row");
//     anotherprice = document.createElement("row");
//     image.innerHTML = product.image
//     productname.innerHTML = product.name
//     description.innerHTML = product.description
//     oldprice.innerHTML = product.oldPrice
//     price.innerHTML = product.price
//     anotherprice.innerHTML = product.count

//     colum.appendChild(image);
//     colum.appendChild(productname);
//     colum.appendChild(description);
//     colum.appendChild(oldprice);
//     colum.appendChild(price);
//     colum.appendChild(anotherprice);

//     return colum;
// }

// function main() {
//     let data = apiget('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
//     let products = JSON.parse(data);
//     let prodtable = document.getElementById('prodtable')
    
//     products.forEach(product => {
//         let colum = columcreate(product);
//         prodtable.appendChild(colum);
//     });
    
// }

// main();