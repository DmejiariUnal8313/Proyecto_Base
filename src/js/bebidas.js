let bebidasSeleccionadas = JSON.parse(localStorage.getItem('bebidasSeleccionadas')) || [];

        function mostrarImagenBebida() {
            const bebida = document.getElementById('bebida').value;
            const imagenBebida = document.getElementById('imagenBebida');
            imagenBebida.src = `/images/${bebida}.jpg`; // Asegúrate de que las imágenes estén en la carpeta /images
            imagenBebida.style.display = 'block';
        }

        function agregarBebida() {
            const bebida = document.getElementById('bebida');
            const tamano = document.getElementById('tamanoBebida');
            const cantidad = document.getElementById('cantidadBebida').value;
            const precioBebida = parseFloat(bebida.options[bebida.selectedIndex].getAttribute('data-precio'));
            const precioTamano = parseFloat(tamano.options[tamano.selectedIndex].getAttribute('data-precio'));
            const total = (precioBebida + precioTamano) * cantidad;

            bebidasSeleccionadas.push({ 
                bebida: bebida.value, 
                tamano: tamano.value, 
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