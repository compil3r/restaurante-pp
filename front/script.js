document.getElementById("enviar").onclick = async function(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do botão

    let form = document.getElementById("restauranteForm");
    let formData = new FormData(form);

    const response = await fetch('http://localhost:3000/api/store/restaurante', {
        method: "POST",
        body: formData
    });

    let content = await response.json();
    
    if(content.success) {
        alert("Sucesso!");
    } else {
        alert("Não foi criado!");
        console.log(content.sql);
    }
}
