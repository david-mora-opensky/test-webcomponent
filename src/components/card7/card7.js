import template from "./card7.html";
import css from "./card7.css";

class Card7 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.innerHTML = template;
        this.shadowRoot.querySelector("style").innerHTML = css;
    }
    connectedCallback() {
        this.mytitle = this.getAttribute('title') || 'Gengar';
        this.myboton = this.getAttribute('boton') || 'Conoce más!';
        this.mydescripcion = this.getAttribute('descripcion') || "Es un Pokémon de tipo fantasma/veneno introducido en la primera generación. Es la evolución de Haunter y, a partir de la sexta generación, puede megaevolucionar en Mega-Gengar.";
        this.myimagen = this.getAttribute('imagen') || "https://i.pinimg.com/564x/24/cc/be/24ccbead3516bb60326f00afb08883ba.jpg";
        this.shadowRoot.querySelector('[data-button]').innerHTML = this.myboton;
        this.shadowRoot.querySelector('[data-title]').innerHTML = this.mytitle;
        this.shadowRoot.querySelector('[data-image]').setAttribute("src", this.myimagen);
    }
}

export default Card7;