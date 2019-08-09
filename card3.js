import template from "./card3.html";
import css from "./card3.css";

class Card3 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        });
        this.shadowRoot.innerHTML = template;
        this.shadowRoot.querySelector("style").innerHTML = css;
    }
    connectedCallback() {
        this.mytitle = this.getAttribute('title') || 'Eevee';
        this.myboton = this.getAttribute('boton') || 'Conoce más!';
        this.mydescripcion = this.getAttribute('descripcion') || "Es un Pokémon de tipo normal introducido en la primera generación. Se caracteriza por ser el Pokémon con más opciones evolutivas, actualmente son 8.";
        this.myimagen = this.getAttribute('imagen') || "https://vignette.wikia.nocookie.net/es.pokemon/images/f/f2/Eevee.png/revision/latest/scale-to-width-down/350?cb=20150621181400";
        this.shadowRoot.querySelector('[data-button]').innerHTML = this.myboton;
        this.shadowRoot.querySelector('[data-title]').innerHTML = this.mytitle;
        this.shadowRoot.querySelector('[data-image]').setAttribute("src", this.myimagen);
    }
}

export default Card3;