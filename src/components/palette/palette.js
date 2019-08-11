import template from './palette.html';
import css from './palette.css';

class Palette extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.innerHTML = template
        this.shadowRoot.querySelector('style').innerHTML = css
        this.shadowRoot.querySelector('#picker').addEventListener('change', this.changeColor.bind(this))
    }

    changeColor(e) {
        try {
            console.log('cambie',e)
        } catch (error) {
            console.log(error)
        }
    console.log('estoy aqui')
    }


    /* connectedCallback() {
        this.mytitle = this.getAttribute('title') || 'Arcanine'
        this.myboton = this.getAttribute('boton') || 'Conoce más!'
        this.myimagen = this.getAttribute('imagen') || "https://i.pinimg.com/564x/2c/18/95/2c18959f74b0c2cf25ff63e21819a6fd.jpg"

        this.shadowRoot.querySelector('[data-button]').innerHTML = this.myboton;
        this.shadowRoot.querySelector('[data-title]').innerHTML = this.mytitle;
        this.shadowRoot.querySelector('[data-image]').setAttribute('src', this.myimagen);
    } */
}
export default Palette;