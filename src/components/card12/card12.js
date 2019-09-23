import template from './card12.html';
import css from './card12.css';
import extractValues from '../../util/extract';

class Card12 extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({
			mode: 'open'
		});
		this.shadowRoot.innerHTML = template;
		this.shadowRoot.querySelector('style').innerHTML = css;
		console.log('1', 1);
	}

	render() {
		console.log('2', 2);
		const structure = this.getAttribute('data-structure');
		console.log('structure', structure);
		const m = structure != null ? JSON.parse(structure) : require('./data.json');
		const model = this.model();
		const r = this.extractValues(model, m);
		console.log('r', r);
		console.log('m', m);
		console.log('r', r);
		this.mytitle = r.title;
		this.mydescripcion = r.description;
		this.myimagen = r.image;
		this.myboton = r.buttonText;
		this.shadowRoot.querySelector('[data-image]').setAttribute('src', this.myimagen);
		this.shadowRoot.querySelector('[data-title]').innerHTML = this.mytitle;
		this.shadowRoot.querySelector('[data-descripcion]').innerHTML = this.mydescripcion;
		this.shadowRoot.querySelector('[data-button]').innerHTML = this.myboton;
	}

	model() {
		return {
			title: '',
			description: '',
			image: '',
			buttonText: '',
			data: []
		};
	}

	/**
     * Función que permite extraer los valores apartir de una estructura dada.
     * example: {a,b,c} {a,b,c,d,e,f,g} = {a,b,c}
     * @param {*} structure  
     * @param {*} complete 
     */
	extractValues(structure, complete) {
		return Object.keys(selectable).reduce((a, b) => ((a[b] = original[b]), a), {});
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(attributeName, oldValue, newValue) {
		console.log('4', 4);
		console.log('name', attributeName);
		console.log('oldValue', oldValue);
		console.log('newValue', newValue);
		console.log('cambios detectados...');
		this.render();
	}

	static get observedAttributes() {
		return [ 'data-structure' ];
	}
}
export default Card12;
