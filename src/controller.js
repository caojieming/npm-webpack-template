import "./styles.css";
import { greeting } from "./models/model.js";
import { createImg } from "./views/view.js";

export function init() {
    console.log(greeting);
    createImg();
}
