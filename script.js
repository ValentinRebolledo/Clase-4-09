const contenedor = document.querySelector("#plantel");
const plantel = [
    { nombre: "Pepe", posicion: "delantero", seleccion: "argentina", dorsal: 20,
      velocidad: 8, fortalezas: ["gambeta", "Velocidad"], edad: 22 },
    { nombre: "Tomas", posicion: "defensor", seleccion: "brasil", dorsal: 3, velocidad: 2, fortalezas: ["cabezazo", "marca"], edad: 30},
    { nombre: "Fernando", posicion: "mediocampista", seleccion: "colombia", dorsal: 7, velocidad: 5, fortalezas:["pase", "velocidad"], edad: 19},
    { nombre: "Juan", posicion: "delantero", seleccion: "uruguay", dorsal: 9, velocidad: 10, fortalezas:["gambeta", "definicion"], edad: 25},
]
plantel.forEach(jugador => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("ficha");
    const nombre = document.createElement("h2");
    nombre.textContent = jugador.nombre;
    const posicion = document.createElement("p");
    posicion.textContent = jugador.posicion;
    const dorsal = document.createElement("p");
    dorsal.textContent = `Dorsal: ${jugador.dorsal}`;
    const fortaleza = document.createElement("p");
    fortaleza.textContent = `Fortalezas: ${jugador.fortalezas.join(", ")}`;
    const emoji = document.createElement("p");
    if (jugador.posicion == "delantero") {
        emoji.textContent = "⚔️​";
    }else if (jugador.posicion == "defensor") {
        emoji.textContent = "🛡️​";
    }else if (jugador.posicion == "mediocampista") {
        emoji.textContent = "⚡";
    }else if (jugador.posicion == "arquero") {
        emoji.textContent = "🧤";
    }
    const pais = document.createElement("p");
    if (jugador.seleccion == "argentina") {
        pais.textContent = "🇦🇷";
    }else if (jugador.seleccion == "brasil") {
        pais.textContent = "🇧🇷";
    }else if (jugador.seleccion == "colombia") {
        pais.textContent = "🇨🇴";
    }else if (jugador.seleccion == "uruguay") {
        pais.textContent = "🇺🇾";
    }else if (jugador.seleccion == "chile") {
        pais.textContent = "🇨🇱";
    }
    contenedor.appendChild(tarjeta);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(posicion);
    tarjeta.appendChild(dorsal);
    tarjeta.appendChild(fortaleza);
    tarjeta.appendChild(emoji);
    tarjeta.appendChild(pais);
    if (jugador.velocidad >= 8) {
        tarjeta.classList.add("destacado");
    }
    if (jugador == plantel[0]) {
        tarjeta.classList.add("capitan");
    }
    
});