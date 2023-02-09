const url = 'http://localhost:3000/setores';

let set = [];

function onLoad() {

    const options = { method: 'GET'};

    fetch(url, options)
        .then(res => res.json())
        .then(res => {
            set = res;
            preencher()
            console.log(set);
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
                     
            // novoCard.querySelector("#btnCancelar").addEventListener("click", () => {

            //     modalExclui()
            //     spamEX.innerHTML = p.id_pedido
            //     btCadex.onclick = () => { remover(p.id_pedido, novoCard) }
            // })
          
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
    novoPost.style = "display:flex"
}