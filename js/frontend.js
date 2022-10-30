const categoria = document.getElementById("categorias");
const cantidad = document.getElementById("cantidad");
let valorTicket = 200;
let valorTotal;
const calcular = document.getElementById("btnResumen");
const reset = document.getElementById("btnReset");

function precio() {
    if (categoria.value == "estudiante") {
        valorTotal = cantidad.value * (valorTicket * 0.2)
    } else if (categoria.value == "trainee") {
        valorTotal = cantidad.value * (valorTicket * 0.5)
    } else if (categoria.value == "junior") {
        valorTotal = cantidad.value * (valorTicket * 0.85)
    };
    document.getElementById("precio").innerHTML = `Total a Pagar: $${valorTotal}`;
}

function borrar() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("cantidad").value = "";
    categoria.value = "";
    document.getElementById("precio").innerHTML = "Total a Pagar: $";

}

calcular.onclick = precio;
reset.onclick = borrar;