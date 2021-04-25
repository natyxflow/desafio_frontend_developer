
const containerProducts = document.getElementsByClassName('products')[0];

let currentPage = 1;

const infinitePage = document.getElementById('allcardsbtn');

infinitePage.addEventListener('click', function()
                                  {
    currentPage++;
    getProducts();
})

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



async function Products() {
    const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${currentPage}`)

    return response.json()
}

function getProducts()
{
Products().then(data => {
    const result = data.products
  

    for (let p of result) {
        containerProducts.appendChild(buildComponentProduct(p))
    }
          
})
}

function buildComponentProduct(product) {
    if(!product) return udefined;
    
    const container = document.createElement("div");
    container.className = 'products_item';
    
    const productsPicture = document.createElement("img");
    productsPicture.className = 'products_picture';
    productsPicture.setAttribute('src', `https:${product.image}`);
    
    const productsText = document.createElement("div");
    productsText.className = 'products_text';  
    
    const productName = document.createElement("p");
    productName.className = 'product_name';
    productName.id = 'name';
    productName.innerText = product.name;
    
    const description = document.createElement("p");
    description.className = 'description';
    description.id = 'description';
    description.innerText = product.description;
    
    const price = document.createElement("p");
    price.className = 'price';
    price.id = 'oldPrice';
    price.innerText = `De: ${moeda(product.oldPrice)}`;
    
    const productPrice = document.createElement("p");
    productPrice.className = 'product_price';
    productPrice.id = 'price';
    productPrice.innerText = `Por: ${moeda(product.price)}`;
    
    const installments = document.createElement("p");
    installments.className = 'installments';
    installments.innerText = `ou ${product.installments.count}x de ${moeda(product.installments.value)}`;
    
    const btn = document.createElement("button");
    btn.className = 'btn_comprar';
    btn.innerText = 'Comprar';
    btn.addEventListener('click', function(){
      console.log(product.id);
    })
    
    productsText.appendChild(productName);
    productsText.appendChild(description);
    productsText.appendChild(price);
    productsText.appendChild(productPrice);
    productsText.appendChild(installments);
    
    container.appendChild(productsPicture);
    container.appendChild(productsText);
    container.appendChild(btn);
    
    return container;  
  }

  function moeda(valor)
{
    return `R$ ${parseFloat(valor).toFixed(2).toString().replace('.', ',')}`
}



getProducts();