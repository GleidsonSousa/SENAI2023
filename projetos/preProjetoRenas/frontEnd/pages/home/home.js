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

function preencherMot() {
    mot.forEach(m => {

        let linha = linhamodelo.cloneNode(true)
        linha.classList.remove("model")

         linha.querySelector('#idMot').innerHTML = m.id
         linha.querySelector('#nomeMot').innerHTML = m.nome
         linha.querySelector('#cnhMot').innerHTML = m.cnh
        // document.querySelector('#statusMot').innerHTML = qtdMot

        listaMots.appendChild(linha);

    })
}

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

function preencherOp() {

    op.forEach(o => {
        let linha =  linhamodeloOp.cloneNode(true)
        linha.classList.remove("model")

        linha.querySelector('#idOp').innerHTML = o.id
        linha.querySelector('#nomeOp').innerHTML = o.motorista.nome
        linha.querySelector('#placaOp').innerHTML = o.veiculo.placa
        linha.querySelector('#saidaOp').innerHTML = o.data_saida.slice(0,10)
    
        listaOp.appendChild(linha)

    })
}

function modalMot(){

    document.querySelector('.tabelaManu').classList.add('model')
    document.querySelector('.tabelaOp').classList.add('model')
    document.querySelector('.tabelaVei').classList.add('model')
    document.querySelector('.tabelaMot').classList.remove('model')

}
function modalVei(){
    document.querySelector('.tabelaManu').classList.add('model')
    document.querySelector('.tabelaOp').classList.add('model')
    document.querySelector('.tabelaVei').classList.remove('model')
    document.querySelector('.tabelaMot').classList.add('model')
}
function modalOp(){
    document.querySelector('.tabelaManu').classList.add('model')
    document.querySelector('.tabelaOp').classList.remove('model')
    document.querySelector('.tabelaVei').classList.add('model')
    document.querySelector('.tabelaMot').classList.add('model')
}
function modalManu(){
    document.querySelector('.tabelaManu').classList.remove('model')
    document.querySelector('.tabelaOp').classList.add('model')
    document.querySelector('.tabelaVei').classList.add('model')
    document.querySelector('.tabelaMot').classList.add('model')
}
function modalTab(){

 document.querySelector('.grafic').classList.add('model')
 document.querySelector('.tabelas').classList.remove('model')

}
function modalGra(){

    document.querySelector('.grafic').classList.remove('model')
    document.querySelector('.tabelas').classList.add('model')
}

function cadastraMotorista(){

    const cpf = document.querySelector("#cpfMot").value
    const cnh = document.querySelector("#cnhdoMot").value
    const nome = document.querySelector("#nomedoMot").value
    console.log(cpf,cnh,nome)
    
    let body = {
        "cpf": cpf,
        "cnh": cnh,
        "nome": nome
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