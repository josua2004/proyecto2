const input1 = document.getElementById("input1")

const input2 = document.getElementById("input2")

const mostrar = document.getElementById("mostrar")

const campoTareas = document.getElementById("campoTareas")

const cajaEventos = document.getElementById("cajaEventos")

const seleccionar = document.getElementById("seleccionar")




let listaTareas = JSON.parse(localStorage.getItem("listaTareas"))||[]
let listaEventos = JSON.parse(localStorage.getItem("listaEventos"))||[]



mostrar.addEventListener("click", function () {

     
     listaTareas.push(input1.value + " " + input2.value)
     localStorage.setItem("listaTareas", JSON.stringify(listaTareas))||[]
     listaEventos.push(input1.value + " " + input2.value)
     localStorage.setItem("listaEventos", JSON.stringify(listaEventos))||[]

     if (seleccionar.value === "tarea") {

          const etiquetaP = document.createElement("P")
          etiquetaP.innerHTML = campoTareas.value 
          
          const buton = document.createElement("button")
         buton.innerHTML = "Eliminar"
         campoTareas.appendChild(buton)
         console.log("buton")

         const buton2 = document.createElement("button")
         buton2.innerHTML="Editar"
         campoTareas.appendChild(buton2)
         console.log("buton2")

         const buton3 = document.createElement("button")
         buton3.innerHTML = "Guardar"
         campoTareas.appendChild(buton3)
         console.log("buton3")

         const divTar = document.createElement("div")
         const input1 = document.createElement("input")

         etiquetaP.innerHTML = campoTareas.value 
         etiquetaP.innerText = input1.value + " " + input2.value

         divTar.appendChild(etiquetaP)
         divTar.appendChild(buton)
         divTar.appendChild(buton2)

         campoTareas.appendChild(divTar)


         buton.addEventListener("click" ,function() {
     
          divTar.remove()
      
          
         })


         buton2.addEventListener("click", function () {

          divTar.appendChild(buton3)
          divTar.appendChild(input1)

          
         })

           buton3.addEventListener("click", function () {

           etiquetaP.innerText = input1.value

          })
                  
     }else{
            
          if (seleccionar.value =="Evento") {

               const etiquetaE = document.createElement("P")
               etiquetaE.innerHTML = cajaEventos.value 
               cajaEventos.appendChild(etiquetaE)
     
               
               const button = document.createElement("button")
               button.innerHTML = "Eliminar"
               cajaEventos.appendChild(button)
               console.log("button")

               const button2 = document.createElement("button")
               button2.innerHTML="Editar"
               cajaEventos.appendChild(button2)
               console.log("button2")

               const button3 = document.createElement("button")
               button3.innerHTML = "Guardar"
               cajaEventos.appendChild(button3)
               console.log("button3")

               const divEven = document.createElement("div")
               const inputt1 = document.createElement("input")

               etiquetaE.innerHTML = cajaEventos.value 
               etiquetaE.innerText = input1.value + " " + input2.value

               divEven.appendChild(etiquetaE)
               divEven.appendChild(button)
               divEven.appendChild(button2)

               cajaEventos.appendChild(divEven)


               button.addEventListener("click" ,function() {
     
               divEven.remove()
      
          
             })


               button2.addEventListener("click", function () {

               divEven.appendChild(button3)
               divEven.appendChild(inputt1)

          
             })
                 
               button3.addEventListener("click", function () {
               etiquetaE.innerText = inputt1.value
          
             })
               
          }
     }
     
})

function listar() {
     let lis = JSON.parse(localStorage.getItem("listaTareas"))||[]
     for (let index = 0 ; index > lis.length; index++) {

          const etiquetaT = document.createElement("P")
          etiquetaT.innerHTML = lis[index]
          campoTareas.appendChild(etiquetaT)

          const divT = document.createElement("div")
          const inputt11 = document.createElement("input")
          
          const button1 = document.createElement("button")
          button1.innerHTML = "Eliminar"
          

          const button23 = document.createElement("button")
          button23.innerHTML="Editar"
          

          const button32 = document.createElement("button")
          button32.innerHTML = "Guardar"

          divT.appendChild(button1)
          divT.appendChild(button23)
          divT.appendChild(button32)

          campoTareas.appendChild(divT)

          button1.addEventListener("click", function () {
               divT.remove
               let lis = JSON.parse(localStorage.getItem("listaTareas"))||[]
               let tarea1 = lis.filter(element => element !== etiquetaT.textContent);
               localStorage.setItem("listaTareas", JSON.stringify(tarea1))
               
          })

          button23.addEventListener("click", function () {
               divT.appendChild(button32)
               divT.appendChild(inputt11)
               
          })

          button32.addEventListener("click", function () {

               let lis = JSON.parse(localStorage.getItem("listaTareas"))||[]
               
               for (let index = 0; index > lis.length; index++) {
                    if (etiquetaT.textContent === lis[index]) {

                         
                    }
                    
               }
               localStorage.setItem("listaTareas", JSON.stringify(lis))
               etiquetaT.innerText = inputt11.value
               
          })


          

          
          
          
          
     }
}
listar()
