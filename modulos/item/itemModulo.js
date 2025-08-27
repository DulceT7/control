export function item(titulo, urlImg, price, description) {
    
    let item = document.createElement('div');
    item.className = "item";
    item.textContent = titulo;

    let img = document.createElement('img');
    img.src = urlImg;
    item.appendChild(img);

    let span = document.createElement('span');
    span.textContent = price;
    item.appendChild(span);

    let p = document.createElement('p');
    p.textContent = description;
    item.appendChild(p);

    
    item.addEventListener('click', () => {
        item.classList.add("verde");

        let header = document.querySelector('.header');
        header.classList.add("ocultar");
    });

    return item;
}
