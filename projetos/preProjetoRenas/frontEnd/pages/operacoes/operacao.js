const linhamodelo = document.querySelector(".linhamodelo");
const linhamodeloVei = document.querySelector(".linhamodeloVei")
const linhamodeloOp = document.querySelector(".linhamodeloOp")
const linhamodeloManu = document.querySelector(".linhamodeloM")
const divFinalizadas = document.querySelector('#eaE');


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
    loadOp()
    loadMot()
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


function preencherVei() {
    vei.forEach(v => {
        console.log(v.disponibilidade)
        if(v.disponibilidade == "Disponível"){
            let option = document.createElement("option");
            option.value = v.id;
            option.innerHTML = v.id;
            document.getElementById("selectVei").appendChild(option);
        }

    })
}

function preencherMot() {
    mot.forEach(m => {
        if(m.status == "Disponível" || m.status == "Ativo"){
            let option = document.createElement("option");
            option.value = m.id;
            option.innerHTML = m.id;
            document.getElementById("selectMot").appendChild(option);
        
        }

    })
}

const btnEditOp = document.querySelector('#enviaEditOp')

function preencherOp() {

    op.forEach(o => {


        if(o.data_retorno != null){
            var novoCardFinal = divFinalizadas.cloneNode(true)
            novoCardFinal.classList.remove('model')

            novoCardFinal.querySelector('#idOPr').innerHTML = o.id
            novoCardFinal.querySelector('#motomoto').innerHTML = o.motorista.nome
            novoCardFinal.querySelector('#pveicul').innerHTML = o.veiculo.placa
            novoCardFinal.querySelector('#exit').innerHTML = o.data_saida.slice(0,10)
            novoCardFinal.querySelector('#returned').innerHTML = o.data_retorno.slice(0,10)
            novoCardFinal.querySelector('#descMOD').value = o.descricao

            document.querySelector('.divModal').appendChild(novoCardFinal)
        }


        if(o.data_retorno == null){

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
            document.querySelector('#deletarOp').onclick = () => {removerOp(o.id, o.veiculo.id, o.motorista.id)}

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
            document.querySelector('#detalRetorno').innerHTML = o.data_retorno != null ? o.data_retorno.slice(0,10) : innerHTML="Em realização..."
            document.querySelector('#descOpRead').value = o.descricao

        })

       
            linha.querySelector('#finalizarOp').classList.remove('model')
            linha.querySelector('#finalizarOp').addEventListener('click', () => {
                finalizarOp(o.id, o.veiculo.id, o.motorista.id)
            })
      

       

        listaOp.appendChild(linha)

        }
    })
}



// Funções de Cadastro 

function cadastraOperacao(){
    editarStatusM()
    editarStatusV()
    const id_mot = document.querySelector("#selectMot").value
    const id_vei = document.querySelector("#selectVei").value
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
                    setTimeout(() => { window.location.reload() }, 800);
                } else {
                    alert("Erro ao enviar Pedido 🙁❌")
                }
            })
            .catch(err => alert("❌ Erro ao enviar dados. Erro:" + err));
    } else {
        alert("Preencha todos os campos obrigatórios ❗")
    }
}

function finalizarOp(id, veiculo, motorista){
    const hoje = new Date()
    const dia = hoje.getDate().toString().padStart(2,'0')
    const mes = String(hoje.getMonth() + 1).padStart(2,'0')
    const ano = hoje.getFullYear()
    const dataAtual = `${ano}-${mes}-${dia}T10:53:02.654Z`
    let body = {
        'data_retorno': `${dataAtual}`
    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    }
    options.body = JSON.stringify(body)
    console.log(body)
    if (body.data_retorno.length > 0) {
        fetch('http://localhost:3000/operacao/final/'+id, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    editarStatusM2(motorista)
                    editarStatusV2(veiculo)
                    alert('Finalizado com SUCESSO! 😀✔')
                    setTimeout(() => { window.location.reload() }, 1500);
                    
                } else {
                    
                }
            })
    } else {
        alert("Preencha todos os campos obrigatórios ❗")
    }
    
}

function editarOp(id){
    let body = {
        'id_motorista': document.querySelector('#motoristaEditOp').value,
        'id_veiculo':document.querySelector('#veiculoEditOp').value,
        'descricao':document.querySelector('#descOpEdit').value

    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    }
    options.body = JSON.stringify(body)
    if (body.id_veiculo.length > 0 && body.id_motorista.length > 0 && body.descricao.length > 0) {
        fetch('http://localhost:3000/operacao/'+id, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {

                    alert('Cadastrado com SUCESSO! 😀✔')
                    setTimeout(() => { window.location.reload() }, 500);
                    
                } else {
                    
                }
            })
    } else {
        alert("Preencha todos os campos obrigatórios ❗")
    }
}

function editarStatusM(){
    console.log('b')
    const id_moto = document.querySelector("#selectMot").value

    let body = {
        'status': "Indisponível"
    
    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    }
    options.body = JSON.stringify(body)
    if ( body.status.length > 0) {
        fetch('http://localhost:3000/motoristas/'+id_moto, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {      
                }
            })
        }

}

function editarStatusV(){
    
    const id_veic = document.querySelector("#selectVei").value
    let body = {
        'disponibilidade': "Indisponível"

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

function editarStatusM2(id){
    console.log(id)
    console.log('b')
    let body = {
        'status': "Disponível"
    
    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    }
    options.body = JSON.stringify(body)
    if ( body.status.length > 0) {
        fetch('http://localhost:3000/motoristas/'+id, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {      
                }
            })
        }

}

function editarStatusV2(id){
    console.log(id)
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
// Funções de Remover :D
function removerOp(id, veiculo, motorista){
    editarStatusM2(motorista)
    editarStatusV2(veiculo)
    fetch('http://localhost:3000/operacao/' + id,{
        "method":"DELETE"
    })
    .then(resp =>{})
    .then(m => {
        alert("Deletedo com SUCESSO! 😀❗")
        window.location.reload()

    })

}





function modalOpex(){
    document.querySelector('.ainOp').classList.remove('model')
}

function modalOpex2(){
    document.querySelector('.ainOp').classList.add('model')

}


function modalRegistro(){
    document.querySelector('.opa').classList.toggle('model')

}

function removeModelEditOp(){
    document.querySelector('.modalEditOp').classList.remove('model')
    document.querySelector('.modalCadOp').classList.add('model')
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
