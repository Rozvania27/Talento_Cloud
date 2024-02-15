/*=====--- Galeria filtrável com Lightbox ---=====*/

const body = document.body;
const galleryTabs = document.querySelectorAll('.gallery_tabs li');
const galleryItems = document.querySelectorAll('.gallery_item');
const galleryImgs = document.querySelectorAll('.gallery_item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox_img');
const lightboxCloseBtn = document.querySelector('.lightbox_close');
const lightboxModalBtn = document.querySelector('.lightbox_modal');


/*==== 01) Funcionalidade de filtragem de galeria =====*/

galleryTabs.forEach((currTab) => {
    currTab.addEventListener('click', (e) => {

        // removendo a classe 'ativa' existente das guias.
        e.target.parentElement.querySelector('.active').classList.remove('active');

        // adicionando a classe 'ativa' à guia atualmente clicada.
        e.target.classList.add('active');


        let filterValue = e.target.getAttribute('data-filter');

        galleryItems.forEach((currItem) => {
            if (filterValue === 'all' || currItem.classList.contains(filterValue)) {
                currItem.classList.remove('hide');
                currItem.classList.add('show');
            }
            else {
                currItem.classList.remove('show');
                currItem.classList.add('hide');
            }
        });

    });
});



/*===== 02) Funcionalidade de caixa de luz Lightbox=====*/

galleryImgs.forEach((currImg) => {
    currImg.addEventListener('click', (e) => {

        let imgSrc = e.target.getAttribute('src');

        lightboxImg.setAttribute('src', imgSrc);

        lightbox.classList.add('open');
        body.classList.add('overflow_hide');

    });
});


// Função para fechar o Lightbox
const lightboxClose = () => {
    lightbox.classList.remove('open');
    body.classList.remove('overflow_hide');
};




// fechando a lightbox ao clicar no botão lightboxClose.
lightboxCloseBtn.addEventListener('click', lightboxClose);



// fechando a lightbox ao clicar fora dela.
window.addEventListener('click', (e) => {
    if (e.target.className === 'lightbox_wrapper') {
        lightboxClose();
    }
});


// fechando a janela ao pressionar a tecla Escape.
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightboxClose();
    }
}); 

function mostrarDetalhes(pessoa) {
    let detalhes = document.getElementById('detalhes');
    
    if (pessoa === 'drJonasMarcos') {
        detalhes.innerHTML = `
            <h2>Pet Shop e Clinica Veterinaria</h2>
            <p>Responsavel: Dr Jonas Marcos</p>
            <p>Endereco: Rua Antonina, 3029, Centro, Cascavel - PR</p>
            <p>Atendimento: De 2 a 6 feiras horario comercial e plantao pelo fone: 45-98888-8888</p>
        `;
    } else if (pessoa === 'construcaoJoseCarlos') {
        detalhes.innerHTML = `
            <h2>Construtora Novo Horizonte</h2>
            <p>Responsavel: Jose Carlos</p>
            <p>Endereco: Av. 25 de Maio, Jardim Sao Cristovao, Jundiai - SP</p>
            <p>Atendinento: Via Site</p>
        `;
    } else if (pessoa === 'eletricistaSilvanoSantos') {
        detalhes.innerHTML = `
            <h2>Casa Eletrica</h2>
            <p>Responsavel: Silvanos CArlos</p>
            <p>Endereco: Rua Sampaio Correia, 320, Alto Alegre, Rio de Janeiro - RJ </p>
            <p>Atendimento: Via Site ou no endereco</p>
        `;
    }
    
    detalhes.style.display = 'block';
}

// Obtenha o modal
var modal = document.getElementById("myModal");

// Obtenha o botão que abre o modal
var btn = document.getElementById("myBtn");

// Obtenha o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abra o modal
btn.onclick = function()  {
  modal.style.display = "block";
}

// Quando o usuário clicar em <span> (x), feche o modal


span.onclick = function() {
  modal.style.display = "none";
}

//Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}