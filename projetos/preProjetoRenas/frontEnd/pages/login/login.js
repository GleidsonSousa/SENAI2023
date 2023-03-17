const uriLogin = "http://localhost:3000/login"
const email = document.querySelector("#email")
const psw = document.querySelector("#psw")

const login = (err) => {
    email.value = "hobertAlberto@gmail.com"
    psw.value = "1234"
    let usuario = {
        "email": email.value,
        "senha":psw.value 
    }

    fetch(uriLogin, {
        'method':'POST',
        'headers': {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario)

    }).then(response => { return response.status, response.json() })
    .then(info => {
        console.log(info)
        if(info != null ) {

            if(info.erro == "Senha inválida"){
                alert('❌ Erro no Login: SENHA INVÁLIDA!')
            } else if(info.erro == "Usuário não encontrado"){
                alert('❌ Erro no Login: Usuario não ENCONTRADO!')
            }else if(info.validation == true){
                localStorage.clear();
                localStorage.setItem('usuario',JSON.stringify({"nivel":info.nivel}));
                console.log(localStorage)
                window.location.href = "../dashboard/dashboard.html"
            }
        } else {
            alert(' ❌ Erro no Login:' + info);
        }
    })
}