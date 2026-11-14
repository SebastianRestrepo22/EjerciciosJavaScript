/* Arrays y objetos: Tienes este array de productos:
const productos = [
  { nombre: "Laptop", precio: 3000 },
  { nombre: "Mouse", precio: 50 },
  { nombre: "Teclado", precio: 150 },
  { nombre: "Monitor", precio: 800 }
];

Crea una función filtrarProductos(productos) que:
1. Devuelva los productos cuyo precio sea mayor a 100.
2. Devuelva únicamente sus nombres.
3. No modifique el array original.*/

function filtrarProductos(productos) {
  const precioMayor = productos.filter(producto => producto.precio > 100);
  return precioMayor.map(nombreProducto => nombreProducto.nombre);
}

console.log(filtrarProductos(
  productos = [
    { nombre: "Laptop", precio: 3000 },
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 150 },
    { nombre: "Monitor", precio: 800 }
  ]
))

function filtrarProductos2(productos) {
  // Guarda en 'productosFiltrados' solo cada 'producto' de 'productos' cuyo precio sea mayor a 100
  const productosFiltrados = productos.filter(function (producto) {
    return producto.precio > 100
  })

  return productosFiltrados.map(function (nomreProducto){
    return nomreProducto.nombre
  })

}

console.log(filtrarProductos2(
  productos = [
    { nombre: "Laptop", precio: 3000 },
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 150 },
    { nombre: "Monitor", precio: 800 }
  ]
))