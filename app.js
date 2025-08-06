// Variables
let amigos = [];
let datoUsuario;
let listaHTML = document.getElementById("listaAmigos");
listaHTML.innerHTML = "";

// Funcion que agrega a los amigos a la lista del sorteo
function agregarAmigo() {
  datoUsuario = document.getElementById("amigo").value;
  if (datoUsuario == "" || datoUsuario == null) {
    alert("Ingrese un dato para continuar");
    return;
  }
  //amigos.push(datoUsuario); //Hace parte de la funcion alternativa para Ingresar usuarios
  listaParticipantes(datoUsuario);
  document.getElementById("amigo").value = "";
  for (let i = 0; i < amigos.length; i++) {
    document.createElement("li").textContent = amigos[i];
    listaHTML.appendChild(elementoLi);
  }
  console.log(amigos);
}

/* Funcion alternativa para Ingresar usuarios
function listaParticipantes(dato) {
  let elementoLi = document.createElement("li");
  elementoLi.textContent=dato;
  listaHTML.appendChild(elementoLi);
}
 */
