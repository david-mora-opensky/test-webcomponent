import template from "./card2.html";
import css from "./card2.css";

class Card2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.innerHTML = template;
    this.shadowRoot.querySelector("style").innerHTML = css;
  }
  connectedCallback() {
    this.mytitle = this.getAttribute("title") || "Rayquaza";
    this.myboton = this.getAttribute("boton") || "Conoce más!";
    this.myimagen =
      this.getAttribute("imagen") ||
      "https://i.pinimg.com/564x/a1/e1/77/a1e1778df98995ece06fd42d8e6db556.jpg";
    this.shadowRoot.querySelector("[data-button]").innerHTML = this.myboton;
    this.shadowRoot.querySelector("[data-title]").innerHTML = this.mytitle;
    this.shadowRoot
      .querySelector("[data-image]")
      .setAttribute("src", this.myimagen);
  }
}

export default Card2;
