//Función para obtener la elección aleatoria de la computadora
function obtenerEleccionComputadora() {
    const opciones = ["piedra", "papel", "tijeras"];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opciones[indiceAleatorio];
}

//Función para determinar el ganador
function determinarGanador(usuario, computadora) {
    if (usuario === computadora) {
        return "Empate";
    } else if (
        (usuario === "piedra" && computadora === "tijeras") ||
        (usuario === "papel" && computadora === "piedra") ||
        (usuario === "tijeras" && computadora === "papel")
    ) {
        return "¡Ganaste!";
    } else {
        return "Perdiste";
    }
}

//Solicitar al usuario su elección
let eleccionUsuario = prompt("Elige piedra, papel o tijeras:").toLowerCase();

//Validar que la elección del usuario sea válida
if (eleccionUsuario !== "piedra" && eleccionUsuario !== "papel" && eleccionUsuario !== "tijeras") {
    console.log("Elección inválida. Debes elegir entre 'piedra', 'papel' o 'tijeras'.");
} else {
    //Obtener la elección de la computadora
    let eleccionComputadora = obtenerEleccionComputadora();
    
    console.log(`Tú elegiste: ${eleccionUsuario}`);
    console.log(`La computadora eligió: ${eleccionComputadora}`);
    
    //Determinar el ganador
    let resultado = determinarGanador(eleccionUsuario, eleccionComputadora);
    
    //Mostrar el resultado
    console.log(resultado);
}
