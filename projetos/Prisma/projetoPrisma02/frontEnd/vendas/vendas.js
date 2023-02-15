const url = 'http://localhost:3000/venda';

const modalEditar = document.querySelector(".editar");
const btnCad = document.querySelector("#cadedit")

let set = [];

function onLoad() {

    const options = { method: 'GET'};

    fetch(url, options)
        .then(res => res.json())
        .then(res => {
            set = res;
            preencher()
        }
        )
        .catch(err => console.error(err));
}

const divClone = document.querySelector('.cardSetor')

function preencher() {
    var add = 0
    set.forEach(str => {
        add++
        var novoCard = divClone.cloneNode(true)
        novoCard.classList.remove('model')
            novoCard.querySelector('#id').innerHTML = str.id
            novoCard.querySelector('#idProd').innerHTML = str.detalhes[0].produto.nome
            novoCard.querySelector('#idVen').innerHTML = str.vendedor.nome
            novoCard.querySelector('#data').innerHTML = str.data.slice(0, 10)
            document.querySelector('.styleCard').appendChild(novoCard)

            // novoCard.querySelector("#novo-post").addEventListener("click", () => {

            //     Np()
            //     btnCad.onclick = () => { cadastrarVenda(add) }
            // })
            
    })
}

const np = document.querySelector("#novo-post")



function newpost() {
    np.style = "font-size:20px"
    setTimeout(() => {np.innerHTML = "Cadastrar +"}, 350);
    np.style.transition = "0.6s"
}

function newp() {
    np.innerHTML = "+"
    np.style.width = "1px"
    np.style.transition = "1s"
}

function Np(){
    modalEditar.classList.remove("model");
}

function fecharModalCad() {
    modalEditar.classList.add("model");
}

function cadastrarVenda(add) {
   
    const info = {
        "nome": document.querySelector('#nome').value,
        "comissao": document.querySelector('#comi').value,
    }

    if (info.comissao.length > 0 && info.nome.length > 0) {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
          };
          console.log(info)
          
          fetch('http://localhost:3000/setores', options)
            .then(response => response.json())
            .then(response => {
                if (response.id !== null) {
                    alert("Setor Cadastrado com SUCESSO! 😀✔ ")
                    window.location.reload()
                } else {
                    console.log(response)
                }
            })
            .catch(err => console.error(err));
    }

    
}