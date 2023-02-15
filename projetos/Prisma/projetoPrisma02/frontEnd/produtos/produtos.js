const listaProdutos = document.querySelector("#lista-produtos")
const linhamodelo = document.querySelector(".linhamodelo");
const modalExcluir = document.querySelector(".excluir");
const modalEditar = document.querySelector(".editar");



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
        colunas[2].innerHTML = "R$ " +  parseFloat(p.valor).toFixed(2).replace('.', ',') 
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
   
    const info = {
        "nome": document.querySelector('#nome').value,
        "valor": document.querySelector('#valor').value,
        "setor_id": document.querySelector('#setor').value
    }

    if (info.valor.length > 0 && info.nome.length > 0) {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
          };
          console.log(info)
          
          fetch('http://localhost:3000/produtos', options)
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

