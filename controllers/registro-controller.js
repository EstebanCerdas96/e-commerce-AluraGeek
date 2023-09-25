import { clientServices } from "../servicios/productos-servicios.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const img = document.querySelector("[data-img]").value
    const category = document.querySelector("[data-category]").value
    const name = document.querySelector("[data-name]").value
    const price = document.querySelector("[data-price]").value
    const description = document.querySelector("[data-description]").value
    console.log(name, price, description, img, category)
    clientServices.crearProducto(name, price, description, img, category).then(respuesta => {
        console.log(respuesta)
    }).catch(err => console.log(err))
});