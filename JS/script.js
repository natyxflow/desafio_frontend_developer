


function validation() {
    if (document.getElementById('fname').value.length<3) {
        alert("Por favor, informe o seu nome!");
        document.getElementById("fname").focus();
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



async function getProducts() {
    const response = await fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')

    return response.json()
}


getProducts().then(data => {
    const result = data.products
    const prod = []

    for (let p of result) {
        prod.push({
            "id": p.id,
            "name": p.name,
            "image": p.image,
            "oldPrice": p.oldPrice,
            "price": p.price,
            "description": p.description,
            "installments": p.installments
        })

        let name = prod.name;
        console.log(name)
    }
    
    
    

})

// var paragrafo = document.querySelector(".product_name");
//     console.log(paragrafo);

//     paragrafo.textContent = prod.name

//     console.log(prod)


// const prod = (showData) => {
//     for(const eprod in showData) {
//         console.log(eprod)
//     }
// }


// const showData = (result) => {
//     for(const edata in result) {
//         console.log(edata)
        
//     }
    
// }


// const options = {
//     method: 'GET',
//     mode: 'cors',
//     cache: 'default'
// }

// fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1', options)
// .then(response => {response.json()
//     .then(data => prod(data["products"]))
// })
// .catch(e => console.log('Erro: ' + e, message))


