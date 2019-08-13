
import template from './card8.html';
import css from './card8.css';

export default class Card8 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.innerHTML = template
        this.shadowRoot.querySelector('style').innerHTML = css
    }
    connectedCallback() {
        this.mytitle = this.getAttribute("title") || "Rayquaza";
        this.mydescripcion = this.getAttribute('descripcion') || "Es un Pokémon legendario de tipo dragón/volador introducido en la tercera generación. Es la mascota de Pokémon Esmeralda. Forma parte del trío creador junto con Groudon y Kyogre. A partir de Pokémon Rubí Omega y Pokémon Zafiro Alfa puede megaevolucionar en Mega-Rayquaza.";
        this.myimagen =
      this.getAttribute("imagen") ||
      "https://i.pinimg.com/564x/a1/e1/77/a1e1778df98995ece06fd42d8e6db556.jpg";
      this.myboton = this.getAttribute("boton") || "Conoce más!";
        this.shadowRoot.querySelector('[data-image]').setAttribute('src', this.myimagen);
        this.shadowRoot.querySelector("[data-title]").innerHTML = this.mytitle;
        this.shadowRoot.querySelector("[data-descripcion]").innerHTML = this.mydescripcion;
        this.shadowRoot.querySelector("[data-button]").innerHTML = this.myboton;
    
}
}

/* 
        this.mytitle = this.getAttribute('title') || 'Arcanine'
        this.myboton = this.getAttribute('boton') || 'Conoce más!'
        this.myimagen = this.getAttribute('imagen') || "https://i.pinimg.com/564x/2c/18/95/2c18959f74b0c2cf25ff63e21819a6fd.jpg"

    this.shadowRoot.querySelector('[data-button]').innerHTML = this.myboton;
        this.shadowRoot.querySelector('[data-title]').innerHTML = this.mytitle;
 */