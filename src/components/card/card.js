
import template from './card.html';
import css from './card.css';

class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.innerHTML = template
        this.shadowRoot.querySelector('style').innerHTML = css
    }

    connectedCallback() {
        this.mytitle = this.getAttribute('title') || 'Arcanine'
        this.myboton = this.getAttribute('boton') || 'Conoce más!'
        this.myimagen = this.getAttribute('imagen') || "https://i.pinimg.com/564x/2c/18/95/2c18959f74b0c2cf25ff63e21819a6fd.jpg"

        this.shadowRoot.querySelector('[data-button]').innerHTML = this.myboton;
        this.shadowRoot.querySelector('[data-title]').innerHTML = this.mytitle;
        this.shadowRoot.querySelector('[data-image]').setAttribute('src', this.myimagen);
    }
}

export default Card;