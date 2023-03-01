const uriLogin = "http://localhost:3000/login"
const email = document.querySelector("#email")
const psw = document.querySelector("#psw")

const login = (err) => {
    let usuario = {
        "email": "Stevejobs@orkut.com",
        "senha": "1234"
    }

    fetch(uriLogin, {
        'method':'POST',
        'headers': {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario)
    }).then(response => { return response.status })
    .then(info => {
        if(info != null ) {
            console.log(info)
            if(info == 201){
                alert('❌ Erro no Login: SENHA INVÁLIDA!')
            } else if(info == 404){
                alert('❌ Erro no Login: Usuario não ENCONTRADO!')
            }else if(info == 200){
                window.location.href = "../home/dashboard.html"
            }
        } else {
            alert(' ❌ Erro no Login:' + info);
        }
    })
}