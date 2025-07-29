export function item(){
    let h2 = document.createElement("h2");
    h2.innerText = "titulo";
    h2.className = ("titulo1");

    let item = document.createElement('div');
    item.className = ('item');

    let img = document.createElement("img");
    img.src = "assets/snoopy.jpg";
    img.className = ("imagen");

    let p = document.createElement("p");
    p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    p.className = ("texto1");


    item.appendChild(h2);
    item.appendChild(img);
    item.appendChild(p);

    
    return item;

}

