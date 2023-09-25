import { clientServices } from "../servicios/productos-servicios.js"

const formulario = document.querySelector("[data-form]")

const obtenerInformacion = async() => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    //Hacer pagina de error
    if(id === null){
        window.location.href = "#"
    }

    const img = document.querySelector("[data-img]")
    const category = document.querySelector("[data-category]")
    const name = document.querySelector("[data-name]")
    const price = document.querySelector("[data-price]")
    const description = document.querySelector("[data-description]")

    const producto = await clientServices.detalleProducto(id)
    img.value= producto.img;
    category.value = producto.category;
    name.value = producto.name;
    price.value = producto.price;
    description.value = producto.description;
}

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const img = document.querySelector("[data-img]").value
    const category = document.querySelector("[data-category]").value
    const name = document.querySelector("[data-name]").value
    const price = document.querySelector("[data-price]").value
    const description = document.querySelector("[data-description]").value

    console.log(img, category, name, price, description)

    //Hacer pagina de producto editado con exito
    clientServices.actualizarProducto(img, category, name, price, description, id).then(() => {
        window.location.href = "#"
    })
})