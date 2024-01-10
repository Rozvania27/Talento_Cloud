const elementoH1 = document.createElement("div")
elementoH1.innerHTML = `
<h1>Bolsas & Acessórios</h1>
`
const titulo = document.querySelector("body")
titulo.appendChild(elementoH1)

const elementoVenda = document.createElement("div")
elementoVenda.id = "produtos"
elementoVenda.innerHTML = `
    <div>
        <img src="imagem_1.jpg" width="200px" height="200px">
        <h3>Bolsa Transveresal 2024</h3>
        <p>R$ 250,00</p>
        <button><a href="https://dafiti.com.br/Bolsa-Feminina-Transversal-de-Tampa-Kit-com-Carteira-e-Necessaire-13833468.html">Comprar</a></button>
    </div>
`
const produto = document.querySelector("body")
produto.appendChild(elementoVenda);









