import { clientServices } from "../servicios/productos-servicios.js"

console.log(clientServices)

const crearNuevoProducto = (name, price, description, id, img, category) => {
    const card = document.createElement("div")
    const contenido = `<div class="productos__card" >
        <img src="${img}" alt="Img">
        <div class="productos__info">
            <p class="productos__nombre">${name}</p>
            <p class="productos__precio">${price}</p>
            <a class="productos__btn" href="./screens/editProduct.html?${id}">Ver producto</a>
        </div>                        
    </div>`
    card.innerHTML = contenido
    console.log(card)
    return card
}

const cardStarwars = document.querySelector("[data-starwars]")
const cardConsolas = document.querySelector("[data-consolas]")
const cardDiversos = document.querySelector("[data-diversos]")

clientServices.listaProductos().then((data) => {
    data.forEach(producto => {
        const nuevoProducto = crearNuevoProducto(producto.img,producto.name,producto.price)
        cardStarwars.appendChild(nuevoProducto)
   });
}).catch((error) => alert("Ocurrió un error"))



// import { productosServicios } from "../servicios/productos-servicios.js"

// const nuevoProducto = (name, img, price) => {
//     const card = document.createElement("div")
//     const contenido = `
//     <div class="productos__card">
//         <img src="${img}" alt="taza">
//         <div class="productos__info">
//             <p class="productos__nombre">${name}</p>
//             <p class="productos__precio">${price}</p>
//             <a class="productos__btn">Ver producto</a>
//         </div>
//     </div>`

//     card.innerHTML = contenido;

//     return card
// }

// const productosStarwars = document.querySelector("[data-starwars]")
// const productosConsolas = document.querySelector("[data-consolas]")
// const productosDiversos = document.querySelector("[data-diversos]")

//  const cargarProductos = async() => {
//      const data = await productosServicios.listaProductos()

//      data.filter(producto => {
//          if(producto.categoria === "Star Wars") {
//              const nuevaCard = nuevoProducto(producto)
//              productosStarwars.appendChild(nuevaCard)
//          }
//          if(producto.categoria === "Consolas") {
//              const nuevaCard = nuevoProducto(producto)
//              productosConsolas.appendChild(nuevaCard)
//          }
//          if(producto.categoria === "Diversos") {
//              const nuevaCard = nuevoProducto(producto)
//              productosDiversos.appendChild(nuevaCard)
//          }
//      });
//  };

// cargarProductos()

//  productosServicios.listaProductos().then((data) => {
//      data.forEach(({name, img, price}) => {
//          const todosProductos = nuevoProducto(name, img, price);
//          console.log(todosProductos)
//          productosStarwars.appenChild(todosProductos)
//      });
//  }).catch((error) => alert("Ocurrió un error"));