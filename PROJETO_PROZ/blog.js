const arrayPostagens = [
    {
      nome: "Carlos Alberto",
      profissao: "Cozinheiro",
      data: "06/07/2022",
      texto: "Faz serviços em Restaurantes ou residencial tudo 100% vegano, pizzas, massas e muito mais. Vale muito a pena conhecer :)"
    },
    {
      nome: "Sonia Maria",
      profissao: "Diarista",
      data: "18/08/2022",
      texto: "Super competente. Super recomendo."
    },
    {
      nome: "Ana Marta",
      profissao: "Jardinagem",
      data: "30/08/2022",
      texto: "Meu jardim ficou maravilhoso depois que a Ana trabalhou nele. Trabalho com competencia, capricho e muita agilidade. Sabe tudo sobre jardim e plantas. Recomendo"
    },
  ]
  
  // inicia um loop que precorerá os elemento do arrayPostagens
  for (let i = 0; i < arrayPostagens.length;i++){
  
  // Criando o elemento
  const article = document.createElement('article');
  
  // Populando o elemento
  article.innerHTML =
  `<h3>${arrayPostagens[i].nome}</h3>
  <p id="profissao">${arrayPostagens[i].profissao}</p>
  <div id="data">${arrayPostagens[i].data}</div>
  <p>${arrayPostagens[i].texto}</p>`
  
  
  // Adicionando no DOM
  const main = document.querySelector('main');
  main.appendChild(article)
  }