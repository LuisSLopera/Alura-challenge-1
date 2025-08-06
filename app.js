let amigos = [];
let datoUsuario;

function agregarAmigo() {
  datoUsuario = document.getElementById("amigo").value;
  if (datoUsuario == "" || datoUsuario == null) {
    alert("Ingrese un dato para continuar");
    return;
  }
  amigos.push(datoUsuario);
  document.getElementById("amigo").value = "";
  console.log(amigos);
}
