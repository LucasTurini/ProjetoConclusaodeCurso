console.log("Esta carregadoo"); // ""console log"" que eu utilizei apenas para saber se o script esta sendo carregado corretamente


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
    
    location.href = '../templates/inscricoesADM.html';
}

function goToPageCampeonatos() {
    location.href = '../templates/campeonatoADM.html';
}

function goToPageMensagens() {
    location.href = '../templates/mensagens.html';
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
    // const content = document.querySelector('.content');

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

function mostrarContainer() {
    document.getElementById('container').style.display = "block"; // Mostra o container
    document.getElementById('blur-background').style.display = "block"; // Mostra o desfoque no fundo
}

function fecharContainer() {
    document.getElementById('container').style.display = "none"; // Esconde o container
    document.getElementById('blur-background').style.display = "none"; // Remove o desfoque do fundo
}


 // Seleciona o botão de logout
 const logoutButton = document.getElementById('logoutButton');

 // Adiciona o evento de clique para deslogar
 logoutButton.addEventListener('click', function() {
     // Exemplo de ação de deslogar:
     // 1. Remover o token de autenticação do localStorage ou sessionStorage
     localStorage.removeItem('authToken'); // ou sessionStorage.removeItem('authToken');
     
     // 2. Redirecionar para a página de login (ajuste o caminho conforme necessário)
     window.location.href = '../templates/login.html';
 });