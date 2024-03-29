const linhamodelo = document.querySelector(".linhamodelo");
const linhamodeloVei = document.querySelector(".linhamodeloVei")
const linhamodeloOp = document.querySelector(".linhamodeloOp")
const linhamodeloManu = document.querySelector(".linhamodeloM")

const listaMots = document.querySelector("#lista-motoristas")
const listaVei = document.querySelector("#lista-veiculos")
const listaOp = document.querySelector("#lista-operacoes")
const listaManu = document.querySelector("#lista-manutencoes")

let mot = []
let op = []
let vei = []
let manu = []

function onLoad() {
    loadVei()
    loadMot()
    loadOp()
    loadManu()
}


function loadMot() {
    const options = { method: 'GET' }

    fetch("http://localhost:3000/motoristas", options)
        .then(res => res.json())
        .then(res => {
            mot = res;
            preencherMot()
        }
        )
        .catch(err => console.error(err))
}

function loadVei() {
    const options = { method: 'GET' }

    fetch("http://localhost:3000/veiculo", options)
        .then(res => res.json())
        .then(res => {
            vei = res;
            preencherVei()
        }
        )
        .catch(err => console.error(err))
}

function loadOp() {
    const options = { method: 'GET' }

    fetch("http://localhost:3000/operacao", options)
        .then(res => res.json())
        .then(res => {
            op = res;
            preencherOp()
        }
        )
        .catch(err => console.error(err))
}

function loadManu() {
    const options = { method: 'GET' }

    fetch("http://localhost:3000/manutencao", options)
        .then(res => res.json())
        .then(res => {
            manu = res;
            preencherManu()
        }
        )
        .catch(err => console.error(err))
}

const btnCANCELACPF = document.querySelector('#excluir')
const btnEditar = document.querySelector('#enviaEditMot')

function preencherMot() {
    mot.forEach(m => {

        let linha = linhamodelo.cloneNode(true)
        linha.classList.remove("model")

         linha.querySelector('#idMot').innerHTML = m.id
         linha.querySelector('#nomeMot').innerHTML = m.nome
         linha.querySelector('#cnhMot').innerHTML = m.cnh
         linha.querySelector('#statusMot').innerHTML = m.status

        linha.querySelector('#modalEx').addEventListener("click", () =>  {
            modalCer()
            document.querySelector('#idMotboys').innerHTML = m.id
            console.log(m.id)
            document.querySelector('#nomeMotBoy').innerHTML = m.nome
            btnCANCELACPF.onclick = () => {removerMot(m.id, linha)}

        })

        linha.querySelector('#editarMot').addEventListener('click', () => {
            removeModelEditMot()
            btnEditar.onclick = () => {editarMot(m.id)}
            document.querySelector('#cpfEdit').value = m.cpf
            document.querySelector('#cnhEdit').value = m.cnh
            document.querySelector('#nomeEdit').value = m.nome
        })


        listaMots.appendChild(linha);

    })
}

const btnEditVei = document.querySelector('#enviaEditVei')
function preencherVei() {
    vei.forEach(v => {

        let linha =  linhamodeloVei.cloneNode(true)
        linha.classList.remove("model")

        linha.querySelector('#idVei').innerHTML = v.id
        linha.querySelector('#placaVei').innerHTML = v.placa
        linha.querySelector('#modeloVei').innerHTML = v.modelo
        linha.querySelector('#marcaVei').innerHTML = v.marca
        linha.querySelector('#tipoVei').innerHTML = v.tipo
        linha.querySelector('#statusVei').innerHTML =  v.disponibilidade = true ? innerHTML="Disponível" : innerHTML="Indisponível"

        linha.querySelector('#excluirVei').addEventListener("click", () =>  {
            modalVeiex()
            document.querySelector('#idVeiculin').innerHTML = v.id
            document.querySelector('#placaVeiculin').innerHTML = v.placa

            document.querySelector('#deletarVei').onclick = () => {removerVei(v.id)}

        })

        linha.querySelector('#editarVei').addEventListener('click', () => {
            removeModelEditVei()
            btnEditVei.onclick = () => {editarVei(v.id)
            console.log('a')}
            document.querySelector('#placaEdit').value = v.placa
            document.querySelector('#modeloEdit').value = v.modelo
            document.querySelector('#tipoEdit').value = v.tipo
            document.querySelector('#marcaEdit').value = v.marca

        })

        listaVei.appendChild(linha);

    })
}

