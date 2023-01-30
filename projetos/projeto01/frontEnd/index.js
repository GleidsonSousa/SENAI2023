const url = 'http://localhost:4500/pedidos/read';

let ped = [];
const btCadedit = document.querySelector(".editar");
const btCadex = document.querySelector(".excluir");
const spamEX = document.querySelector("#spamID")


const inpProd = document.querySelector(".produto");
const inpCli = document.querySelector(".cliente");
const inpEnd = document.querySelector(".endereco");

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
            
            novoCardPedido.querySelector("#btnEnvia").addEventListener("click", () => { updateEntrega(p.id_pedido); })
            
            novoCardPedido.querySelector("#btnCancelar").addEventListener("click", () => {

                modalExclui()
                spamEX.innerHTML = p.id_pedido
                btCadex.onclick = () => { remover(p.id_pedido, novoCardPedido) }
            })

            novoCardPedido.querySelector("#btnEditar").addEventListener("click", () => {
                modalEdit()
                btCadedit.innerHTML = "Editar";
                btCadedit.onclick = () => { editarPedido(p.id_pedido) }
                inpCli.value = p.cliente;
                inpEnd.value = p.endereco;
                inpProd.value = p.produto;
            })
    
            
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
    console.log(id)
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
    console.log(id)
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
        alert("Pedido Cancelado com Sucesso 🙁✔")
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

function modalExclui(){
    document.querySelector(".abc").classList.toggle("model");
}

function modalEdit () {
    document.querySelector(".mc").classList.toggle("model");
}

function fechaModal(){
    document.querySelector(".mc").classList.add("model");
}

function modalSucesso() {
    document.querySelector(".ms").classList.toggle("model");
}

function editarPedido(id){
    console.log(id)
    let data = {}
    let body = {
        "id_pedido":id,
        "cliente": inpCli.value,
        "endereco": inpEnd.value,
        "produto": inpProd.value
    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body)
    if (body.cliente.length > 0 && body.endereco.length > 0) {
        fetch("http://localhost:4500/pedidos/update/", options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    alert("Pedido Editado com SUCESSO! 😀✔ ")
                    modalEdit();
                    modalSucesso();
                    setTimeout(() => { window.location.reload() }, 1000);
                    
                } else {
                    
                }
            })
    } else {
        alert("Preencha todos os campos obrigatórios ❗")
    }
}