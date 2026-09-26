// Función para calcular los años transcurridos desde una fecha de ingreso/lanzamiento de un agente
function calcularTiempoTranscurrido(fechaNacimientoStr: string): number {
    const fechaNacimiento = new Date(fechaNacimientoStr);
    const hoy = new Date();

    let edad: number = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes: number = hoy.getMonth() - fechaNacimiento.getMonth();

    // Ajuste si aún no cumple años en el año actual
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    return edad;
}

// Simulando el tiempo desde el lanzamiento o fecha clave de un agente (Clove)
const agenteNombre: string = "Clove";
const fechaIngreso: string = "2024-03-26"; // Fecha de lanzamiento de Clove en el juego

const anosEnElJuego: number = calcularTiempoTranscurrido(fechaIngreso);

console.log(`--- REPORTE DEL PROTOCOLO VALORANT ---`);
console.log(`Agente: ${agenteNombre}`);
console.log(`Fecha de ingreso: ${fechaIngreso}`);
console.log(`Años desde su llegada al juego: ${anosEnElJuego} años.`);