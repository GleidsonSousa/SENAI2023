const linhamodelo = document.querySelector(".linhamodelo");
const linhamodeloVei = document.querySelector(".linhamodeloVei")
const linhamodeloOp = document.querySelector(".linhamodeloOp")
const linhamodeloManu = document.querySelector(".linhamodeloM")

const listaMots = document.querySelector("#lista-motoristas")
const listaVei = document.querySelector("#lista-veiculos")
const listaOp = document.querySelector("#lista-operacoes")
const listaManu = document.querySelector("#lista-manutencoes")

const btnEditM = document.querySelector('#enviaEditManu')

let mot = []
let op = []
let vei = []
let manu = []

function onLoad() {
    loadManu()
    loadVei()
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

function preencherVei() {
    vei.forEach(v => {
        if(v.disponibilidade !== "Manutenção"){
            let option = document.createElement("option");
            option.value = v.id;
            option.innerHTML = v.id;
            document.getElementById("idVeiManuInp").appendChild(option);
        }

    })
}

function preencherManu() {
    manu.forEach(m => {
        let linha = linhamodeloManu.cloneNode(true)
        linha.classList.remove("model")

        linha.querySelector('#idManu').innerHTML = m.id
        linha.querySelector('#placaManu').innerHTML = m.veiculo.placa
        linha.querySelector('#inicioM').innerHTML = m.data_inicio.slice(0,10)
        linha.querySelector('#fimM').innerHTML = m.data_fim != null ? m.data_fim.slice(0,10) : innerHTML="Em andamento..."

        linha.querySelector('#excluirMod').addEventListener("click", () =>  {
            modalManuex()
            document.querySelector('#idManu').innerHTML = m.id
            document.querySelector('#placaVelin').innerHTML = m.veiculo.placa
            document.querySelector('#deletarManu').onclick = () => {removerManu(m.id, m.veiculo.id)}

        })
        linha.querySelector('#btnDetalManu').addEventListener('click', () => {

            removerModelDetal()
            document.querySelector('#detalIdOp').innerHTML = m.id
            document.querySelector('#detalIdVei').innerHTML = m.id_veiculo
            document.querySelector('#detalPlacaVei').innerHTML = m.veiculo.placa
            document.querySelector('#valorDetal').innerHTML = "R$ " + m.valor +",00"
            document.querySelector('#detalSaida').innerHTML = m.data_inicio.slice(0,10)
            document.querySelector('#detalRetorno').innerHTML = m.data_fim != null ? m.data_fim.slice(0,10) : innerHTML="Em andamento..."
            document.querySelector('#descOpRead').value = m.descricao


        })
        
        if(m.data_fim == null){
            linha.querySelector('#finalizarManu').classList.remove('model')
            linha.querySelector('#finalizarManu').addEventListener('click', () =>{
                finalizarManu(m.id, m.valor, m.veiculo.id)

        })
        

        }

        linha.querySelector('#editar').addEventListener('click', () =>{
            removeModelEditMot()
            btnEditM.onclick = () => {editManu(m.id)
            }

            document.querySelector('#valorIP').value = m.valor
            document.querySelector('#descManu').value = m.descricao


        })

        listaManu.appendChild(linha)

    })
}



function cadastraManutencao(){
    editarStatusV()
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

function finalizarManu(id,valor, veiculo){
    const hoje = new Date()
    const dia = hoje.getDate().toString().padStart(2,'0')
    const mes = String(hoje.getMonth() + 1).padStart(2,'0')
    const ano = hoje.getFullYear()
    const dataAtual = `${ano}-${mes}-${dia}T10:53:02.654Z`
    let body = {
        'data_fim': `${dataAtual}`,
        'valor': valor,
    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    }
    options.body = JSON.stringify(body)
    console.log(body)
    if (body.data_fim.length > 0) {
        fetch('http://localhost:3000/manutencao/'+id, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    editarStatusV2(veiculo)
                    alert('Finalizado com SUCESSO! 😀✔')
                    setTimeout(() => { window.location.reload() }, 200);
                    
                } else {
                    
                }
            })
    } else {
        alert("Erro ao Enviar dados ❗")
    }
    
}

function editManu(id, veiculo){

    const valor = document.querySelector("#valorIP").value
    const descricao = document.querySelector("#descManu").value

    let body = {
        "valor": valor,
        "descricao": descricao
    }

    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    }
    options.body = JSON.stringify(body)
    console.log(body)
    if (body.valor.length > 0 && body.descricao.length) {
        fetch('http://localhost:3000/manutencao/'+id, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    alert('Modificado com SUCESSO! 😀✔')
                    setTimeout(() => { window.location.reload() }, 200);
                    
                } else {
                    
                }
            })
    } else {
        alert("Preencha todos os campos obrigatórios ❗")
    }
    
}


function editarStatusV(){
    
    const id_veic = document.querySelector("#idVeiManuInp").value
    let body = {
        'disponibilidade': "Manutenção"

    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    }
    options.body = JSON.stringify(body)
    if ( body.disponibilidade.length > 0) {
        fetch('http://localhost:3000/veiculo/'+id_veic, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    
                } else {
                    
                }
            })
    }
}

function editarStatusV2(id){
    
  
    let body = {
        'disponibilidade': "Disponível"

    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    }
    options.body = JSON.stringify(body)
    if ( body.disponibilidade.length > 0) {
        fetch('http://localhost:3000/veiculo/'+id, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    
                } else {
                    
                }
            })
    }
}


function removerManu(id, veiculo){
    editarStatusV2(veiculo)
    fetch('http://localhost:3000/manutencao/' + id,{
        "method":"DELETE"
    })
    .then(resp =>{})
    .then(m => {
        alert("Deletado com Sucesso ✔")
        window.location.reload()

    })

}


function modalManuex(){
    document.querySelector('.ainManu').classList.remove('model')
}

function modalManuex2(){
    document.querySelector('.ainManu').classList.add('model')

}


function removeModelEditMot(){
    document.querySelector('.modalEditOp').classList.remove('model')
    document.querySelector('.modalCadManu').classList.add('model')
}





function fechaModalzinEditOp(){
    document.querySelector('.modalEditOp').classList.add('model')
    document.querySelector('.modalCadManu').classList.remove('model')
}

 function fecharDetal(){
    document.querySelector('.detalhesOp').classList.add('model')
}
function removerModelDetal(){
    document.querySelector('.detalhesOp').classList.remove('model')
}
