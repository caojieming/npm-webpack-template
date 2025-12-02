import exampleImage from "../assets/img/example.jpeg";

export function createImg() {
    const image = document.createElement("img");
    image.src = exampleImage;
    document.querySelector("#content").appendChild(image);
}
