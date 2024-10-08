async function fetchRestaurantes() {
    const response = await fetch('http://localhost:3000/api/get/restaurantes');
    const data = await response.json();

    if (data.success) {
        const restaurantesList = document.querySelector('.restaurantes-list');
        restaurantesList.innerHTML = ''; // Limpar qualquer conteúdo existente

        data.data.forEach(restaurante => {
            const restauranteCard = document.createElement('div');
            restauranteCard.classList.add('restaurante-card');

            const imgElement = document.createElement('img');
            imgElement.src = `http://localhost:3000/uploads/${restaurante.imagem}`;
            imgElement.alt = restaurante.nome;

            const infoDiv = document.createElement('div');
            infoDiv.classList.add('info');

            const nomeElement = document.createElement('h2');
            nomeElement.textContent = restaurante.nome;
            nomeElement.style.cursor = 'pointer';
            nomeElement.addEventListener('click', () => {
                window.location.href = `detalhes.html?id=${restaurante.id}`;
            });

            const enderecoElement = document.createElement('p');
            enderecoElement.textContent = `Endereço: ${restaurante.endereco}`;

            const telefoneElement = document.createElement('p');
            telefoneElement.textContent = `Telefone: ${restaurante.telefone}`;

            infoDiv.appendChild(nomeElement);
            infoDiv.appendChild(enderecoElement);
            infoDiv.appendChild(telefoneElement);
            restauranteCard.appendChild(imgElement);
            restauranteCard.appendChild(infoDiv);

            restaurantesList.appendChild(restauranteCard);
        });
    } else {
        console.error('Erro ao buscar restaurantes:', data.message);
    }
}


// Chame a função para buscar e exibir os restaurantes quando a página carregar
document.addEventListener('DOMContentLoaded', fetchRestaurantes);
