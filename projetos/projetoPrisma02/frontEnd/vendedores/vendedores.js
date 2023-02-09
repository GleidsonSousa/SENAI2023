const url = 'http://localhost:3000/vendedores';

const linhamodelo = document.querySelector(".linhamodelo");
const listaVendedores = document.querySelector("#lista-produtos")


let vende = [];

function onLoad() {

    const options = { method: 'GET'};

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
