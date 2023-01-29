const url = 'http://localhost:4500/pedidos/read';

let ped = [];

const divPedidos = document.querySelector('#eaC');
const divPedidos2 = document.querySelector('#eaB');



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

        var novoCardPedido2 = divPedidos2.cloneNode(true)
        novoCardPedido2.classList.remove('model')

        

        // ESTA A CAMINHO

        if (p.hora_entrega == "00:00:00" ) {


            novoCardPedido.querySelector('#idPed').innerHTML = p.id_pedido
            novoCardPedido.querySelector('#nCli').innerHTML = p.cliente
            novoCardPedido.querySelector('#prod').innerHTML = p.produto
            novoCardPedido.querySelector('#end').innerHTML = p.endereco
            novoCardPedido.querySelector('#date').innerHTML = p.data
            novoCardPedido.querySelector('#hip').innerHTML = p.hora_pedido
            novoCardPedido.querySelector("#btnCancelar").addEventListener("click", () => { remover(p.id_pedido, novoCardPedido); })
            novoCardPedido.querySelector("#btnEnvia").addEventListener("click", () => { updateEntrega(p.id_pedido); })
            document.querySelector('.pedidosem').appendChild(novoCardPedido)
        }

        if (p.hora_fim == "00:00:00" && p.hora_entrega != "00:00:00") {

            console.log(p.hora_entrega)


            novoCardPedido2.querySelector('#idPed').innerHTML = p.id_pedido
            novoCardPedido2.querySelector('#nCli').innerHTML = p.cliente
            novoCardPedido2.querySelector('#prod').innerHTML = p.produto
            novoCardPedido2.querySelector('#end').innerHTML = p.endereco
            novoCardPedido2.querySelector('#date').innerHTML = p.data
            novoCardPedido2.querySelector('#hip').innerHTML = p.hora_pedido
            novoCardPedido2.querySelector('#h').innerHTML = p.hora_entrega
            novoCardPedido2.querySelector("#btnEnvia").addEventListener("click", () => { updateEntregue(p.id_pedido); })

            document.querySelector('.pedidosca').appendChild(novoCardPedido2)
        }


    })
}
 function updateEntregue(id){
    const body = {
        "id_pedido":id
    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    };
    options.body = JSON.stringify(body);
    fetch("http://localhost:4500/pedidos/update-finalizado", options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 200) {

                alert(" Entregue com Sucesso 😀 ✔")
                window.location.reload()


            } else {
                alert("Erro ao Entregar pedido 🙁❌: " + resp)
            }
        })
        .catch(err => {
            alert("❌ Erro ao enviar. Erro:" + err)


        });
}



function updateEntrega(id){
    const body = {
        "id_pedido":id,
        "entregador":1
    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    };
    options.body = JSON.stringify(body);
    fetch("http://localhost:4500/pedidos/update-entregador", options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 200) {

                alert(" Enviado com Sucesso 😀 ✔")
                window.location.reload()


            } else {
                alert("Erro ao enviar dados 🙁❌: " + resp)
            }
        })
        .catch(err => {
            alert("❌ Erro ao enviar dados. Erro:" + err)


        });
}
       

function remover(id, novoCardPedido) {
    fetch("http://localhost:4500/pedidos/delete/" + id, {
        "method":"DELETE"
    })
    .then(resp => {})
    .then(p => {
        novoCardPedido.remove();
        window.location.reload()

    });
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