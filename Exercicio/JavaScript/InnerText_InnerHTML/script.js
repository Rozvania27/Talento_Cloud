let elementoH1 = document.getElementById("titulo")
let elementoUl = document.querySelector("ul")
let elementoA = document.querySelector("a")
let elementoOl = document.getElementById("lista-ordenada")

console.log(elementoH1)
console.log(elementoUl)
console.log(elementoA)
console.log(elementoOl)

// Adicionando conteúdo textual neles
elementoH1.innerText = 'Bem vindo a Turma10'
elementoUl.innerText = "Site Proz Educação"

// Capturando os elementos h1 e a
let titulo = document.getElementById('titulo')
let link = document.querySelector('a')

//propriedade elementoA
link.innerText = 'Site da Proz Educação'

// Capturando os elementos ul e ol
let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = document.querySelector('ol')

// Adicionando três itens simples na lista não ordenada
elementoUl.innerHTML = `
<h3>Top os 3 melhores alunos do ano</h3>
<li>Vânia</li>
<li>Luis</li>
<li>Gabriel</li>
`
elementoOl.innerText = "Site Proz Educação"

// Adicionando três itens com links na lista ordenada
listaOrdenada.innerHTML = `
<li><a href="https://pages.prozeducacao.com.br/lp-proz-tecnologia-talento-cloud">Proz Educacao</a></li>
<li><a href="https://www.aws.com">AWS</a></li>
<li><a href="https://www.google.com">Google</a></li>`
