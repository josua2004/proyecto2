const correo_usuario = document.getElementById("correo") 
const contraseña = document.getElementById("password")
const buton2 = document.getElementById("buton2")

let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))||[]





buton2.addEventListener("click",function () {

    for (let index = 0; index < listaUsuarios.length; index++) {
        if (listaUsuarios[index].correo === correo.value && listaUsuarios[index].contraseña ===  contraseña.value) {
            alert("si puedes entrar al sistema.")
        }else{
            alert("No puedes entrar al sistema.")
        }
        
        
    }
})


