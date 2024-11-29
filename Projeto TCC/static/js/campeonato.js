console.log("Esta carregadoo"); // ""console log"" que eu utilizei apenas para saber se o script esta sendo carregado corretamente








// Configuração do Firebase (pega as configurações do Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyCdtH6pqQk8KDpu2VyBKjkxbWcV8myi6sk",
    authDomain: "teste-connectpro.firebaseapp.com",
    projectId: "teste-connectpro",
    storageBucket: "teste-connectpro.firebasestorage.app",
    messagingSenderId: "893673879400",
    appId: "1:893673879400:web:0a95a949b5fc246d3d08dd"
  };

// Inicializar o Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
















// ""domContentLoaded""" esta sendo utilizado para que o codigo so seja executado dps que DOM estiver
//carregado, assim evitando problemas de acesso a elementos que ainda nao existem no
//documento
document.addEventListener('DOMContentLoaded', function () {

    //selecionando todos os links "a" dentro de "navbarBottom"

    // ""querySelectorAll"" É uma lista (tipo array) de todos os elementos que correspondem ao seletor CSS fornecido.
    const links = document.querySelectorAll('.navbarBottom a');

    // A função forEach é usada para iterar sobre cada elemento da NodeList 'links'
    links.forEach(link => {

        //Este if verifica se o valor do href do link é igual ao nome da página atual.
        //Se o href do link corresponde ao caminho atual da URL, então esse link é o que representa a página na qual o usuário está.
        if (link.getAttribute('href') === window.location.pathname.split('/').pop()) {
            //Se o link corresponde ao caminho atual da URL, então o link deve ter a classe "active"
            link.classList.add('active');
        }
    });
});


function goToPageCurriculo() {
    
    location.href = 'curriculo.html';
}

function goToPageCampeonatos() {
    location.href = 'campeonatos.html';
}

function goToPageMensagens() {
    location.href = 'mensagens.html';
}

// função para o menu hamburguer

// nome da função
function toggleMenu() {
    // pegando tudo oq esta dentro de "MenuContent" e nomeando uma variavel como 'menu' 
    const menu = document.querySelector('.menuContent');
    // pegando tudo oq esta dentro de "content" e nomeando uma variavel como 'content' 
    const content = document.querySelector('.content');

    // utilizando uma estrutura chamada "operador ternário" para alternar a visibilidade de um elemento toda vez que ela é utilizada
    // esse "operador ternário" é uma forma de fazer a estrutura "if/else" de forma compacta.

    // aqui até antes do "?"  é a condição, e depois do "?" é o que acontece 
    // se a condição que esta antes do "?" for verdadeira, então o que está antes do ":" é executado
    // se a condição que esta antes do "?" for falsa, então o que está depois do ":" é executado
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

    // Alterna o desfoque no conteúdo
    content.classList.toggle('blur');
}

function toggleMenuReturn() {
    // pegando tudo oq esta dentro de "MenuContent" e nomeando uma variavel como 'menu' 
    const menu = document.querySelector('.menuContent');
    // pegando tudo oq esta dentro de "content" e nomeando uma variavel como 'content' 
    const content = document.querySelector('.content');

    // utilizando uma estrutura chamada "operador ternário" para alternar a visibilidade de um elemento toda vez que ela é utilizada
    // esse "operador ternário" é uma forma de fazer a estrutura "if/else" de forma compacta.

    // aqui até antes do "?"  é a condição, e depois do "?" é o que acontece 
    // se a condição que esta antes do "?" for verdadeira, então o que está antes do ":" é executado
    // se a condição que esta antes do "?" for falsa, então o que está depois do ":" é executado
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

    // Alterna o desfoque no conteúdo
    // content.classList.toggle('blur');
}





function toggleMenuButtonCurriculoDropdown() {
    // pegando tudo oq esta dentro de "MenuContent" e nomeando uma variavel como 'menu' 
    const menu = document.querySelector('.curriculoDropdownContent');

    // utilizando uma estrutura chamada "operador ternário" para alternar a visibilidade de um elemento toda vez que ela é utilizada
    // esse "operador ternário" é uma forma de fazer a estrutura "if/else" de forma compacta.
    
    // aqui até antes do "?"  é a condição, e depois do "?" é o que acontece 
    // se a condição que esta antes do "?" for verdadeira, então o que está antes do ":" é executado
    // se a condição que esta antes do "?" for falsa, então o que está depois do ":" é executado
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

}

