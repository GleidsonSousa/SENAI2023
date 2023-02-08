const listaProdutos = document.querySelector("#lista-produtos")
const linhamodelo = document.querySelector(".linhamodelo");
const modalExcluir = document.querySelector(".excluir");
const modalEditar = document.querySelector(".editar");

const inputCodigo = document.querySelector("#setorID");
const inputNome = document.querySelector("#nome");
const inputValor = document.querySelector("#valor");

const btCadedit = document.querySelector("#cadedit");

const url = 'http://localhost:3000/produtos';

let prod = [];

function onLoad() {

    const options = { method: 'GET'};

    fetch(url, options)
        .then(res => res.json())
        .then(res => {
            prod = res;
            preencher();
        }
        )
        .catch(err => console.error(err));
}

function preencher() {
    prod.forEach(p => {
        let linha = linhamodelo.cloneNode(true);
        linha.classList.remove("model");

        let colunas = linha.querySelectorAll("td");
        colunas[0].innerHTML = p.setor_id;
        colunas[1].innerHTML = p.nome;
        colunas[2].innerHTML = "R$ " + p.valor;
        listaProdutos.appendChild(linha);
    })
}

function fecharModalExcluir() {
    modalExcluir.classList.add("model");
}

function fecharModalEditar() {
    modalEditar.classList.add("model");
}

function abrirModalCadastro() {
    btCadedit.innerHTML = "Cadastrar";
    btCadedit.onclick = () => { cadastrarProduto(); }
    inputCodigo.value = "";
    inputNome.value = "";
    inputValor.value = "";
    modalEditar.classList.remove("model");
}

function editarProduto() {
    let produto = {
        "cod":inputCodigo.value,
        "nome":inputNome.value,
        "qntd":inputQuantidade.value,
        "preco":inputValor.value,
    }

    fetch("http://localhost:3000/produto", {
        "method":"PUT",
        "headers": {
            "Content-Type":"application/json"
        },
        "produto":JSON.stringify(produto)
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp.cod !== undefined) {
            alert("Produto Alterado com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao salvar alterações !");
        }
    })
}

function excluirProduto() {
    let data = {
        "cod":document.querySelector("#cod").innerHTML
    }

    fetch("http://localhost:3000/produto", {
        "method":"DELETE",
        "headers":{
            "Content-Type": "application/json"
        },
        "produto":JSON.stringify(data)
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp.cod !== undefined) {
            alert("Produto Excluido Com Sucesso!");
            window.location.reload();
        }else {
            alert("Falha ao excluir produto !");
        }
    });
}

function cadastrarProduto() {
    let data = {}
    let produto = {
        "nome": inputNome.value,
        "valor": inputValor.value,
        "setor_id": inputCodigo.value

    };
    console.log(produto)
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.produto = JSON.stringify(produto)
    if (produto.nome.length > 0 && produto.valor.length > 0 && produto.setor_id.length > 0) {
        fetch("http://localhost:3000/produtos", options)
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




let produto = {
    "cliente": document.querySelector("#cli").value,
    "endereco": document.querySelector("#end").value,
    "produto": document.querySelector("#pro").value
}

