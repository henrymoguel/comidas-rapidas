document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const userGreeting = document.getElementById('userGreeting');
    const userNameDisplay = document.getElementById('userNameDisplay');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userName = document.getElementById('userName').value;

        if (userName) {
            userNameDisplay.textContent = userName;
            userGreeting.style.display = 'block';
            registerForm.style.display = 'none';
        } else {
            alert('Por favor, ingrese su nombre.');
        }
    });
});


function usuario() {
    localStorage.setItem();
    localStorage.setItem();
    window.location.href = 'usuario.html';
}

function comprar(nombre, precio) {
    localStorage.setItem('productoNombre', nombre);
    localStorage.setItem('productoPrecio', precio);
    window.location.href = 'Compras/compratorta.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const productoNombre = localStorage.getItem('productoNombre');
    const productoPrecio = localStorage.getItem('productoPrecio');
    
    if (productoNombre && productoPrecio && document.getElementById('productoNombre')) {
        document.getElementById('productoNombre').textContent = productoNombre;
        document.getElementById('productoPrecio').textContent = productoPrecio;
    }
});

function realizarCompra() {
    const cantidad = document.getElementById('cantidad').value;
    const formaPago = document.getElementById('formaPago').value;
    const productoNombre = localStorage.getItem('productoNombre');
    const productoPrecio = localStorage.getItem('productoPrecio');
    const total = cantidad * productoPrecio;

    alert(`Compra realizada:
    Producto: ${productoNombre}
    Cantidad: ${cantidad}
    Forma de Pago: ${formaPago}
    Total a Pagar: $${total}`);
    
    localStorage.clear();
    window.location.href = 'perfil.html'
    window.location.href = 'menucyb.html';
}

