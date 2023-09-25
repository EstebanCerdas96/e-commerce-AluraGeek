const listaProductos = () => fetch("http://localhost:3000/product").then(respuesta => respuesta.json())

const crearProducto = (name, price, description, id, img, category) => {
    return fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify({name, price, description, id, img, category})
    })
};

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/product/${id}`).then(respuesta => respuesta.json())
};

const actualizarProducto = (img, category, name, price, description, id) => {
    return fetch(`http://localhost:3000/product/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify({img, category, name, price, description, id}).then(respuesta => respuesta).catch(err => console.log(err))
    })
}

export const clientServices = {
    listaProductos,
    crearProducto,
    detalleProducto,
    actualizarProducto,
}




// const listaProductos = () => fetch("http://localhost:3000/product").then((respuesta) => respuesta.json());


// export const productosServicios = {
//     listaProductos
// }