function preencherManu() {
    manu.forEach(m => {
        let linha = linhamodeloManu.cloneNode(true)
        linha.classList.remove("model")

        linha.querySelector('#idManu').innerHTML = m.id
        linha.querySelector('#placaManu').innerHTML = m.veiculo.placa
        linha.querySelector('#inicioM').innerHTML = m.data_inicio.slice(0,10)
        linha.querySelector('#fimM').innerHTML = "Em andamento..."


        listaManu.appendChild(linha)

    })
}

const btnEditOp = document.querySelector('#enviaEditOp')

function preencherOp() {

    op.forEach(o => {
        let linha =  linhamodeloOp.cloneNode(true)
        linha.classList.remove("model")

        linha.querySelector('#idOp').innerHTML = o.id
        linha.querySelector('#nomeOp').innerHTML = o.motorista.nome
        linha.querySelector('#placaOp').innerHTML = o.veiculo.placa
        linha.querySelector('#saidaOp').innerHTML = o.data_saida.slice(0,10)

        linha.querySelector('#excluirOp').addEventListener("click", () =>  {
            modalOpex()
            document.querySelector('#idOpzin').innerHTML = o.id
            document.querySelector('#placaVelin').innerHTML = o.veiculo.placa
            document.querySelector('#deletarOp').onclick = () => {removerOp(o.id)}

        })

        linha.querySelector('#editarOp').addEventListener('click', () => {
            removeModelEditOp()
            btnEditOp.onclick = () => {editarOp(o.id)
            }
            document.querySelector('#veiculoEditOp').value = o.id_veiculo
            document.querySelector('#motoristaEditOp').value = o.id_motorista
            document.querySelector('#descOpEdit').value = o.descricao

        })
        
        linha.querySelector('#btnDetalOp').addEventListener('click', () => {
            removerModelDetal()
            document.querySelector('#detalIdOp').innerHTML = o.id
            document.querySelector('#detalIdMot').innerHTML = o.id_motorista
            document.querySelector('#detalNomeMot').innerHTML = o.motorista.nome
            document.querySelector('#detalIdVei').innerHTML = o.id_veiculo
            document.querySelector('#detalPlacaVei').innerHTML = o.veiculo.placa
            document.querySelector('#detalSaida').innerHTML = o.data_saida.slice(0,10)
            document.querySelector('#detalRetorno').innerHTML = o.data_retorno != null ? o.data_retorno.slice(0,10) : innerHTML="Em execução..."
            document.querySelector('#descOpRead').value = o.descricao

        })

        listaOp.appendChild(linha)

    })
}

// Funções de Cadastro 

