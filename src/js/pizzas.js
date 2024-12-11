let pizzasSeleccionadas = JSON.parse(localStorage.getItem('pizzasSeleccionadas')) || [];

        function mostrarImagenPizza() {
            const pizza = document.getElementById('pizza').value;
            const imagenPizza = document.getElementById('imagenPizza');
            imagenPizza.src = `/images/${pizza}.jpg`; // Asegúrate de que las imágenes estén en la carpeta /images
            imagenPizza.style.display = 'block';
        }

        function agregarPizza() {
            const pizza = document.getElementById('pizza');
            const tamano = document.getElementById('tamanoPizza');
            const cantidad = document.getElementById('cantidadPizza').value;
            const precioPizza = parseFloat(pizza.options[pizza.selectedIndex].getAttribute('data-precio'));
            const precioTamano = parseFloat(tamano.options[tamano.selectedIndex].getAttribute('data-precio'));
            const total = (precioPizza + precioTamano) * cantidad;

            pizzasSeleccionadas.push({ 
                pizza: pizza.value, 
                tamano: tamano.value, 
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