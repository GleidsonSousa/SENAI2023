const linhamodeloVei = document.querySelector(".linhamodeloVei")

const listaVei = document.querySelector("#lista-veiculos")

let vei = []

function onLoad() {
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
        linha.querySelector('#statusVei').innerHTML =  v.disponibilidade

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
        "tipo": tipo,
        "disponibilidade":"Disponível"

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


function editarVei(id){
    let body = {
        'placa': document.querySelector('#placaEdit').value,
        'modelo':document.querySelector('#modeloEdit').value,
        'marca':document.querySelector('#marcaEdit').value,
        'tipo':document.querySelector('#tipoEdit').value

    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    }
    options.body = JSON.stringify(body)
    if (body.placa.length > 0 && body.modelo.length > 0 && body.marca.length > 0 && body.tipo.length > 0) {
        fetch('http://localhost:3000/veiculo/'+id, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    alert('DEU BOM')
                    setTimeout(() => { window.location.reload() }, 500);
                    
                } else {
                    
                }
            })
    } else {
        alert("Preencha todos os campos obrigatórios ❗")
    }
}

function removerVei(id ){
    console.log(id)
    fetch('http://localhost:3000/veiculo/' + id,{
        "method":"DELETE"
    })
    .then(resp =>{})
    .then(m => {
        alert("se fudeu")
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