function cadastraMotorista(){

    const cpf = document.querySelector("#cpfMot").value
    const cnh = document.querySelector("#cnhdoMot").value
    const nome = document.querySelector("#nomedoMot").value
    console.log(cpf,cnh,nome)
    
    let body = {
        "cpf": cpf,
        "cnh": cnh,
        "nome": nome,
        "status": "Disponível",
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body)
    console.log(body)
    if (body.cpf.length > 0 && body.cnh.length > 0 && body.nome.length > 0) {
        fetch("http://localhost:3000/motoristas", options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    alert("Cadastrado com SUCESSO! 😀✔ ")
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

function cadastraVeiculo(){

    const placa = document.querySelector("#placaInp").value
    const modelo = document.querySelector("#modeloInp").value
    const marca = document.querySelector("#marcaInp").value
    const tipo = document.querySelector("#tipoInp").value
    console.log(placa,modelo,marca,tipo)
    
    let body = {
        "placa": placa,
        "modelo": modelo,
        "marca": marca,
        "tipo": tipo
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body)
    console.log(body)
    if (body.placa.length > 0 && body.modelo.length > 0 && body.marca.length > 0 && body.tipo.length > 0) {
        fetch("http://localhost:3000/veiculo", options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    alert("Cadastrado com SUCESSO! 😀✔ ")
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

function cadastraOperacao(){

    const id_mot = document.querySelector("#idMotOp").value
    const id_vei = document.querySelector("#idVeiOp").value
    const descricao = document.querySelector("#descOpInp").value
    
    let body = {
        "id_motorista": id_mot,
        "id_veiculo": id_vei,
        "descricao": descricao
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body)
    console.log(body)
    if (body.id_motorista.length > 0 && body.id_veiculo.length > 0 && body.descricao.length > 0) {
        fetch("http://localhost:3000/operacao", options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    alert("Cadastrado com SUCESSO! 😀✔ ")
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

function cadastraManutencao(){

    const valor = document.querySelector("#valorInp").value
    const id_vei = document.querySelector("#idVeiManuInp").value
    const descricao = document.querySelector("#descInpManu").value
    
    let body = {
        "valor": valor,
        "descricao": descricao,
        "id_veiculo": id_vei
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body)
    console.log(body)
    if (body.valor.length > 0 && body.id_veiculo.length > 0 && body.descricao.length > 0) {
        fetch("http://localhost:3000/manutencao", options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    alert("Cadastrado com SUCESSO! 😀✔ ")
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


//Funções Editar
function editarMot(id){
    let body = {
        'cpf': document.querySelector('#cpfEdit').value,
        'cnh':document.querySelector('#cnhEdit').value,
        'nome':document.querySelector('#nomeEdit').value
    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    }
    options.body = JSON.stringify(body)
    if (body.cpf.length > 0 && body.cnh.length > 0 && body.nome.length > 0) {
        fetch('http://localhost:3000/motoristas/'+id, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    alert('Editado com SUCESSO! 😀✔')
                    setTimeout(() => { window.location.reload() }, 500);
                    
                } else {
                    
                }
            })
    } else {
        alert("Preencha todos os campos obrigatórios ❗")
    }
}



// Funções de Remover :D
function removerMot(id){
    console.log(id)
    fetch('http://localhost:3000/motoristas/' + id,{
        "method":"DELETE"
    })
    .then(resp =>{})
    .then(m => {
        alert("Deletado com SUCESSO! 😀❗")
        window.location.reload()

    })

}



function modalCer(){
    document.querySelector('.ain').classList.remove('model')
}

function modalVeiex(){
    document.querySelector('.ainVei').classList.remove('model')
}
function modalVeiex2(){
    document.querySelector('.ainVei').classList.add('model')
}
function modalOpex(){
    document.querySelector('.ainOp').classList.remove('model')
}

function modalOpex2(){
    document.querySelector('.ainOp').classList.add('model')

}

function modalCer2(){
    document.querySelector('.ain').classList.add('model')
}

function removeModelEditMot(){
    document.querySelector('.modalEditMot').classList.remove('model')
    document.querySelector('.modalCadMot').classList.add('model')
}

function removeModelEditVei(){
    document.querySelector('.modalEditVei').classList.remove('model')
    document.querySelector('.modalCadVei').classList.add('model')
}

function removeModelEditOp(){
    document.querySelector('.modalEditOp').classList.remove('model')
    document.querySelector('.modalCadOp').classList.add('model')
}

function fechaModalzin(){
    document.querySelector('.modalEditMot').classList.add('model')
    document.querySelector('.modalCadMot').classList.remove('model')
}
function fechaModalzinEditVei(){
    document.querySelector('.modalEditVei').classList.add('model')
    document.querySelector('.modalCadVei').classList.remove('model')
}

function fechaModalzinEditOp(){
    document.querySelector('.modalEditOp').classList.add('model')
    document.querySelector('.modalCadOp').classList.remove('model')
}

 function fecharDetal(){
    document.querySelector('.detalhesOp').classList.add('model')
}
function removerModelDetal(){
    document.querySelector('.detalhesOp').classList.remove('model')
}