function toggleMenuButtonEditarPerfilDropdown() {
    // pegando tudo oq esta dentro de "MenuContent" e nomeando uma variavel como 'menu' 
    const menu = document.querySelector('.editPerfilDropdownContent');

    // utilizando uma estrutura chamada "operador ternário" para alternar a visibilidade de um elemento toda vez que ela é utilizada
    // esse "operador ternário" é uma forma de fazer a estrutura "if/else" de forma compacta.
    
    // aqui até antes do "?"  é a condição, e depois do "?" é o que acontece 
    // se a condição que esta antes do "?" for verdadeira, então o que está antes do ":" é executado
    // se a condição que esta antes do "?" for falsa, então o que está depois do ":" é executado
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

}

function toggleMenuButtonSegurancaDropdown() {
    // pegando tudo oq esta dentro de "MenuContent" e nomeando uma variavel como 'menu' 
    const menu = document.querySelector('.segurancaDropdownContent');

    // utilizando uma estrutura chamada "operador ternário" para alternar a visibilidade de um elemento toda vez que ela é utilizada
    // esse "operador ternário" é uma forma de fazer a estrutura "if/else" de forma compacta.
    
    // aqui até antes do "?"  é a condição, e depois do "?" é o que acontece 
    // se a condição que esta antes do "?" for verdadeira, então o que está antes do ":" é executado
    // se a condição que esta antes do "?" for falsa, então o que está depois do ":" é executado
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

}

function toggleMenuButtonCentraDeAjudaDropdown() {
    // pegando tudo oq esta dentro de "MenuContent" e nomeando uma variavel como 'menu' 
    const menu = document.querySelector('.centralDeAjudaDropdownContent');

    // utilizando uma estrutura chamada "operador ternário" para alternar a visibilidade de um elemento toda vez que ela é utilizada
    // esse "operador ternário" é uma forma de fazer a estrutura "if/else" de forma compacta.
    
    // aqui até antes do "?"  é a condição, e depois do "?" é o que acontece 
    // se a condição que esta antes do "?" for verdadeira, então o que está antes do ":" é executado
    // se a condição que esta antes do "?" for falsa, então o que está depois do ":" é executado
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

}

function toggleMenuButtonPrinvacidadeDropdown() {
    // pegando tudo oq esta dentro de "MenuContent" e nomeando uma variavel como 'menu' 
    const menu = document.querySelector('.privacidadeDropdownContent');

    // utilizando uma estrutura chamada "operador ternário" para alternar a visibilidade de um elemento toda vez que ela é utilizada
    // esse "operador ternário" é uma forma de fazer a estrutura "if/else" de forma compacta.
    
    // aqui até antes do "?"  é a condição, e depois do "?" é o que acontece 
    // se a condição que esta antes do "?" for verdadeira, então o que está antes do ":" é executado
    // se a condição que esta antes do "?" for falsa, então o que está depois do ":" é executado
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

}

function toggleMenuButtonNotificacoesDropdown() {
    // pegando tudo oq esta dentro de "MenuContent" e nomeando uma variavel como 'menu' 
    const menu = document.querySelector('.notificacoesDropdownContent');

    // utilizando uma estrutura chamada "operador ternário" para alternar a visibilidade de um elemento toda vez que ela é utilizada
    // esse "operador ternário" é uma forma de fazer a estrutura "if/else" de forma compacta.
    
    // aqui até antes do "?"  é a condição, e depois do "?" é o que acontece 
    // se a condição que esta antes do "?" for verdadeira, então o que está antes do ":" é executado
    // se a condição que esta antes do "?" for falsa, então o que está depois do ":" é executado
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

}


// Abre o formulário
function openForm() {
    document.getElementById("formInscricao").style.display = "block";
}

// Fecha o formulário
function closeForm() {
    document.getElementById("formInscricao").style.display = "none";
}

// Abre o formulário
function openForm() {
    document.getElementById("formInscricao").style.display = "block";
}

// Fecha o formulário
function closeForm() {
    document.getElementById("formInscricao").style.display = "none";
}

// Função para enviar a inscrição e salvar as informações
function inscrever() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cidade = document.getElementById("cidade").value;

    // Validar os campos
    if (!nome || !idade || !cidade) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Obter as inscrições existentes ou criar uma nova lista
    let inscricoes = JSON.parse(localStorage.getItem('inscricoes')) || [];

    // Adicionar a nova inscrição
    inscricoes.push({ nome, idade, cidade, esporte: "Ginástica Artística" });

    // Salvar a lista atualizada no localStorage
    localStorage.setItem('inscricoes', JSON.stringify(inscricoes));

    alert('Inscrição realizada com sucesso!');
    closeForm(); // Fecha o formulário
}