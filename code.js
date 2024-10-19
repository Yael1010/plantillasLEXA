function generateBarcode() {
    const barcodeValue = generateUniqueId();
    JsBarcode("#barcode", barcodeValue, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 100,
        displayValue: true
    });

    // Generar el código de barras para impresión
    JsBarcode("#printBarcode", barcodeValue, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 100,
        displayValue: true
    });

    // Enviar el código de barras a la base de datos
    fetch('https://tu-api.com/guardar-codigo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ codigo: barcodeValue })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Código guardado:', data);
    })
    .catch(error => {
        console.error('Error al guardar el código:', error);
    });
}

function generateUniqueId() {
    return 'ID-' + Date.now();
}

function printBarcode() {
    const printArea = document.getElementById('printArea');
    printArea.style.display = 'block';
    window.print();
    printArea.style.display = 'none';
}