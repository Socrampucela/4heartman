//FUNCION UTILIZADA PARA ACTUALIZAR LA HORA PARA EL MENU DE LA WII

function actualizarReloj(){
    const fechaHora = new Date();
    const horaActual = fechaHora.getHours();
    const minutos = fechaHora.getMinutes().toString().padStart(2,'0');

    const horaFinal = horaActual.toString().padStart(2, '0');
    document.getElementById('reloj').textContent = `${horaActual}:${minutos}`;
    console.log(horaActual + ":"+ minutos)
}

actualizarReloj();
setInterval(actualizarReloj,3000);