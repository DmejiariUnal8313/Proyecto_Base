const preciosPizzas = {
    "carnes": [5000, 30000, 32000, 36000, 40000],
    "hawaina": [5000, 30000, 32000, 36000, 40000],
    "doble queso": [5000, 30000, 32000, 36000, 40000],
    "pollo y champiñones": [5500, 32000, 36000, 40000, 44000],
    "napolitana": [5000, 30000, 32000, 36000, 40000],
    "vegetales": [5000, 30000, 32000, 36000, 40000],
    "estofada": [6000, 34000, 38000, 42000, 46000],
    "suprema": [6000, 34000, 38000, 42000, 46000]
};

let pizzasSeleccionadas = JSON.parse(localStorage.getItem('pizzasSeleccionadas')) || [];

function mostrarImagenPizza() {
    const pizza = document.getElementById('pizza').value;
    const imagenPizza = document.getElementById('imagenPizza');
    imagenPizza.src = `/images/${pizza}.jpg`; // Asegúrate de que las imágenes estén en la carpeta /images
    imagenPizza.style.display = 'block';
}

function agregarPizza() {
    const pizza = document.getElementById('pizza').value;
    const tamano = document.getElementById('tamanoPizza').value;
    const cantidad = document.getElementById('cantidadPizza').value;
    const indiceTamano = ["porcion", "personal", "mediana", "grande", "jumbo"].indexOf(tamano);
    const precio = preciosPizzas[pizza][indiceTamano];
    const total = precio * cantidad;

    pizzasSeleccionadas.push({ 
        pizza, 
        tamano, 
        cantidad, 
        total 
    });
    localStorage.setItem('pizzasSeleccionadas', JSON.stringify(pizzasSeleccionadas));
    actualizarListaPizzas();
}

function actualizarListaPizzas() {
    const listaPizzas = document.getElementById('listaPizzas');
    listaPizzas.innerHTML = '';
    pizzasSeleccionadas.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.cantidad} x ${item.pizza} (${item.tamano}) - $${item.total.toFixed(2)}`;
        listaPizzas.appendChild(li);
    });
}