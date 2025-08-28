import { header } from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componentes/seccion1/seccion1.js";
import { nav } from "./componentes/nav/navComponent.js"

function seccion(){

    let seccion = document.createElement('section');

    // header
    seccion.appendChild(header());

    // seccion1
    seccion.appendChild(seccion1());

    //nav
    seccion.appendChild(nav());

    //localSotore
     let listaDeCompras = localStorage.getItem("carritoLista");

    if (!listaDeCompras) {
        listaDeCompras = [];
        localStorage.setItem("carrito", JSON.stringify(listaDeCompras));
    } else {
    listaDeCompras = JSON.parse(listaDeCompras);
    }
    console.log(listaDeCompras);
    
   return seccion;
}

 document.body.appendChild(seccion());