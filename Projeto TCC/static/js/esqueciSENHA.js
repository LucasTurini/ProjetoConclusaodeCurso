document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulação do envio do currículo (aqui você pode adicionar a lógica de envio ao servidor)
    setTimeout(function() {
        document.getElementById('resumeForm').reset();
        document.getElementById('successMessage').classList.remove('hidden');
    }, 1000);
});


function goToPageLogin() {
    // Redireciona para a página de login
    window.location.href = "../templates/login.html"; // Substitua pelo caminho correto da página
}