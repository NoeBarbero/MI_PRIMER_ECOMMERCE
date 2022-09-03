
alert("Elige el producto que deseas adquirir. Para salir ingresa 0")
let seleccionarProductos = Number(prompt( "1-joggings $4500 2-short $3500 3-capri $4000"))
let seleccionarCantidad;
let total = 0;

/* multiplicar la cantidad que selecciona el cliente por el precio del producto */
const cantidad = (cant, precio) => {
    return cant * precio
}

while (seleccionarProductos != 0){
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("El producto seleccionado es joggings, indica la cantidad"))
            total += cantidad(seleccionarCantidad, 4500)
        break;
    
        case 2:
            seleccionarCantidad = Number(prompt("El producto seleccionado es short, indica la cantidad"))
            total += cantidad(seleccionarCantidad, 3500)
        break;

        case 3:
            seleccionarCantidad = Number(prompt("El producto seleccionado es capri, indica la cantidad"))
            total += cantidad(seleccionarCantidad, 4000)
        break;

        default:
        break;
    }
    seleccionarProductos = Number(prompt( "1-joggings $4500 2-short $3500 3-capri $4000"))
}

alert("El total de tu compra es de: $" + total) 