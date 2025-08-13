import { item } from "../../modulos/item/itemModulo.js";
import { header } from "../header/headerComponent.js";

export function seccion1() {
    let seccion1 = document.createElement("section");
    seccion1.className = "seccion-1";

    let flores = [
        ["Hola1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qGEe8pZ4VTKIdMI2d-g0z8RWJZW9sUU5ErsnxHj9fzPQEOvEdaOvWrJ3uQevGAOkxew&usqp=CAU"],
        ["Hola2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHK13OWFi5n-iwJXwimefzWv7HCrZz74CGkrRx0NwSYHN19ZE1RTyvLfLiQHWW7TQmSo&usqp=CAU"],
        ["Hola3", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vA2CELYWeUH9FH3bbArrd7zcxyAQiQWKM2CjtrdS-VGUsXBjHtaEn8ilFuXQoGxE5v8&usqp=CAU"],
        ["Hola4", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg6UjwqN1QraG39NxL9e9Y6gKqKgFvLs6CCEVI1LygA_UVhZMPm5WWagrS0fXYg79ZbwA&usqp=CAU"]
    ];

    flores.forEach(flor => {
        seccion1.appendChild(item(flor[0], flor[1]));
    });
    return seccion1;
}
