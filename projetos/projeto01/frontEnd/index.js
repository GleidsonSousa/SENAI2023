function GerarPedido(){
    let data = {}

    let body = {
        "cliente": document.querySelector("#cli").value,
        "endereco": document.querySelector("#end").value,
        "produto": document.querySelector("#pro").value
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body)
    if (body.cliente.length > 0 && body.endereco.length > 0) {
        fetch("http://localhost:4500/pedidos/create", options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 201) {
                    alert("Pedido enviado para cozinha com SUCESSO! 😀✔ ")
                    window.location.reload()
                } else {
                    alert("Erro ao enviar Pedido 🙁❌")
                }
            })
            .catch(err => alert("❌ Erro ao enviar dados. Erro:" + err));
    } else {
        alert("Preencha todos os campos obrigatórios ❗")
    }
}