import template from './card9.html';
import css from './card9.css';

class Card9 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.innerHTML = template
        this.shadowRoot.querySelector('style').innerHTML = css
    }
    connectedCallback() {
        this.mytitle = this.getAttribute("title") || "Eevee";
        this.mydescripcion = this.getAttribute('descripcion') || "Es un Pokémon de tipo normal introducido en la primera generación. Se caracteriza por ser el Pokémon con más opciones evolutivas, actualmente son 8.";
        this.myimagen =
            this.getAttribute("imagen") ||
            "https://vignette.wikia.nocookie.net/es.pokemon/images/f/f2/Eevee.png/revision/latest/scale-to-width-down/350?cb=20150621181400";
        this.myboton = this.getAttribute("boton") || "Conoce más!";
        this.shadowRoot.querySelector('[data-image]').setAttribute('src', this.myimagen);
        this.shadowRoot.querySelector("[data-title]").innerHTML = this.mytitle;
        this.shadowRoot.querySelector("[data-descripcion]").innerHTML = this.mydescripcion;
        this.shadowRoot.querySelector("[data-button]").innerHTML = this.myboton;

    }
}
export default Card9;