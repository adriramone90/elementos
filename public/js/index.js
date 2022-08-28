
//Micro desafio 1
window.addEventListener("load",()=>{
    
    let h2 = document.querySelector("h2");
    let a = document.querySelector("a");
    let parrafos = document.querySelectorAll("p");
    let body = document.querySelector("body")

    let userName = prompt("Ingrese su nombre");

    if(userName !== ""){
        h2.innerHTML += userName;
    } else {
        h2.innerHTML += "invitado"
    }

    h2.innerText = h2.innerText.toUpperCase();

    a.style.color="#E51B3E";

    let response = confirm("¿Desea colocar un fondo de pantalla?");
    if(response){
        body.classList.add("fondo")
    }

    for(let i = 0;i<=parrafos.length;i++){
        if(i%2==0){
            parrafos[i].classList.add("destacadoPar")
        }else{
            parrafos[i].classList.add("destacadoImpar")
        }
    }
    
})
let main = document.querySelector("main");
    main.style.display = "block"

