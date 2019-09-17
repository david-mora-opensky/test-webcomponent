import template from './card11.html';
import css from './card11.css';

class Card11 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.innerHTML = template
        this.shadowRoot.querySelector('style').innerHTML = css
    }
    connectedCallback() {
        this.mytitle = this.getAttribute("title") || "Tyranitar";
        this.mydescripcion = this.getAttribute('descripcion') || "Es un Pokémon de tipo roca/siniestro introducido en la segunda generación. Es la evolución de Pupitar, a partir de la sexta generación puede megaevolucionar en Mega-Tyranitar.";
        this.myimagen =
            this.getAttribute("imagen") ||
            "https://i.pinimg.com/564x/d8/1e/20/d81e20c590810389a54f30946b7403cc.jpg";
        this.myboton = this.getAttribute("boton") || "Conoce más!";
        this.shadowRoot.querySelector('[data-image]').setAttribute('src', this.myimagen);
        this.shadowRoot.querySelector("[data-title]").innerHTML = this.mytitle;
        this.shadowRoot.querySelector("[data-descripcion]").innerHTML = this.mydescripcion;
        this.shadowRoot.querySelector("[data-button]").innerHTML = this.myboton;

    }
}
export default Card11;