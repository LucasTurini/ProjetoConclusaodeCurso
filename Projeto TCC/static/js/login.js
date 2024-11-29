














function goToPageVagas() {
    
    location.href = 'vagas.html';
}

function goToPageCadastro() {
    location.href = 'cadastro.html';
}

function goToPageRedefinePassword() {
    location.href = 'redefinePassword.html';
}

// Estado inicial do botão "CLIENTE/ADMINISTRADOR"
let isClient = true;

// Função para alternar o texto do botão e atualizar o comportamento do botão de login
function toggleButton() {
    const toggleButton = document.getElementById("toggleButton");
    const loginButton = document.querySelector(".btnLogin");

    // Alternar entre CLIENTE e ADMINISTRADOR
    if (isClient) {
        toggleButton.textContent = "ADMINISTRADOR";
        loginButton.onclick = goToPageAdmin; // Mudar a função de destino
    } else {
        toggleButton.textContent = "CLIENTE";
        loginButton.onclick = goToPageClient; // Mudar a função de destino
    }

    // Inverter o estado
    isClient = !isClient;
}

// Funções de redirecionamento para diferentes destinos
function goToPageClient() {
    window.location.href = "vagas.html"; // Substitua pelo destino para clientes
}

function goToPageAdmin() {
    window.location.href = "vagasADM.html"; // Substitua pelo destino para administradores
}

// Funções adicionais para outros botões
function goToPageCadastro() {
    window.location.href = "cadastro.html";
}

function goToPageRedefinePassword() {
    window.location.href = "esqueciSENHA.html";
}

// Inicializar o texto do botão "CLIENTE/ADMINISTRADOR" no carregamento da página
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton");
    toggleButton.textContent = "CLIENTE"; // Texto inicial
});

















// Registrar usuário
function registerUser() {
    const name = document.querySelector("#registerName").value;
    const email = document.querySelector("#registerEmail").value;
    const password = document.querySelector("#registerPassword").value;
    const isAdmin = document.querySelector("#registerIsAdmin").checked; // Checkbox para marcar admin
  
    fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, is_admin: isAdmin }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message); // Sucesso
        } else {
          alert(data.error); // Erro
        }
      })
      .catch((error) => console.error("Erro:", error));
  }
  
  // Fazer login
  function loginUser() {
    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;
    const isAdmin = document.querySelector("#loginIsAdmin").checked; // Checkbox para admin
  
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, is_admin: isAdmin }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message); // Login bem-sucedido
        } else {
          alert(data.error); // Credenciais inválidas
        }
      })
      .catch((error) => console.error("Erro:", error));
  }
  