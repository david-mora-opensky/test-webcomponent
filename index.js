import bar from './bar';
import Card from './components/card/card';
import Card2 from './components/card2/card2';
import Card3 from './components/card3/card3';

import style from './components/card/card.css'

console.log('style', style.toString());

window.customElements.define('comp-1', Card);
window.customElements.define('comp-2', Card2);
window.customElements.define('comp-3', Card3);
// window.customElements.define('comp-4', Card4);
// window.customElements.define('comp-5', Card5);
// window.customElements.define('comp-6', Card6);
// window.customElements.define('comp-7', Card7);

bar();