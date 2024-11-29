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















function toggleOpenDados() {
    // pegando tudo oq esta dentro de "MenuContent" e nomeando uma variavel como 'menu' 
    const open01 = document.querySelector('.container-experienciaDados');
    // pegando tudo oq esta dentro de "content" e nomeando uma variavel como 'content' 
    // const content = document.querySelector('.content');

    // utilizando uma estrutura chamada "operador ternário" para alternar a visibilidade de um elemento toda vez que ela é utilizada
    // esse "operador ternário" é uma forma de fazer a estrutura "if/else" de forma compacta.

    // aqui até antes do "?"  é a condição, e depois do "?" é o que acontece 
    // se a condição que esta antes do "?" for verdadeira, então o que está antes do ":" é executado
    // se a condição que esta antes do "?" for falsa, então o que está depois do ":" é executado
    open01.style.display = open01.style.display === 'block' ? 'none' : 'block';

    // Alterna o desfoque no conteúdo
    // content.classList.toggle('blur');
}

function toggleOpenCurriculo() {
    // pegando tudo oq esta dentro de "MenuContent" e nomeando uma variavel como 'menu' 
    const open02 = document.querySelector('.container-experienciaCurriculo');
    // pegando tudo oq esta dentro de "content" e nomeando uma variavel como 'content' 
    // const content = document.querySelector('.content');

    // utilizando uma estrutura chamada "operador ternário" para alternar a visibilidade de um elemento toda vez que ela é utilizada
    // esse "operador ternário" é uma forma de fazer a estrutura "if/else" de forma compacta.

    // aqui até antes do "?"  é a condição, e depois do "?" é o que acontece 
    // se a condição que esta antes do "?" for verdadeira, então o que está antes do ":" é executado
    // se a condição que esta antes do "?" for falsa, então o que está depois do ":" é executado
    open02.style.display = open02.style.display === 'block' ? 'none' : 'block';

    // Alterna o desfoque no conteúdo
    // content.classList.toggle('blur');
}

function toggleOpenCentral() {
    // pegando tudo oq esta dentro de "MenuContent" e nomeando uma variavel como 'menu' 
    const open03 = document.querySelector('.container-experienciaCentral');
    // pegando tudo oq esta dentro de "content" e nomeando uma variavel como 'content' 
    // const content = document.querySelector('.content');

    // utilizando uma estrutura chamada "operador ternário" para alternar a visibilidade de um elemento toda vez que ela é utilizada
    // esse "operador ternário" é uma forma de fazer a estrutura "if/else" de forma compacta.

    // aqui até antes do "?"  é a condição, e depois do "?" é o que acontece 
    // se a condição que esta antes do "?" for verdadeira, então o que está antes do ":" é executado
    // se a condição que esta antes do "?" for falsa, então o que está depois do ":" é executado
    open03.style.display = open03.style.display === 'block' ? 'none' : 'block';

    // Alterna o desfoque no conteúdo
    // content.classList.toggle('blur');
}

function toggleOpenSeguranca() {
    // pegando tudo oq esta dentro de "MenuContent" e nomeando uma variavel como 'menu' 
    const open04 = document.querySelector('.container-experienciaSeguranca');
    // pegando tudo oq esta dentro de "content" e nomeando uma variavel como 'content' 
    // const content = document.querySelector('.content');

    // utilizando uma estrutura chamada "operador ternário" para alternar a visibilidade de um elemento toda vez que ela é utilizada
    // esse "operador ternário" é uma forma de fazer a estrutura "if/else" de forma compacta.

    // aqui até antes do "?"  é a condição, e depois do "?" é o que acontece 
    // se a condição que esta antes do "?" for verdadeira, então o que está antes do ":" é executado
    // se a condição que esta antes do "?" for falsa, então o que está depois do ":" é executado
    open04.style.display = open04.style.display === 'block' ? 'none' : 'block';

    // Alterna o desfoque no conteúdo
    // content.classList.toggle('blur');
}

function toggleOpenPrivacidade() {
    // pegando tudo oq esta dentro de "MenuContent" e nomeando uma variavel como 'menu' 
    const open05 = document.querySelector('.container-experienciaPrivacidade');
    // pegando tudo oq esta dentro de "content" e nomeando uma variavel como 'content' 
    // const content = document.querySelector('.content');

    // utilizando uma estrutura chamada "operador ternário" para alternar a visibilidade de um elemento toda vez que ela é utilizada
    // esse "operador ternário" é uma forma de fazer a estrutura "if/else" de forma compacta.

    // aqui até antes do "?"  é a condição, e depois do "?" é o que acontece 
    // se a condição que esta antes do "?" for verdadeira, então o que está antes do ":" é executado
    // se a condição que esta antes do "?" for falsa, então o que está depois do ":" é executado
    open05.style.display = open05.style.display === 'block' ? 'none' : 'block';

    // Alterna o desfoque no conteúdo
    // content.classList.toggle('blur');
}