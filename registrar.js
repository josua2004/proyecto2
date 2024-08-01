const correo = document.getElementById("correo")
const nombre= document.getElementById("nombre")
const password = document.getElementById("password")
const registrarme = document.getElementById("buton")

const apellidos = document.getElementById("apellidos")




const listaUsuarios = JSON.parse(localStorage.setItem("listaUsuarios")||[])


registrarme.addEventListener("click", function () {

    let usuario = {

    correo:correo.value,
    nombre:nombre.value,
    apellidos:apellidos.value,
    password:password.value
    

     }
     listaUsuarios.push(usuario)
     localStorage.setItem("PersonaRegistrada", JSON.stringify(listaUsuarios))

     console.log(typeof(listaUsuarios))

      

    if (registrarme == listaUsuarios) {
        alert("si puedes entrar al sistema")
    } else{
        alert("no puedes entrar al sistema")
    } 
    
    
})

