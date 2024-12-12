const preciosBebidas = {
    "250ml": 3000,
    "500ml": 4000,
    "600ml": 5000,
    "1litro": 8000,
    "1.5litros": 8500,
    "2litros": 10000
};

const imagenesBebidas = {
    "coca-cola": "cocacola.png",
    "pepsi": "pepsi.png",
    "quatro": "quatro.png",
    "premio": "premio.png",
    "postobon-uva": "uva.png",
    "postobon-manzana": "manzana.png",
    "postobon-tamarindo": "naranja.png",
    "postobon-naranja": "naranja2.png",
    "hit-mango": "mango.png",
    "hit-naranja-piña": "piña.png",
    "hit-mora": "mora.png",
    "hit-lulo": "lulo.png",
    "hit-frutos-tropicales": "frutos.png",
    "mrtea-durazno": "mrtedurazno.png",
    "mrtea-limon": "mrtelimon.png",
    "mrtea-limon-menta": "mrtelimonmenta.png",
    "jugos-del-valle-naranja": "naranja.png",
    "jugos-del-valle-mandarina": "naranja2.png",
    "jugos-del-valle-mango-mora": "mango.png",
    "jugos-del-valle-piña-mango": "piña.png",
    "cerveza-aguila": "cerveza.png",
    "cerveza-aguila-zero": "cerveza.png",
    "pony-malta": "cerveza.png",
    "agua-brisa-sin-gas": "agua.png",
    "agua-brisa-con-gas": "agua.png",
    "agua-brisa-manzana": "manzana.png",
    "h2o-lima-limon": "agua.png",
    "h2o-limonata": "agua.png",
    "h2o-maracuya": "agua.png",
    "cerveza-tecate": "cerveza.png",
    "cerveza-club-colombia-negra": "cerveza.png",
    "cerveza-club-colombia-dorada": "cerveza.png",
    "cerveza-club-colombia-roja": "cerveza.png",
    "cerveza-heiniken": "cerveza.png"
};

let bebidasSeleccionadas = JSON.parse(localStorage.getItem('bebidasSeleccionadas')) || [];

function mostrarImagenBebida() {
    const bebida = document.getElementById('bebida').value;
    const imagenBebida = document.getElementById('imagenBebida');
    imagenBebida.src = `../src/image/${imagenesBebidas[bebida]}`; // Asegúrate de que las imágenes estén en la carpeta /src/image
    imagenBebida.style.display = 'block';
}

function agregarBebida() {
    const bebida = document.getElementById('bebida').value;
    const tamano = document.getElementById('tamanoBebida').value;
    const cantidad = document.getElementById('cantidadBebida').value;
    const precio = preciosBebidas[tamano];
    const total = precio * cantidad;

    bebidasSeleccionadas.push({ 
        bebida, 
        tamano, 
        cantidad, 
        total 
    });
    localStorage.setItem('bebidasSeleccionadas', JSON.stringify(bebidasSeleccionadas));
    actualizarListaBebidas();
}

function actualizarListaBebidas() {
    const listaBebidas = document.getElementById('listaBebidas');
    listaBebidas.innerHTML = '';
    bebidasSeleccionadas.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.cantidad} x ${item.bebida} (${item.tamano}) - $${item.total.toFixed(2)}`;
        listaBebidas.appendChild(li);
    });
}