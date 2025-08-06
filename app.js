// Variables
let amigos = [];
let datoUsuario;
let listaHTML = document.getElementById("listaAmigos");

// Funcion que agrega a los amigos a la lista del sorteo
function agregarAmigo() {
  datoUsuario = document.getElementById("amigo").value;
  if (datoUsuario == "" || datoUsuario == null) {
    alert("Ingrese un dato para continuar");
    return;
  }
  amigos.push(datoUsuario);
  //listaParticipantes(datoUsuario); //Hace parte de la funcion alternativa para Ingresar usuarios
  document.getElementById("amigo").value = "";
  listaHTML.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let elementoLi = document.createElement("li");
    elementoLi.textContent = amigos[i];
    listaHTML.appendChild(elementoLi);
  }
  console.log(amigos);
}

function sortearAmigo() {
  if (amigos == 0) {
    alert("No se puede sortear, no hay participantes");
    return;
  }
}

/* Funcion alternativa para Ingresar usuarios
function listaParticipantes(dato) {
  let elementoLi = document.createElement("li");
  elementoLi.textContent=dato;
  listaHTML.appendChild(elementoLi);
}
 */
