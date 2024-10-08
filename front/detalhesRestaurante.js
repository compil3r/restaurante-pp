document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const restauranteId = urlParams.get('id');

    if (restauranteId) {
        fetch(`http://localhost:3000/api/get/restaurante/${restauranteId}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const detalhesContainer = document.getElementById('detalhesContainer');
                    detalhesContainer.innerHTML = `
                        <img src="http://localhost:3000/uploads/${data.data.imagem}" alt="${data.data.nome}" style="width:100%">
                        <h2>${data.data.nome}</h2>
                        <p>Endereço: ${data.data.endereco}</p>
                        <p>Telefone: ${data.data.telefone}</p>
                    `;
                } else {
                    detalhesContainer.innerHTML = '<p>Detalhes do restaurante não encontrados!</p>';
                }
            });
    }
});
