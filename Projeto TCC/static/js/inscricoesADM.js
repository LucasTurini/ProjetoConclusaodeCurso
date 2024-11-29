// Carregar e exibir as inscrições salvas
function carregarInscricoes() {
    const participantes = JSON.parse(localStorage.getItem('inscricoes')) || [];
    const participantsList = document.getElementById('participantsList');

    // Limpa a lista de participantes antes de adicionar novamente
    participantsList.innerHTML = '';

    if (participantes.length === 0) {
        participantsList.innerHTML = "<p>Nenhum participante inscrito.</p>";
    } else {
        participantes.forEach(participante => {
            const participantDiv = document.createElement('div');
            participantDiv.classList.add('participant');
            
            participantDiv.innerHTML = `
                <img src="https://via.placeholder.com/50" alt="Foto do participante">
                <div>
                    <p><strong>${participante.nome}</strong></p>
                    <p>Idade: ${participante.idade}</p>
                    <p>${participante.esporte} - ${participante.cidade}</p>
                </div>
            `;
            
            participantsList.appendChild(participantDiv);
        });
    }
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', carregarInscricoes);