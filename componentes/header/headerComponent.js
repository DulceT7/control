export function header() {

    let header = document.createElement('header');
    header.className ="contenedor";

    let p = document.createElement('p');
    p.innerText = "Header en JavaScript";

    let div = document.createElement('div');
    div.className = "circulo";
   
    header.appendChild(p);
    header.appendChild(div);

    
    return header;
}