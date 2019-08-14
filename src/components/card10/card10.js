import template from './card10.html';
import css from './card10.css';

class Card10 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.innerHTML = template
        this.shadowRoot.querySelector('style').innerHTML = css
    }
    connectedCallback() {
        this.mytitle = this.getAttribute("title") || "Lapras";
        this.mydescripcion = this.getAttribute('descripcion') || "Es un Pokémon de tipo normal introducido en la primera generación. Se caracteriza por ser el Pokémon con más opciones evolutivas, actualmente son 8.";
        this.myimagen =
            this.getAttribute("imagen") ||
            "https://i.pinimg.com/564x/64/fc/34/64fc34992a805e7e6d1ea8bf89b2e362.jpg";
        this.myboton = this.getAttribute("boton") || "Conoce más!";
        this.shadowRoot.querySelector('[data-image]').setAttribute('src', this.myimagen);
        this.shadowRoot.querySelector("[data-title]").innerHTML = this.mytitle;
        this.shadowRoot.querySelector("[data-descripcion]").innerHTML = this.mydescripcion;
        this.shadowRoot.querySelector("[data-button]").innerHTML = this.myboton;

    }
}
export default Card10;