// Capturando os elementos h1 e a
let titulo = Desenvolvimento_Mod5.getElementById('titulo');
let link = Desenvolvimento_Mod5.querySelector('a');

// Adicionando conteúdo textual neles
titulo.innerText = 'Desenvolvimento_Mod5'
link.innerText = 'Proz Educação'

// Capturando os elementos ul e ol
let listaNaoOrdenada = Desenvolvimento_Mod5.querySelector('ul')
let listaOrdenada = Desenvolvimento_Mod5.querySelector('ol')

// Adicionando três itens simples na lista não ordenada
listaNaoOrdenada.innerHTML = `
  <li>HTML</li>
  <li>JavaScript</li>
  <li>CSS</li>
`
