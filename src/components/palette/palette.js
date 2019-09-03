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
        this.changer = this.shadowRoot.querySelector('#picker');
        this.changer
            .addEventListener('change', this.changeColor.bind(this));
    }

    changeColor(e) {
        try {

            const arreglo = JSON.parse(this.changer.value) || this.changer.value;
            const keys = Object.keys(arreglo);
            const values = Object.values(arreglo);

            keys.forEach((item, index) => {
                    document.documentElement.style
                        .setProperty('--' + item + '-color', values[index]);
                })
                //console.log(keys);
                //console.log(values);
                /*for (const item of arreglo) {
                    console.log(item)
                    setTimeout(() => {
                        document.documentElement.style
                            .setProperty('--main-color', item);
                    }, 5000);
                }*/
                //console.log(`this.changer.value`, arreglo);
                /*  document.documentElement.style
                     .setProperty('--main-color', this.changer.value); */
        } catch (error) {
            console.log(error)
        }
    }

    submitForm(e) {
        e.preventDefault();
        try {
            console.log('cambie', e)
        } catch (error) {
            console.log(error)
        }
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