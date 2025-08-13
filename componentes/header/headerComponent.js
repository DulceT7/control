export function header() {

    let header = document.createElement('header');
    header.className ="header";

    let p = document.createElement('p');
    p.innerText = "Header en JavaScript";
    p.className = "texto"

    let div = document.createElement('div');
    div.innerText ="✨";
    div.className = "circulo";
   
    header.appendChild(p);
    header.appendChild(div);

    
    return header;
}
