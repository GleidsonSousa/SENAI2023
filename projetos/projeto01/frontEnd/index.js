const url = 'http://localhost:4500/pedidos/read';

let ped = [];

const divPedidos = document.querySelector('#eaC');


function onLoad() {
    const options = { method: 'GET' };

    fetch(url, options)
        .then(res => res.json())
        .then(res => {
            ped = res;
            preencher();
        }
        )
        .catch(err => console.error(err));
}

function preencher() {

    ped.forEach(p => {

        var novoCardPedido = divPedidos.cloneNode(true)
        novoCardPedido.classList.remove('model')

        

        // ESTA A CAMINHO
        console.log(p.hora_entrega)

        if (p.hora_entrega == "00:00:00") {
            console.log(p.hora_entrega)


            novoCardPedido.querySelector('#idPed').innerHTML = p.id_pedido
            novoCardPedido.querySelector('#nCli').innerHTML = p.cliente
            novoCardPedido.querySelector('#prod').innerHTML = p.produto
            novoCardPedido.querySelector('#end').innerHTML = p.endereco
            novoCardPedido.querySelector('#date').innerHTML = p.data
            novoCardPedido.querySelector('#hip').innerHTML = p.hora_pedido
            document.querySelector('.pedidosem').appendChild(novoCardPedido)
        }

        // if (p.hora_entrega == "") {

        //     novoCardPedido.querySelector('.idPedido').innerHTML = p.id_pedido
        //     novoCardPedido.querySelector('.nome_cliente').innerHTML = p.cliente
        //     novoCardPedido.querySelector('.hora_pedido').innerHTML = p.hora_pedido
        //     novoCardPedido.querySelector('.endereco').innerHTML = p.endereco
        //     novoCardPedido.querySelector('.cidade').innerHTML += p.cidade
        //     novoCardPedido.querySelector('.bairro').innerHTML = p.bairro
        //     novoCardPedido.querySelector('.produto').innerHTML = p.produto
        //     novoCardPedido.querySelector('.preco_total').innerHTML = "R$ " + p.preco
        //     novoCardPedido.querySelector('.qtd').innerHTML = p.quantidade + " u - "
        //     document.querySelector('.andamento').appendChild(novoCardPedido)
        // }


    })
}


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