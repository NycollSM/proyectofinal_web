let inicio = confirm('¿Desea realizar una compra?');
if (inicio == true) {
    //Generales
    let nombre = prompt('Ingrese su nombre');
    let id = prompt('Ingrese su id');
    let categoria = prompt('Ingrese su categoria');
    //Precios
    let plMate = 2000;
    let plSoci = 5000;
    let plFisc = 4000;
    let precio = 0;
    let descuento = 0;
    //Cantidades
    let clMate = 0;
    let clSoci = 0;
    let clFisc = 0;
    let clibrs = '-';
    //Totales
    let toLmate, toLsoci, toLfisc;
    clMate = prompt('Ingrese la cantidad de libros de matemáticas');
    if (clMate > 0) {
        toLmate = clMate * plMate;
    } else {
        console.log('-');
    }
    clSoci = prompt('Ingrese la cantidad de libros de estudios sociales');
    if (clSoci > 0) {
        toLsoci = clSoci * plSoci;
    } else {
        console.log('-');
    }
    clFisc = prompt('Ingrese la cantidad de libros de fisica');
    if (clFisc > 0) {
        toLfisc = clFisc * plFisc;
    } else {
        console.log('-');
    }
    clibrs = (parseInt(clMate) + parseInt(clSoci) + parseInt(clFisc));
    precio = (parseInt(toLmate) + parseInt(toLsoci) + parseInt(toLfisc));
    switch (categoria) {
        case "1":
            descuento = (precio - (precio * 0.3));
            break;
        case "2":
            descuento = (precio - (precio * 0.2));
            break;
        case "3":
            descuento = (precio - (precio * 0.1));
            break;
        default:
            precio = precio;
            break;
    }
    //Descuentos 
    let cdescuento = (precio - descuento);
    //Muestras 
    console.log("Hola" + " " + `${nombre}`);
    console.log('Id:' + ' ' + `${id}`);
    console.log("Categoria:" + " " + `${categoria}`);
    console.log("Cantidad total de libros:" + " " + `${clibrs}`);
    console.log("El substotal a pagar es:" + " " + `${precio}`);
    console.log('Su descuento es de:' + ' ' + `${cdescuento}`);
    console.log("El total a pagar es de:" + " " + `${descuento}`);
    //Q para salir//
    let salir = prompt("Si desea salir presione 'Q' ");
    if (salir == q || Q) {
        alert('Gracias por su compra');
    }
} else {
    alert('Gracias por su visita :)');
}