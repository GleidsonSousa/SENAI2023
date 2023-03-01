
let mot = []
let op = []
let vei = []
let manu = []

function onLoad() {
    loadVei()
    loadMot()
    loadOp()
    loadManu()
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

function preencherMot() {
    let qtdMot = 0
    mot.forEach(m => {
        qtdMot++
        console.log(qtdMot)
        document.querySelector('#totalMot').innerHTML = qtdMot
    })
}

function preencherVei() {
    let qtdVei = 0
    vei.forEach(m => {
        qtdVei++
        console.log(qtdVei)

        document.querySelector('#totalVei').innerHTML = qtdVei
    })
}

function preencherManu() {
    let qtdManu = 0
    manu.forEach(m => {
        qtdManu++        
        console.log(qtdManu)
        document.querySelector('#totalManu').innerHTML = qtdManu
    })
}

function preencherOp() {
    let qtdOp = 0

    op.forEach(m => {
        qtdOp++
        console.log(qtdOp)
        document.querySelector('#totalOp').innerHTML = qtdOp
    })
}
