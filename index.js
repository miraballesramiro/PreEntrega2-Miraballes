const productos = [
  { nombre: "Harina", precio: 50 },
  { nombre: "Galletas", precio: 100 },
  { nombre: "Cerveza", precio: 150 },
  { nombre: "Leche", precio: 200 },
  { nombre: "Gaseosa", precio: 250 },
];
let carrito = [];

let seleccion = prompt("Hola! ¿Desea comprar algún producto?");

while (seleccion != "Sí" && seleccion != "No") {
  alert("Por favor, ingresar sí o no");
  seleccion = prompt("Hola! ¿Deasea comprar algo?");
}

if ((seleccion = "Sí")) {
  alert("A continuación, nuestra lista de productos");
  let todoslosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todoslosProductos.join(" - "));
} else if (seleccion == "No") {
  alert("Gracias por venir. ¡Hasta pronto!");
}

while (seleccion != "No") {
  let producto = prompt("Agregá un producto a tu carrito");
  let precio = 0;

  if (
    producto == "Harina" ||
    producto == "Galletas" ||
    producto == "Cerveza" ||
    producto == "Leche" ||
    producto == "Gaseosa"
  ) {
    switch (producto) {
      case "Harina":
        precio = 50;
        break;
      case "Galletas":
        precio = 100;
        break;
      case "Cerveza":
        precio = 150;
        break;
      case "Leche":
        precio = 200;
        break;
      case "Gaseosa":
        precio = 250;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("¿Cuántas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio});
    console.log(carrito)
  } else {
    alert("No tenemos ese producto")
  }

  seleccion = prompt("¿Desea seguir comprando?")

  while(seleccion === "No"){
    alert("¡Gracias por comprar! ¡Hasta pronto!");
    carrito.forEach((carritoFinal) => {
      console.log(
        `producto: ${carritoFinal.producto}, unidades: ${
          carritoFinal.unidades
        },total a pagar por producto ${
          carritoFinal.unidades * carritoFinal.precio
        }`);
    });
    break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)
