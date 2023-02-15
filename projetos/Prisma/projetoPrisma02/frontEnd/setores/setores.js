const url = 'http://localhost:3000/setores';

const modalEditar = document.querySelector(".editar");


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

    set.forEach(str => {

        var novoCard = divClone.cloneNode(true)
        novoCard.classList.remove('model')

            novoCard.querySelector('#idSet').innerHTML = str.id
            novoCard.querySelector('#nomeSet').innerHTML = str.nome
            novoCard.querySelector('#comiSet').innerHTML = str.comissao + "%"
            document.querySelector('.styleCard').appendChild(novoCard)



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

function cadastrarSetor() {
   
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