const pizzasSeleccionadas = JSON.parse(localStorage.getItem('pizzasSeleccionadas')) || [];
        const bebidasSeleccionadas = JSON.parse(localStorage.getItem('bebidasSeleccionadas')) || [];

        function cargarFactura() {
            const listaPizzasFactura = document.getElementById('listaPizzasFactura');
            const listaBebidasFactura = document.getElementById('listaBebidasFactura');
            let precioTotal = 0;

            pizzasSeleccionadas.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.cantidad} x ${item.pizza} (${item.tamano}) - $${item.total.toFixed(2)}`;
                listaPizzasFactura.appendChild(li);
                precioTotal += item.total;
            });

            bebidasSeleccionadas.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.cantidad} x ${item.bebida} (${item.tamano}) - $${item.total.toFixed(2)}`;
                listaBebidasFactura.appendChild(li);
                precioTotal += item.total;
            });

            document.getElementById('precioTotal').textContent = precioTotal.toFixed(2);
        }

        function reiniciarPedido() {
            localStorage.removeItem('pizzasSeleccionadas');
            localStorage.removeItem('bebidasSeleccionadas');
        }

        window.onload = cargarFactura;