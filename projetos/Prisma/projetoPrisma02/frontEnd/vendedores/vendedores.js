const url = 'http://localhost:3000/vendedores';

const linhamodelo = document.querySelector(".linhamodelo");
const listaVendedores = document.querySelector("#lista-produtos")

const listaProdutos = document.querySelector("#lista-produtos")



const modalEditar = document.querySelector(".editar");
const btCadedit = document.querySelector("#cadedit");


let vende = [];

function onLoad() {

    const options = { method: 'GET' };

    fetch(url, options)
        .then(res => res.json())
        .then(res => {
            vende = res;
            preencher();
        }
        )
        .catch(err => console.error(err));
}

function preencher() {
    vende.forEach(p => {
        let linha = linhamodelo.cloneNode(true);
        linha.classList.remove("model");

        let colunas = linha.querySelectorAll("td");
        colunas[0].innerHTML = p.setor_id;
        colunas[1].innerHTML = p.nome;
        colunas[2].innerHTML = "R$ " + p.salario;
        listaVendedores.appendChild(linha);
    })
}

function abrirModalCadastro() {
    btCadedit.innerHTML = "Cadastrar";
    btCadedit.onclick = () => { cadastrarFunc(); }
    modalEditar.classList.remove("model");
}

function fecharModalEditar() {
    modalEditar.classList.add("model");
}

function cadastrarFunc() {

    const info = {
        "nome": document.querySelector('#nomeV').value,
        "salario": document.querySelector('#salarioV').value,
        "setor_id": document.querySelector('#setorID').value
    }

    if (info.salario.length > 0 && info.nome.length > 0) {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info)
        };
        console.log(info)

        fetch('http://localhost:3000/vendedores', options)
            .then(response => response.json())
            .then(response => {
                if (response.id !== null) {
                    alert("Produto Cadastrado com SUCESSO! 😀✔ ")
                    window.location.reload()
                } else {
                    console.log(response)
                }
            })
            .catch(err => console.error(err));
    }


}