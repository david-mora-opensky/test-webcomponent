        import template from "./card4.html";
        import css from "./card4.css";

        class Card4 extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({
                    mode: "open"
                });
                this.shadowRoot.innerHTML = template;
                this.shadowRoot.querySelector("style").innerHTML = css;
            }
            connectedCallback() {
                this.mytitle = this.getAttribute('title') || 'Lapras';
                this.myboton = this.getAttribute('boton') || 'Conoce más!';
                this.mydescripcion = this.getAttribute('descripcion') || "Es un Pokémon de tipo agua/hielo introducido en la primera generación.";
                this.myimagen = this.getAttribute('imagen') || "https://i.pinimg.com/564x/64/fc/34/64fc34992a805e7e6d1ea8bf89b2e362.jpg";
                this.shadowRoot.querySelector('[data-button]').innerHTML = this.myboton;
                this.shadowRoot.querySelector('[data-title]').innerHTML = this.mytitle;
                this.shadowRoot.querySelector('[data-image]').setAttribute("src", this.myimagen);
            }
        }

        export default Card4;