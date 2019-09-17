import template from './card12.html';
import css from './card12.css';

class Card12 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.innerHTML = template
        this.shadowRoot.querySelector('style').innerHTML = css
    }
    connectedCallback() {
        this.mytitle = this.getAttribute("title") || "Lucario";
        this.mydescripcion = this.getAttribute('descripcion') || "Es un Pokémon de tipo lucha/acero introducido en la cuarta generación. Es la evolución de Riolu. Es un Pokémon adelantado por su aparición en la película Lucario y el misterio de Mew (ES), (HA), a partir de la sexta generación puede megaevolucionar en Mega-Lucario.";
        this.myimagen =
            this.getAttribute("imagen") ||
            "https://i.pinimg.com/564x/95/8e/24/958e24d9e3ab92c06c92e552e37d7a64.jpg";
        this.myboton = this.getAttribute("boton") || "Conoce más!";
        this.shadowRoot.querySelector('[data-image]').setAttribute('src', this.myimagen);
        this.shadowRoot.querySelector("[data-title]").innerHTML = this.mytitle;
        this.shadowRoot.querySelector("[data-descripcion]").innerHTML = this.mydescripcion;
        this.shadowRoot.querySelector("[data-button]").innerHTML = this.myboton;

    }
}
export default Card12;