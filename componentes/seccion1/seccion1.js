import { item } from "../../modulos/item/productoModulo.js";
import { productos } from "../../database/productos.js";

export function seccion1() {
    let seccion1 = document.createElement("section");
    seccion1.className = "seccion-1";

    

   

    productos.forEach(element => {
        seccion1.appendChild(item(element.title, element.image, element.description, element.price));
    });

    return seccion1;
}
