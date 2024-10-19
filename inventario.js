// Crear una lista global para almacenar los productos
let productosInventario = [];

// Función para agregar productos al inventario
document.getElementById("add-product-btn").addEventListener("click", addProduct);

function addProduct() {
    const barcode = document.getElementById("barcode").value;
    const name = document.getElementById("product-name").value;
    const price = parseFloat(document.getElementById("price").value).toFixed(2);
    const quantity = parseInt(document.getElementById("quantity").value);

    if (barcode && name && !isNaN(price) && quantity > 0) {
        const product = {
            barcode: barcode,
            name: name,
            price: price,
            quantity: quantity
        };
        
        // Agregar el producto a la lista global de inventario
        productosInventario.push(product);
        
        // Mostrar el producto en la tabla de inventario
        addProductToTable(product);

        // Limpiar los campos del formulario
        document.getElementById("barcode").value = "";
        document.getElementById("product-name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("quantity").value = "";
    } else {
        alert("Por favor, ingrese información válida para todos los campos.");
    }
}

function addProductToTable(product) {
    const inventoryBody = document.getElementById("inventory-body");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${product.barcode}</td>
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td>${product.quantity}</td>
        <td><button class="action-btn">Eliminar</button></td>
    `;

    row.querySelector(".action-btn").addEventListener("click", function() {
        row.remove();
        // Eliminar producto de la lista global
        productosInventario = productosInventario.filter(p => p.barcode !== product.barcode);
    });

    inventoryBody.appendChild(row);
}
