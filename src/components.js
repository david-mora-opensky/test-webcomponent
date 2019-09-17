


class Card3 extends HTMLElement {
    constructor() {
        super();
      }
    connectedCallback() {
        let shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this.mytitle =  this.getAttribute('title') || 'Eevee'
        this.myboton =  this.getAttribute('boton') || 'Conoce más!'
        this.myimagen = this.getAttribute('imagen') || "https://vignette.wikia.nocookie.net/es.pokemon/images/f/f2/Eevee.png/revision/latest/scale-to-width-down/350?cb=20150621181400"
        this.mydescripcion = this.getAttribute('descripcion') || "Es un Pokémon de tipo normal introducido en la primera generación. Se caracteriza por ser el Pokémon con más opciones evolutivas, actualmente son 8."
        shadowRoot.innerHTML = `
   <style>
          :host {
            --orange: #FFC600;
            --space: 1.5em;
          }
            .btn-container {
            border: 2px dashed var(--orange);
            padding: var(--space);
            text-align: center;
          } 
            .btn {
            background-color: var(--orange);
            border: 0;
            border-radius: 5px;
            color: white;
            padding: var(--space);
            text-transform: uppercase;
          }
  
      :root {
    --canvasColor: #f9f9f9;
  }
  
  body {
    background: var(--canvasColor);
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    line-height: 1.5;
    font-size: 16px;
    text-align: center;
    transition: all .3s ease;
  }
  
  * {
    box-sizing: border-box;
  }
  
  main {
    --neutralShade1: #f2f2f2;
    --neutralShade2: #e8e9e9;
    --neutralShade3: #d1d3d4;
    --neutralShade4: #babdbf;
    --neutralShade5: #808488;
    --neutralShade6: #666a6d;
    --neutralShade7: #4d5052;
    --neutralShade8: #212122;
    --grayColor: #999;
    --lightGrayColor: #ddd;
    --borderRadius: 6px;
    --boxShadow: 0 2px 5px rgba(#333, 0.2);
  }
  
  
  main {
    margin: 3em auto 8em;
    color: var(--foregroundColor);
    text-align: left;
  }
  
  
  .palette {
    display: grid;
    grid: 80px 45px min-content/repeat(5, minmax(50px, 1fr));
    margin-bottom: 1em;
  }
  .palette__main {
    grid-column: span 5;
  }
  .palette h5 {
    grid-column: span 5;
    text-align: left;
    padding: 10px 0;
  }
  .palette.main div:nth-child(1) {
    background: var(--primaryColor);
  }
  .palette.main div:nth-child(2) {
    background: var(--primaryShade1);
  }
  .palette.main div:nth-child(3) {
    background: var(--primaryShade2);
  }
  .palette.main div:nth-child(4) {
    background: var(--primaryShade3);
  }
  .palette.main div:nth-child(5) {
    background: var(--primaryShade4);
  }
  .palette.main div:nth-child(6) {
    background: var(--primaryShade5);
  }
  .palette.secondary div:nth-child(1) {
    background: var(--secondaryColor);
  }
  .palette.secondary div:nth-child(2) {
    background: var(--secondaryShade1);
  }
  .palette.secondary div:nth-child(3) {
    background: var(--secondaryShade2);
  }
  .palette.secondary div:nth-child(4) {
    background: var(--secondaryShade3);
  }
  .palette.secondary div:nth-child(5) {
    background: var(--secondaryShade4);
  }
  .palette.secondary div:nth-child(6) {
    background: var(--secondaryShade5);
  }
  .palette.accent1 div:nth-child(1) {
    background: var(--accentColor);
  }
  .palette.accent1 div:nth-child(2) {
    background: var(--accentShade1);
  }
  .palette.accent1 div:nth-child(3) {
    background: var(--accentShade2);
  }
  .palette.accent1 div:nth-child(4) {
    background: var(--accentShade3);
  }
  .palette.accent1 div:nth-child(5) {
    background: var(--accentShade4);
  }
  .palette.accent1 div:nth-child(6) {
    background: var(--accentShade5);
  }
  .palette.accent2 div:nth-child(1) {
    background: var(--accent2Color);
  }
  .palette.accent2 div:nth-child(2) {
    background: var(--accent2Shade1);
  }
  .palette.accent2 div:nth-child(3) {
    background: var(--accent2Shade2);
  }
  .palette.accent2 div:nth-child(4) {
    background: var(--accent2Shade3);
  }
  .palette.accent2 div:nth-child(5) {
    background: var(--accent2Shade4);
  }
  .palette.accent2 div:nth-child(6) {
    background: var(--accent2Shade5);
  }
  .palette.accent3 div:nth-child(1) {
    background: var(--accent3Color);
  }
  .palette.accent3 div:nth-child(2) {
    background: var(--accent3Shade1);
  }
  .palette.accent3 div:nth-child(3) {
    background: var(--accent3Shade2);
  }
  .palette.accent3 div:nth-child(4) {
    background: var(--accent3Shade3);
  }
  .palette.accent3 div:nth-child(5) {
    background: var(--accent3Shade4);
  }
  .palette.accent3 div:nth-child(6) {
    background: var(--accent3Shade5);
  }
  .palette.neutrals {
    grid-template-rows: repeat(2, 50px) min-content;
    grid-template-columns: repeat(4, 1fr);
  }
  .palette.neutrals div:nth-child(1) {
    background: var(--neutralShade1);
  }
  .palette.neutrals div:nth-child(2) {
    background: var(--neutralShade2);
  }
  .palette.neutrals div:nth-child(3) {
    background: var(--neutralShade3);
  }
  .palette.neutrals div:nth-child(4) {
    background: var(--neutralShade4);
  }
  .palette.neutrals div:nth-child(5) {
    background: var(--neutralShade5);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(6) {
    background: var(--neutralShade6);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(7) {
    background: var(--neutralShade7);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(8) {
    background: var(--neutralShade8);
    grid-row: 2;
  }
  
  
  strong {
    font-weight: 500;
  }
  
  em {
    font-style: italic;
  }
  
  h1 {
    font: 700 48px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h2 {
    font: 700 32px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h3 {
    font: 700 24px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h4 {
    font: 700 20px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h5 {
    font: 500 18px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h6 {
    font: 500 16px/1.2 "Poppins", sans-serif;
    text-transform: uppercase;
  }
  
  
  a.button {
    outline: none;
    width: 100%;
    text-align: center;
    display: inline-block;
    border: none;
    font: 500 16px/1 "Poppins", sans-serif;
    padding: 20px;
    cursor: pointer;
    border-radius: var(--borderRadius);
    background: var(--primaryColor);
    color: var(--backgroundColor);
    position: relative;
    top: 0;
    transition: 0.2s ease;
  }
  a.button:hover, a.button.hover {
    top: -3px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
  a.button:active, a.button.active {
    background: var(--primaryShade4);
    outline: none;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    top: 0;
  }
  a.button.disabled {
    opacity: 0.4;
    user-select: none;
    pointer-events: none;
  }
  a.button.medium {
    padding: 15px 18px;
    width: auto;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  a.button.small {
    padding: 10px 12px;
    width: auto;
    font-size: 14px;
    font-weight: 500;
  }
  a.button.secondary {
    background: var(--secondaryColor);
  }
  a.button.secondary:active, a.button.secondary:focus, a.button.secondary.active {
    background: var(--secondaryShade4);
    outline: none;
  }
  a.button.accent {
    background: var(--accentColor);
  }
  a.button.accent:active, a.button.accent:focus, a.button.accent.active {
    background: var(--accentShade4);
  }
  a.button.accent2 {
    background: var(--accent2Color);
  }
  a.button.accent2:active, a.button.accent2:focus, a.button.accent2.active {
    background: var(--accent2Shade4);
  }
  a.button.accent3 {
    background: var(--accent3Color);
  }
  a.button.accent3:active, a.button.accent3:focus, a.button.accent3.active {
    background: var(--accent3Shade4);
  }
  
  
  
  input.variation {
    display: none;
  }
  input.variation + label {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 70px 20px 20px;
    border-radius: 50%;
    cursor: pointer;
    border: 6px solid #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  #bluepurple + label {
    background: linear-gradient(to left, #673ab7 50%, #03a9f4 50%);
  }
  #bluepurple:checked ~ main {
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #03a9f4;
    --primaryShade1: #e1f5fe;
    --primaryShade2: #b3e5fc;
    --primaryShade3: #4fc3f7;
    --primaryShade4: #0288d1;
    --primaryShade5: #0277bd;
    --secondaryColor: #673ab7;
    --secondaryShade1: #ede7f6;
    --secondaryShade2: #d1c4e9;
    --secondaryShade3: #9575cd;
    --secondaryShade4: #512da8;
    --secondaryShade5: #311b92;
    --accentColor: #009688;
    --accentShade1: #e0f2f1;
    --accentShade2: #b2dfdb;
    --accentShade3: #4db6ac;
    --accentShade4: #00796b;
    --accentShade5: #004d40;
    --accent2Color: #8bc34a;
    --accent2Shade1: #e7f6d5;
    --accent2Shade2: #c5e1a5;
    --accent2Shade3: #aed581;
    --accent2Shade4: #689f38;
    --accent2Shade5: #558b2f;
    --accent3Color: #f44336;
    --accent3Shade1: #ffdde0;
    --accent3Shade2: #ffcdd2;
    --accent3Shade3: #ef9a9a;
    --accent3Shade4: #d32f2f;
    --accent3Shade5: #b71c1c;
  }
  
  #sunset + label {
    background: linear-gradient(to right, #ff9557 50%, #ffcc67 50%);
  }
  #sunset:checked ~ main {
    --canvasColor: #f9f9f9;
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #ff9557;
    --primaryShade1: #ffe2d1;
    --primaryShade2: #ffceb2;
    --primaryShade3: #ffb184;
    --primaryShade4: #e88850;
    --primaryShade5: #d17a48;
    --secondaryColor: #ffcc67;
    --secondaryShade1: #fff1d5;
    --secondaryShade2: #ffde9e;
    --secondaryShade3: #ffd074;
    --secondaryShade4: #e8ba5e;
    --secondaryShade5: #ba954b;
    --accentColor: #4e5166;
    --accentShade1: #cecfd5;
    --accentShade2: #aeafb9;
    --accentShade3: #8e909d;
    --accentShade4: #6e7081;
    --accentShade5: #404354;
    --accent2Color: #588b8b;
    --accent2Shade1: #c2d4d4;
    --accent2Shade2: #a3bfbf;
    --accent2Shade3: #85aaaa;
    --accent2Shade4: #507f7f;
    --accent2Shade5: #497272;
    --accent3Color: #fe5f55;
    --accent3Shade1: #fec4c1;
    --accent3Shade2: #fea7a2;
    --accent3Shade3: #fe7c73;
    --accent3Shade4: #e7574e;
    --accent3Shade5: #b9463e;
  }
  
  #godiva + label {
    background: linear-gradient(to right, #a05793 50%, #a3d858 50%);
  }
  #godiva:checked ~ main {
    --canvasColor: #f9f9f9;
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #a05793;
    --primaryShade1: #e5d1e1;
    --primaryShade2: #d3b2cd;
    --primaryShade3: #b984b0;
    --primaryShade4: #925086;
    --primaryShade5: #834879;
    --secondaryColor: #a3d858;
    --secondaryShade1: #e5f4d1;
    --secondaryShade2: #cce9a3;
    --secondaryShade3: #bce285;
    --secondaryShade4: #95c550;
    --secondaryShade5: #779e41;
    --accentColor: #245e71;
    --accentShade1: #d7e1e5;
    --accentShade2: #afc4cb;
    --accentShade3: #7398a4;
    --accentShade4: #4b7b8a;
    --accentShade5: #1e4d5d;
    --accent2Color: #2aa5a1;
    --accent2Shade1: #d8eeed;
    --accent2Shade2: #9ed6d4;
    --accent2Shade3: #64bdba;
    --accent2Shade4: #279693;
    --accent2Shade5: #1f7976;
    --accent3Color: #92374d;
    --accent3Shade1: #ebdad3;
    --accent3Shade2: #cda4ae;
    --accent3Shade3: #af6d7d;
    --accent3Shade4: #853246;
    --accent3Shade5: #6b2939;
  }
  
  #dark + label {
    background: linear-gradient(to right, #367bc3 50%, #38bfa7 50%);
  }
  #dark:checked ~ main {
    --canvasColor: #2a313b;
    --backgroundColor: #2a313b;
    --foregroundColor: #ebe8d8;
    --primaryColor: #367bc3;
    --primaryShade5: #b5cfe9;
    --primaryShade4: #91b7de;
    --primaryShade3: #5a93cd;
    --primaryShade2: #3270b2;
    --primaryShade1: #285a8e;
    --secondaryColor: #38bfa7;
    --secondaryShade5: #c8ede7;
    --secondaryShade4: #92dccf;
    --secondaryShade3: #6ed0be;
    --secondaryShade2: #33ae98;
    --secondaryShade1: #2e9d89;
    --accentColor: #586994;
    --accentShade5: #d1d6e1;
    --accentShade4: #a3adc4;
    --accentShade3: #7684a7;
    --accentShade2: #49567a;
    --accentShade1: #39435f;
    --accent2Color: #8fe1a2;
    --accent2Shade5: #d6f4dd;
    --accent2Shade4: #c1eecc;
    --accent2Shade3: #a3e6b2;
    --accent2Shade2: #82cd94;
    --accent2Shade1: #76b985;
    --accent3Color: #fe938c;
    --accent3Shade5: #fee1df;
    --accent3Shade4: #fec4c0;
    --accent3Shade3: #fea6a0;
    --accent3Shade2: #e78680;
    --accent3Shade1: #b96b66;
    color: #f1f2eb;
    border-color: #f1f2eb;
  }
  #dark:checked ~ main > section {
    border-color: #f1f2eb;
  }
  #dark:checked ~ main > section > h6 {
    color: #f1f2eb;
  }
  
  #pinkaru + label {
    background: linear-gradient(to right, #f95794 50%, #323da5 50%);
  }
  #pinkaru:checked ~ main {
    border-color: #fff;
    --canvasColor: #2a313b;
    --backgroundColor: #2a313b;
    --foregroundColor: #e3f2fd;
    --primaryColor: #f95794;
    --primaryShade5: #fdd1e1;
    --primaryShade4: #fba3c4;
    --primaryShade3: #fa75a7;
    --primaryShade2: #e35087;
    --primaryShade1: #b6406c;
    --secondaryColor: #323da5;
    --secondaryShade5: #c7cae6;
    --secondaryShade4: #8f95cd;
    --secondaryShade3: #6971bd;
    --secondaryShade2: #2e3896;
    --secondaryShade1: #293288;
    --accentColor: #FFC729;
    --accentShade5: #ffefc4;
    --accentShade4: #ffe08a;
    --accentShade3: #ffd14f;
    --accentShade2: #e8b526;
    --accentShade1: #d1a322;
    --accent2Color: #53dd6c;
    --accent2Shade5: #d0f5d6;
    --accent2Shade4: #a1ecae;
    --accent2Shade3: #72e386;
    --accent2Shade2: #4cc963;
    --accent2Shade1: #3da14f;
    --accent3Color: #f52f57;
    --accent3Shade5: #fcc6d1;
    --accent3Shade4: #f98da3;
    --accent3Shade3: #f65475;
    --accent3Shade2: #df2b50;
    --accent3Shade1: #b32340;
  }
  #pinkaru:checked ~ main > section {
    border-color: #fff;
  }
  #pinkaru:checked ~ main > section > h6 {
    color: #fff;
  }
  
  footer {
    display: grid;
    text-align: center;
    width: 90%;
    margin: 1em auto 4em;
    max-width: 800px;
    align-items: center;
  }
  footer a {
    text-decoration: none;
    color: #333;
    padding: 3px 0;
    border-bottom: 1px dashed;
  }
  footer a:hover {
    border-bottom: 1px solid;
  }
  footer .social a {
    text-decoration: none !important;
    margin-top: 20px;
    margin-left: 10px;
    border-bottom: 0;
    display: inline-block;
  }
  footer .social a:hover {
    color: #666;
  }
  footer .social a .icons {
    display: inline-block;
    font-size: 20px;
  }
  footer.dark, footer.dark a {
    color: #f9f9f9;
  }
  
  .profile {
    position: relative;
    background: var(--backgroundColor);
    color: var(--foregroundColor);
    box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
    border-radius: 10px;
    transition: .2s ease;
  }
  .profile__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .profile__stats__title {
    color: var(--grayColor);
    text-transform: uppercase;
    font-size: 16px;
  }
  .profile a:hover {
    top: 0;
    box-shadow: none;
    background: var(--primaryShade4);
  }
  .profile a:active, .profile a:focus {
    top: 0;
    box-shadow: none;
    background: var(--primaryShade5);
  }
  
  .profile-default {
    min-width: 400px;
    max-width: 450px;
    margin: auto;
    overflow: hidden;
    display: grid;
    grid: 340px auto auto/repeat(3, minmax(80px, 1fr));
    grid-gap: 10px;
  }
  .profile-default .profile__image {
    grid-column: span 3;
  }
  .profile-default .profile__image img {
    border-bottom: 7px solid var(--secondaryColor);
  }
  .profile-default .profile__info {
    grid-column: span 3;
    margin: 20px 25px 0;
  }
  .profile-default .profile__stats {
    margin: 5px 25px;
  }
  .profile-default .profile__cta {
    grid-column: span 3;
    margin: 0 25px 25px;
  }
  
  .profile-smallimg {
    width: 300px;
    border-radius: 10px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    text-align: center;
  }
  .profile-smallimg .profile__image {
    margin-top: -40px;
  }
  .profile-smallimg .profile__image img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 5px solid var(--backgroundColor);
    box-shadow: 0 0 0 7px var(--secondaryColor);
  }
  .profile-smallimg .profile__info {
    margin: 10px 30px 15px;
  }
  .profile-smallimg .profile__stats {
    margin: 0 30px 10px;
  }
  .profile-smallimg .profile__stats:nth-of-type(n+4) {
    display: none;
  }
  .profile-smallimg .profile__cta a {
    border-radius: 0 0 10px 10px;
  }
  
  .profile-long {
    display: grid;
    grid-template-columns: repeat(4, 1fr) 100px;
    padding: 20px 20px 15px;
    min-width: 570px;
  }
  .profile-long .profile__image {
    grid-column: 5 / 6;
    margin-bottom: 10px;
  }
  .profile-long .profile__image img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  .profile-long .profile__info {
    grid-column: 1 / 5;
    grid-row: 1;
    padding: 5px 20px 20px 0;
  }
  .profile-long .profile__stats {
    min-width: 100px;
    padding-top: 20px;
    border-top: 0.5px solid var(--grayColor);
  }
  .profile-long .profile__cta {
    grid-column: span 2;
    border-top: 0.5px solid var(--grayColor);
    padding-top: 15px;
  }
  
  .profile-table {
    display: grid;
    max-width: 780px;
    grid-template-columns: 100px 1fr auto;
    grid-auto-flow: dense;
    overflow: hidden;
  }
  .profile-table .profile__image {
    grid-column: 1;
  }
  .profile-table .profile__stats {
    display: none;
  }
  .profile-table .profile__info {
    grid-column: 2 / 5;
    padding: 20px 15px 20px 20px;
  }
  .profile-table .profile__cta {
    grid-column: 5 / 6;
    align-self: center;
    padding-right: 25px;
  }
  
  .profile-wide {
    display: grid;
    grid-template-columns: auto repeat(3, 1fr);
    grid-auto-flow: dense;
    min-width: 500px;
    max-width: 590px;
  }
  .profile-wide .profile__image {
    padding: 30px 20px 20px;
    grid-row: 1 / 3;
  }
  .profile-wide .profile__image img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid var(--backgroundColor);
    box-shadow: 0 0 0 4px var(--secondaryColor);
  }
  .profile-wide .profile__stats {
    margin-bottom: 12px;
  }
  .profile-wide .profile__info {
    grid-column: span 3;
    padding: 25px 25px 15px 0;
  }
  .profile-wide .profile__cta {
    grid-column: span 4;
  }
  .profile-wide .profile__cta a {
    border-radius: 0 0 10px 10px;
  }
  
  .profile-imgonly {
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    display: grid;
    grid: 390px 0px / 100%;
  }
  .profile-imgonly:hover {
    grid: 334px 56px / 100%;
  }
  .profile-imgonly .profile__image, .profile-imgonly .profile__info {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  .profile-imgonly .profile__image {
    position: relative;
  }
  .profile-imgonly .profile__image:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0));
  }
  .profile-imgonly .profile__stats {
    display: none;
  }
  .profile-imgonly .profile__info {
    z-index: 5;
    grid-row: 1 / 2;
    align-self: end;
    margin: 10px 20px;
    color: #fff;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }
  .profile-imgonly .profile__info p {
    display: none;
  }
  .profile-imgonly .profile__cta a {
    border-radius: 0;
  }
  
  .profile-bigimg {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 400px auto 0px;
    border-radius: 10px;
    width: 650px;
    overflow: hidden;
    margin: auto;
  }
  .profile-bigimg .profile__image {
    grid-column: span 3;
  }
  .profile-bigimg .profile__info {
    grid-column: span 2;
    align-self: center;
    padding: 20px 10px 20px 25px;
  }
  .profile-bigimg .profile__info h3 {
    margin-bottom: 0;
  }
  .profile-bigimg .profile__info__extra {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height .3s ease, opacity .3s ease .3s, margin .3s ease;
  }
  .profile-bigimg .profile__stats {
    display: none;
  }
  .profile-bigimg .profile__cta {
    padding: 20px 20px 20px 0;
    align-self: center;
  }
  .profile-bigimg:hover .profile__info__extra {
    display: block;
    max-height: 200px;
    margin: 10px 0 0;
    opacity: 1;
  }
  
  main {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(4, auto);
    width: 550px;
    justify-content: center;
  }
  
  section:nth-child(1) {
    grid-column: 1 / 3;
    justify-self: end;
    align-self: end;
  }
  section:nth-child(2) {
    grid-column: 3 / 5;
  }
  section:nth-child(3) {
    grid-column: 5 / 7;
    align-self: end;
  }
  section:nth-child(4) {
    grid-column: 1 / 7;
    justify-self: center;
  }
  section:nth-child(5) {
    grid-column: 1 / 4;
    justify-self: end;
  }
  section:nth-child(6) {
    grid-column: 4 / 7;
    align-self: center;
  }
  section:nth-child(7) {
    grid-column: 1 / 7;
  }
  
  #dark:checked ~ main a.button,
  #pinkaru:checked ~ main a.button {
    color: var(--foregroundColor);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  #dark:checked ~ main .button:hover,
  #pinkaru:checked ~ main .button:hover {
    background: var(--primaryShade2);
  }
  #dark:checked ~ main .button:active,
  #pinkaru:checked ~ main .button:active {
    background: var(--primaryShade1);
  }
  #dark:checked ~ main .profile-default img,
  #pinkaru:checked ~ main .profile-default img {
    border-bottom: 7px solid var(--secondaryShade5);
  }
  #dark:checked ~ main .profile-smallimg img,
  #pinkaru:checked ~ main .profile-smallimg img {
    box-shadow: 0 0 0 7px var(--secondaryShade5);
  }
  #dark:checked ~ main .profile-wide img,
  #pinkaru:checked ~ main .profile-wide img {
    box-shadow: 0 0 0 4px var(--secondaryShade5);
  }
        </style>
  <section>
          <div class="profile profile-smallimg">
              <div class="profile__image"><img src='${this.myimagen}' alt="Doggo" /></div>
              <div class="profile__info">
                  <h3>${this.mytitle}</h3>
                  <p class="profile__info__extra">${this.mydescripcion}</p>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Type</p>
                  <h5 class="profile__stats__info">Normal</h5>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Size</p>
                  <h5>30cm</h5>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Weight</p>
                  <h5 class="profile__stats__info">6.5kg</h5>
              </div>
              <div class="profile__cta"><a class="button">${this.myboton}</a></div>
          </div>
      </section>
   `
    }

}

class Card4 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this.mytitle =  this.getAttribute('title') || 'Lapras'
        this.myboton =  this.getAttribute('boton') || 'Conoce más!'
        this.myimagen = this.getAttribute('imagen') || "https://i.pinimg.com/564x/64/fc/34/64fc34992a805e7e6d1ea8bf89b2e362.jpg"
        this.mydescripcion = this.getAttribute('descripcion') || "Es un Pokémon de tipo agua/hielo introducido en la primera generación."
        shadowRoot.innerHTML = `
   <style>
          :host {
            --orange: #FFC600;
            --space: 1.5em;
          }
            .btn-container {
            border: 2px dashed var(--orange);
            padding: var(--space);
            text-align: center;
          } 
            .btn {
            background-color: var(--orange);
            border: 0;
            border-radius: 5px;
            color: white;
            padding: var(--space);
            text-transform: uppercase;
          }
  
      :root {
    --canvasColor: #f9f9f9;
  }
  
  body {
    background: var(--canvasColor);
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    line-height: 1.5;
    font-size: 16px;
    text-align: center;
    transition: all .3s ease;
  }
  
  * {
    box-sizing: border-box;
  }
  
  main {
    --neutralShade1: #f2f2f2;
    --neutralShade2: #e8e9e9;
    --neutralShade3: #d1d3d4;
    --neutralShade4: #babdbf;
    --neutralShade5: #808488;
    --neutralShade6: #666a6d;
    --neutralShade7: #4d5052;
    --neutralShade8: #212122;
    --grayColor: #999;
    --lightGrayColor: #ddd;
    --borderRadius: 6px;
    --boxShadow: 0 2px 5px rgba(#333, 0.2);
  }
  
  
  main {
    margin: 3em auto 8em;
    color: var(--foregroundColor);
    text-align: left;
  }
  
  
  .palette {
    display: grid;
    grid: 80px 45px min-content/repeat(5, minmax(50px, 1fr));
    margin-bottom: 1em;
  }
  .palette__main {
    grid-column: span 5;
  }
  .palette h5 {
    grid-column: span 5;
    text-align: left;
    padding: 10px 0;
  }
  .palette.main div:nth-child(1) {
    background: var(--primaryColor);
  }
  .palette.main div:nth-child(2) {
    background: var(--primaryShade1);
  }
  .palette.main div:nth-child(3) {
    background: var(--primaryShade2);
  }
  .palette.main div:nth-child(4) {
    background: var(--primaryShade3);
  }
  .palette.main div:nth-child(5) {
    background: var(--primaryShade4);
  }
  .palette.main div:nth-child(6) {
    background: var(--primaryShade5);
  }
  .palette.secondary div:nth-child(1) {
    background: var(--secondaryColor);
  }
  .palette.secondary div:nth-child(2) {
    background: var(--secondaryShade1);
  }
  .palette.secondary div:nth-child(3) {
    background: var(--secondaryShade2);
  }
  .palette.secondary div:nth-child(4) {
    background: var(--secondaryShade3);
  }
  .palette.secondary div:nth-child(5) {
    background: var(--secondaryShade4);
  }
  .palette.secondary div:nth-child(6) {
    background: var(--secondaryShade5);
  }
  .palette.accent1 div:nth-child(1) {
    background: var(--accentColor);
  }
  .palette.accent1 div:nth-child(2) {
    background: var(--accentShade1);
  }
  .palette.accent1 div:nth-child(3) {
    background: var(--accentShade2);
  }
  .palette.accent1 div:nth-child(4) {
    background: var(--accentShade3);
  }
  .palette.accent1 div:nth-child(5) {
    background: var(--accentShade4);
  }
  .palette.accent1 div:nth-child(6) {
    background: var(--accentShade5);
  }
  .palette.accent2 div:nth-child(1) {
    background: var(--accent2Color);
  }
  .palette.accent2 div:nth-child(2) {
    background: var(--accent2Shade1);
  }
  .palette.accent2 div:nth-child(3) {
    background: var(--accent2Shade2);
  }
  .palette.accent2 div:nth-child(4) {
    background: var(--accent2Shade3);
  }
  .palette.accent2 div:nth-child(5) {
    background: var(--accent2Shade4);
  }
  .palette.accent2 div:nth-child(6) {
    background: var(--accent2Shade5);
  }
  .palette.accent3 div:nth-child(1) {
    background: var(--accent3Color);
  }
  .palette.accent3 div:nth-child(2) {
    background: var(--accent3Shade1);
  }
  .palette.accent3 div:nth-child(3) {
    background: var(--accent3Shade2);
  }
  .palette.accent3 div:nth-child(4) {
    background: var(--accent3Shade3);
  }
  .palette.accent3 div:nth-child(5) {
    background: var(--accent3Shade4);
  }
  .palette.accent3 div:nth-child(6) {
    background: var(--accent3Shade5);
  }
  .palette.neutrals {
    grid-template-rows: repeat(2, 50px) min-content;
    grid-template-columns: repeat(4, 1fr);
  }
  .palette.neutrals div:nth-child(1) {
    background: var(--neutralShade1);
  }
  .palette.neutrals div:nth-child(2) {
    background: var(--neutralShade2);
  }
  .palette.neutrals div:nth-child(3) {
    background: var(--neutralShade3);
  }
  .palette.neutrals div:nth-child(4) {
    background: var(--neutralShade4);
  }
  .palette.neutrals div:nth-child(5) {
    background: var(--neutralShade5);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(6) {
    background: var(--neutralShade6);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(7) {
    background: var(--neutralShade7);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(8) {
    background: var(--neutralShade8);
    grid-row: 2;
  }
  
  
  strong {
    font-weight: 500;
  }
  
  em {
    font-style: italic;
  }
  
  h1 {
    font: 700 48px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h2 {
    font: 700 32px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h3 {
    font: 700 24px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h4 {
    font: 700 20px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h5 {
    font: 500 18px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h6 {
    font: 500 16px/1.2 "Poppins", sans-serif;
    text-transform: uppercase;
  }
  
  
  a.button {
    outline: none;
    width: 100%;
    text-align: center;
    display: inline-block;
    border: none;
    font: 500 16px/1 "Poppins", sans-serif;
    padding: 20px;
    cursor: pointer;
    border-radius: var(--borderRadius);
    background: var(--primaryColor);
    color: var(--backgroundColor);
    position: relative;
    top: 0;
    transition: 0.2s ease;
  }
  a.button:hover, a.button.hover {
    top: -3px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
  a.button:active, a.button.active {
    background: var(--primaryShade4);
    outline: none;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    top: 0;
  }
  a.button.disabled {
    opacity: 0.4;
    user-select: none;
    pointer-events: none;
  }
  a.button.medium {
    padding: 15px 18px;
    width: auto;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  a.button.small {
    padding: 10px 12px;
    width: auto;
    font-size: 14px;
    font-weight: 500;
  }
  a.button.secondary {
    background: var(--secondaryColor);
  }
  a.button.secondary:active, a.button.secondary:focus, a.button.secondary.active {
    background: var(--secondaryShade4);
    outline: none;
  }
  a.button.accent {
    background: var(--accentColor);
  }
  a.button.accent:active, a.button.accent:focus, a.button.accent.active {
    background: var(--accentShade4);
  }
  a.button.accent2 {
    background: var(--accent2Color);
  }
  a.button.accent2:active, a.button.accent2:focus, a.button.accent2.active {
    background: var(--accent2Shade4);
  }
  a.button.accent3 {
    background: var(--accent3Color);
  }
  a.button.accent3:active, a.button.accent3:focus, a.button.accent3.active {
    background: var(--accent3Shade4);
  }
  
  
  
  input.variation {
    display: none;
  }
  input.variation + label {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 70px 20px 20px;
    border-radius: 50%;
    cursor: pointer;
    border: 6px solid #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  #bluepurple + label {
    background: linear-gradient(to left, #673ab7 50%, #03a9f4 50%);
  }
  #bluepurple:checked ~ main {
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #03a9f4;
    --primaryShade1: #e1f5fe;
    --primaryShade2: #b3e5fc;
    --primaryShade3: #4fc3f7;
    --primaryShade4: #0288d1;
    --primaryShade5: #0277bd;
    --secondaryColor: #673ab7;
    --secondaryShade1: #ede7f6;
    --secondaryShade2: #d1c4e9;
    --secondaryShade3: #9575cd;
    --secondaryShade4: #512da8;
    --secondaryShade5: #311b92;
    --accentColor: #009688;
    --accentShade1: #e0f2f1;
    --accentShade2: #b2dfdb;
    --accentShade3: #4db6ac;
    --accentShade4: #00796b;
    --accentShade5: #004d40;
    --accent2Color: #8bc34a;
    --accent2Shade1: #e7f6d5;
    --accent2Shade2: #c5e1a5;
    --accent2Shade3: #aed581;
    --accent2Shade4: #689f38;
    --accent2Shade5: #558b2f;
    --accent3Color: #f44336;
    --accent3Shade1: #ffdde0;
    --accent3Shade2: #ffcdd2;
    --accent3Shade3: #ef9a9a;
    --accent3Shade4: #d32f2f;
    --accent3Shade5: #b71c1c;
  }
  
  #sunset + label {
    background: linear-gradient(to right, #ff9557 50%, #ffcc67 50%);
  }
  #sunset:checked ~ main {
    --canvasColor: #f9f9f9;
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #ff9557;
    --primaryShade1: #ffe2d1;
    --primaryShade2: #ffceb2;
    --primaryShade3: #ffb184;
    --primaryShade4: #e88850;
    --primaryShade5: #d17a48;
    --secondaryColor: #ffcc67;
    --secondaryShade1: #fff1d5;
    --secondaryShade2: #ffde9e;
    --secondaryShade3: #ffd074;
    --secondaryShade4: #e8ba5e;
    --secondaryShade5: #ba954b;
    --accentColor: #4e5166;
    --accentShade1: #cecfd5;
    --accentShade2: #aeafb9;
    --accentShade3: #8e909d;
    --accentShade4: #6e7081;
    --accentShade5: #404354;
    --accent2Color: #588b8b;
    --accent2Shade1: #c2d4d4;
    --accent2Shade2: #a3bfbf;
    --accent2Shade3: #85aaaa;
    --accent2Shade4: #507f7f;
    --accent2Shade5: #497272;
    --accent3Color: #fe5f55;
    --accent3Shade1: #fec4c1;
    --accent3Shade2: #fea7a2;
    --accent3Shade3: #fe7c73;
    --accent3Shade4: #e7574e;
    --accent3Shade5: #b9463e;
  }
  
  #godiva + label {
    background: linear-gradient(to right, #a05793 50%, #a3d858 50%);
  }
  #godiva:checked ~ main {
    --canvasColor: #f9f9f9;
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #a05793;
    --primaryShade1: #e5d1e1;
    --primaryShade2: #d3b2cd;
    --primaryShade3: #b984b0;
    --primaryShade4: #925086;
    --primaryShade5: #834879;
    --secondaryColor: #a3d858;
    --secondaryShade1: #e5f4d1;
    --secondaryShade2: #cce9a3;
    --secondaryShade3: #bce285;
    --secondaryShade4: #95c550;
    --secondaryShade5: #779e41;
    --accentColor: #245e71;
    --accentShade1: #d7e1e5;
    --accentShade2: #afc4cb;
    --accentShade3: #7398a4;
    --accentShade4: #4b7b8a;
    --accentShade5: #1e4d5d;
    --accent2Color: #2aa5a1;
    --accent2Shade1: #d8eeed;
    --accent2Shade2: #9ed6d4;
    --accent2Shade3: #64bdba;
    --accent2Shade4: #279693;
    --accent2Shade5: #1f7976;
    --accent3Color: #92374d;
    --accent3Shade1: #ebdad3;
    --accent3Shade2: #cda4ae;
    --accent3Shade3: #af6d7d;
    --accent3Shade4: #853246;
    --accent3Shade5: #6b2939;
  }
  
  #dark + label {
    background: linear-gradient(to right, #367bc3 50%, #38bfa7 50%);
  }
  #dark:checked ~ main {
    --canvasColor: #2a313b;
    --backgroundColor: #2a313b;
    --foregroundColor: #ebe8d8;
    --primaryColor: #367bc3;
    --primaryShade5: #b5cfe9;
    --primaryShade4: #91b7de;
    --primaryShade3: #5a93cd;
    --primaryShade2: #3270b2;
    --primaryShade1: #285a8e;
    --secondaryColor: #38bfa7;
    --secondaryShade5: #c8ede7;
    --secondaryShade4: #92dccf;
    --secondaryShade3: #6ed0be;
    --secondaryShade2: #33ae98;
    --secondaryShade1: #2e9d89;
    --accentColor: #586994;
    --accentShade5: #d1d6e1;
    --accentShade4: #a3adc4;
    --accentShade3: #7684a7;
    --accentShade2: #49567a;
    --accentShade1: #39435f;
    --accent2Color: #8fe1a2;
    --accent2Shade5: #d6f4dd;
    --accent2Shade4: #c1eecc;
    --accent2Shade3: #a3e6b2;
    --accent2Shade2: #82cd94;
    --accent2Shade1: #76b985;
    --accent3Color: #fe938c;
    --accent3Shade5: #fee1df;
    --accent3Shade4: #fec4c0;
    --accent3Shade3: #fea6a0;
    --accent3Shade2: #e78680;
    --accent3Shade1: #b96b66;
    color: #f1f2eb;
    border-color: #f1f2eb;
  }
  #dark:checked ~ main > section {
    border-color: #f1f2eb;
  }
  #dark:checked ~ main > section > h6 {
    color: #f1f2eb;
  }
  
  #pinkaru + label {
    background: linear-gradient(to right, #f95794 50%, #323da5 50%);
  }
  #pinkaru:checked ~ main {
    border-color: #fff;
    --canvasColor: #2a313b;
    --backgroundColor: #2a313b;
    --foregroundColor: #e3f2fd;
    --primaryColor: #f95794;
    --primaryShade5: #fdd1e1;
    --primaryShade4: #fba3c4;
    --primaryShade3: #fa75a7;
    --primaryShade2: #e35087;
    --primaryShade1: #b6406c;
    --secondaryColor: #323da5;
    --secondaryShade5: #c7cae6;
    --secondaryShade4: #8f95cd;
    --secondaryShade3: #6971bd;
    --secondaryShade2: #2e3896;
    --secondaryShade1: #293288;
    --accentColor: #FFC729;
    --accentShade5: #ffefc4;
    --accentShade4: #ffe08a;
    --accentShade3: #ffd14f;
    --accentShade2: #e8b526;
    --accentShade1: #d1a322;
    --accent2Color: #53dd6c;
    --accent2Shade5: #d0f5d6;
    --accent2Shade4: #a1ecae;
    --accent2Shade3: #72e386;
    --accent2Shade2: #4cc963;
    --accent2Shade1: #3da14f;
    --accent3Color: #f52f57;
    --accent3Shade5: #fcc6d1;
    --accent3Shade4: #f98da3;
    --accent3Shade3: #f65475;
    --accent3Shade2: #df2b50;
    --accent3Shade1: #b32340;
  }
  #pinkaru:checked ~ main > section {
    border-color: #fff;
  }
  #pinkaru:checked ~ main > section > h6 {
    color: #fff;
  }
  
  footer {
    display: grid;
    text-align: center;
    width: 90%;
    margin: 1em auto 4em;
    max-width: 800px;
    align-items: center;
  }
  footer a {
    text-decoration: none;
    color: #333;
    padding: 3px 0;
    border-bottom: 1px dashed;
  }
  footer a:hover {
    border-bottom: 1px solid;
  }
  footer .social a {
    text-decoration: none !important;
    margin-top: 20px;
    margin-left: 10px;
    border-bottom: 0;
    display: inline-block;
  }
  footer .social a:hover {
    color: #666;
  }
  footer .social a .icons {
    display: inline-block;
    font-size: 20px;
  }
  footer.dark, footer.dark a {
    color: #f9f9f9;
  }
  
  .profile {
    position: relative;
    background: var(--backgroundColor);
    color: var(--foregroundColor);
    box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
    border-radius: 10px;
    transition: .2s ease;
  }
  .profile__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .profile__stats__title {
    color: var(--grayColor);
    text-transform: uppercase;
    font-size: 16px;
  }
  .profile a:hover {
    top: 0;
    box-shadow: none;
    background: var(--primaryShade4);
  }
  .profile a:active, .profile a:focus {
    top: 0;
    box-shadow: none;
    background: var(--primaryShade5);
  }
  
  .profile-default {
    min-width: 400px;
    max-width: 450px;
    margin: auto;
    overflow: hidden;
    display: grid;
    grid: 340px auto auto/repeat(3, minmax(80px, 1fr));
    grid-gap: 10px;
  }
  .profile-default .profile__image {
    grid-column: span 3;
  }
  .profile-default .profile__image img {
    border-bottom: 7px solid var(--secondaryColor);
  }
  .profile-default .profile__info {
    grid-column: span 3;
    margin: 20px 25px 0;
  }
  .profile-default .profile__stats {
    margin: 5px 25px;
  }
  .profile-default .profile__cta {
    grid-column: span 3;
    margin: 0 25px 25px;
  }
  
  .profile-smallimg {
    width: 300px;
    border-radius: 10px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    text-align: center;
  }
  .profile-smallimg .profile__image {
    margin-top: -40px;
  }
  .profile-smallimg .profile__image img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 5px solid var(--backgroundColor);
    box-shadow: 0 0 0 7px var(--secondaryColor);
  }
  .profile-smallimg .profile__info {
    margin: 10px 30px 15px;
  }
  .profile-smallimg .profile__stats {
    margin: 0 30px 10px;
  }
  .profile-smallimg .profile__stats:nth-of-type(n+4) {
    display: none;
  }
  .profile-smallimg .profile__cta a {
    border-radius: 0 0 10px 10px;
  }
  
  .profile-long {
    display: grid;
    grid-template-columns: repeat(4, 1fr) 100px;
    padding: 20px 20px 15px;
    min-width: 570px;
  }
  .profile-long .profile__image {
    grid-column: 5 / 6;
    margin-bottom: 10px;
  }
  .profile-long .profile__image img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  .profile-long .profile__info {
    grid-column: 1 / 5;
    grid-row: 1;
    padding: 5px 20px 20px 0;
  }
  .profile-long .profile__stats {
    min-width: 100px;
    padding-top: 20px;
    border-top: 0.5px solid var(--grayColor);
  }
  .profile-long .profile__cta {
    grid-column: span 2;
    border-top: 0.5px solid var(--grayColor);
    padding-top: 15px;
  }
  
  .profile-table {
    display: grid;
    max-width: 780px;
    grid-template-columns: 100px 1fr auto;
    grid-auto-flow: dense;
    overflow: hidden;
  }
  .profile-table .profile__image {
    grid-column: 1;
  }
  .profile-table .profile__stats {
    display: none;
  }
  .profile-table .profile__info {
    grid-column: 2 / 5;
    padding: 20px 15px 20px 20px;
  }
  .profile-table .profile__cta {
    grid-column: 5 / 6;
    align-self: center;
    padding-right: 25px;
  }
  
  .profile-wide {
    display: grid;
    grid-template-columns: auto repeat(3, 1fr);
    grid-auto-flow: dense;
    min-width: 500px;
    max-width: 590px;
  }
  .profile-wide .profile__image {
    padding: 30px 20px 20px;
    grid-row: 1 / 3;
  }
  .profile-wide .profile__image img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid var(--backgroundColor);
    box-shadow: 0 0 0 4px var(--secondaryColor);
  }
  .profile-wide .profile__stats {
    margin-bottom: 12px;
  }
  .profile-wide .profile__info {
    grid-column: span 3;
    padding: 25px 25px 15px 0;
  }
  .profile-wide .profile__cta {
    grid-column: span 4;
  }
  .profile-wide .profile__cta a {
    border-radius: 0 0 10px 10px;
  }
  
  .profile-imgonly {
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    display: grid;
    grid: 390px 0px / 100%;
  }
  .profile-imgonly:hover {
    grid: 334px 56px / 100%;
  }
  .profile-imgonly .profile__image, .profile-imgonly .profile__info {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  .profile-imgonly .profile__image {
    position: relative;
  }
  .profile-imgonly .profile__image:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0));
  }
  .profile-imgonly .profile__stats {
    display: none;
  }
  .profile-imgonly .profile__info {
    z-index: 5;
    grid-row: 1 / 2;
    align-self: end;
    margin: 10px 20px;
    color: #fff;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }
  .profile-imgonly .profile__info p {
    display: none;
  }
  .profile-imgonly .profile__cta a {
    border-radius: 0;
  }
  
  .profile-bigimg {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 400px auto 0px;
    border-radius: 10px;
    width: 650px;
    overflow: hidden;
    margin: auto;
  }
  .profile-bigimg .profile__image {
    grid-column: span 3;
  }
  .profile-bigimg .profile__info {
    grid-column: span 2;
    align-self: center;
    padding: 20px 10px 20px 25px;
  }
  .profile-bigimg .profile__info h3 {
    margin-bottom: 0;
  }
  .profile-bigimg .profile__info__extra {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height .3s ease, opacity .3s ease .3s, margin .3s ease;
  }
  .profile-bigimg .profile__stats {
    display: none;
  }
  .profile-bigimg .profile__cta {
    padding: 20px 20px 20px 0;
    align-self: center;
  }
  .profile-bigimg:hover .profile__info__extra {
    display: block;
    max-height: 200px;
    margin: 10px 0 0;
    opacity: 1;
  }
  
  main {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(4, auto);
    width: 550px;
    justify-content: center;
  }
  
  section:nth-child(1) {
    grid-column: 1 / 3;
    justify-self: end;
    align-self: end;
  }
  section:nth-child(2) {
    grid-column: 3 / 5;
  }
  section:nth-child(3) {
    grid-column: 5 / 7;
    align-self: end;
  }
  section:nth-child(4) {
    grid-column: 1 / 7;
    justify-self: center;
  }
  section:nth-child(5) {
    grid-column: 1 / 4;
    justify-self: end;
  }
  section:nth-child(6) {
    grid-column: 4 / 7;
    align-self: center;
  }
  section:nth-child(7) {
    grid-column: 1 / 7;
  }
  
  #dark:checked ~ main a.button,
  #pinkaru:checked ~ main a.button {
    color: var(--foregroundColor);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  #dark:checked ~ main .button:hover,
  #pinkaru:checked ~ main .button:hover {
    background: var(--primaryShade2);
  }
  #dark:checked ~ main .button:active,
  #pinkaru:checked ~ main .button:active {
    background: var(--primaryShade1);
  }
  #dark:checked ~ main .profile-default img,
  #pinkaru:checked ~ main .profile-default img {
    border-bottom: 7px solid var(--secondaryShade5);
  }
  #dark:checked ~ main .profile-smallimg img,
  #pinkaru:checked ~ main .profile-smallimg img {
    box-shadow: 0 0 0 7px var(--secondaryShade5);
  }
  #dark:checked ~ main .profile-wide img,
  #pinkaru:checked ~ main .profile-wide img {
    box-shadow: 0 0 0 4px var(--secondaryShade5);
  }
        </style>
  
  <section>
          <div class="profile profile-table">
              <div class="profile__image"><img src='${this.myimagen}' alt="Doggo" /></div>
              <div class="profile__info">
                  <h3>${this.mytitle}</h3>
                  <p class="profile__info__extra">${this.mydescripcion}</p>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Type</p>
                  <h5 class="profile__stats__info">Agua/Hielo</h5>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Size</p>
                  <h5>2.5m</h5>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Weight</p>
                  <h5 class="profile__stats__info">202 kg</h5>
              </div>
              <div class="profile__cta"><a class="button">${this.myboton}</a></div>
          </div>
      </section>
  `
    }

}

class Card5 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this.mytitle =  this.getAttribute('title') || 'Tyranitar'
        this.myboton =  this.getAttribute('boton') || 'Conoce más!'
        this.myimagen = this.getAttribute('imagen') || "https://i.pinimg.com/564x/d8/1e/20/d81e20c590810389a54f30946b7403cc.jpg"
        this.mydescripcion = this.getAttribute('descripcion') || "Es un Pokémon de tipo roca/siniestro introducido en la segunda generación. Es la evolución de Pupitar, a partir de la sexta generación puede megaevolucionar en Mega-Tyranitar."
        shadowRoot.innerHTML = `
  
   <style>
          :host {
            --orange: #FFC600;
            --space: 1.5em;
          }
            .btn-container {
            border: 2px dashed var(--orange);
            padding: var(--space);
            text-align: center;
          } 
            .btn {
            background-color: var(--orange);
            border: 0;
            border-radius: 5px;
            color: white;
            padding: var(--space);
            text-transform: uppercase;
          }
  
      :root {
    --canvasColor: #f9f9f9;
  }
  
  body {
    background: var(--canvasColor);
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    line-height: 1.5;
    font-size: 16px;
    text-align: center;
    transition: all .3s ease;
  }
  
  * {
    box-sizing: border-box;
  }
  
  main {
    --neutralShade1: #f2f2f2;
    --neutralShade2: #e8e9e9;
    --neutralShade3: #d1d3d4;
    --neutralShade4: #babdbf;
    --neutralShade5: #808488;
    --neutralShade6: #666a6d;
    --neutralShade7: #4d5052;
    --neutralShade8: #212122;
    --grayColor: #999;
    --lightGrayColor: #ddd;
    --borderRadius: 6px;
    --boxShadow: 0 2px 5px rgba(#333, 0.2);
  }
  
  
  main {
    margin: 3em auto 8em;
    color: var(--foregroundColor);
    text-align: left;
  }
  
  
  .palette {
    display: grid;
    grid: 80px 45px min-content/repeat(5, minmax(50px, 1fr));
    margin-bottom: 1em;
  }
  .palette__main {
    grid-column: span 5;
  }
  .palette h5 {
    grid-column: span 5;
    text-align: left;
    padding: 10px 0;
  }
  .palette.main div:nth-child(1) {
    background: var(--primaryColor);
  }
  .palette.main div:nth-child(2) {
    background: var(--primaryShade1);
  }
  .palette.main div:nth-child(3) {
    background: var(--primaryShade2);
  }
  .palette.main div:nth-child(4) {
    background: var(--primaryShade3);
  }
  .palette.main div:nth-child(5) {
    background: var(--primaryShade4);
  }
  .palette.main div:nth-child(6) {
    background: var(--primaryShade5);
  }
  .palette.secondary div:nth-child(1) {
    background: var(--secondaryColor);
  }
  .palette.secondary div:nth-child(2) {
    background: var(--secondaryShade1);
  }
  .palette.secondary div:nth-child(3) {
    background: var(--secondaryShade2);
  }
  .palette.secondary div:nth-child(4) {
    background: var(--secondaryShade3);
  }
  .palette.secondary div:nth-child(5) {
    background: var(--secondaryShade4);
  }
  .palette.secondary div:nth-child(6) {
    background: var(--secondaryShade5);
  }
  .palette.accent1 div:nth-child(1) {
    background: var(--accentColor);
  }
  .palette.accent1 div:nth-child(2) {
    background: var(--accentShade1);
  }
  .palette.accent1 div:nth-child(3) {
    background: var(--accentShade2);
  }
  .palette.accent1 div:nth-child(4) {
    background: var(--accentShade3);
  }
  .palette.accent1 div:nth-child(5) {
    background: var(--accentShade4);
  }
  .palette.accent1 div:nth-child(6) {
    background: var(--accentShade5);
  }
  .palette.accent2 div:nth-child(1) {
    background: var(--accent2Color);
  }
  .palette.accent2 div:nth-child(2) {
    background: var(--accent2Shade1);
  }
  .palette.accent2 div:nth-child(3) {
    background: var(--accent2Shade2);
  }
  .palette.accent2 div:nth-child(4) {
    background: var(--accent2Shade3);
  }
  .palette.accent2 div:nth-child(5) {
    background: var(--accent2Shade4);
  }
  .palette.accent2 div:nth-child(6) {
    background: var(--accent2Shade5);
  }
  .palette.accent3 div:nth-child(1) {
    background: var(--accent3Color);
  }
  .palette.accent3 div:nth-child(2) {
    background: var(--accent3Shade1);
  }
  .palette.accent3 div:nth-child(3) {
    background: var(--accent3Shade2);
  }
  .palette.accent3 div:nth-child(4) {
    background: var(--accent3Shade3);
  }
  .palette.accent3 div:nth-child(5) {
    background: var(--accent3Shade4);
  }
  .palette.accent3 div:nth-child(6) {
    background: var(--accent3Shade5);
  }
  .palette.neutrals {
    grid-template-rows: repeat(2, 50px) min-content;
    grid-template-columns: repeat(4, 1fr);
  }
  .palette.neutrals div:nth-child(1) {
    background: var(--neutralShade1);
  }
  .palette.neutrals div:nth-child(2) {
    background: var(--neutralShade2);
  }
  .palette.neutrals div:nth-child(3) {
    background: var(--neutralShade3);
  }
  .palette.neutrals div:nth-child(4) {
    background: var(--neutralShade4);
  }
  .palette.neutrals div:nth-child(5) {
    background: var(--neutralShade5);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(6) {
    background: var(--neutralShade6);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(7) {
    background: var(--neutralShade7);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(8) {
    background: var(--neutralShade8);
    grid-row: 2;
  }
  
  
  strong {
    font-weight: 500;
  }
  
  em {
    font-style: italic;
  }
  
  h1 {
    font: 700 48px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h2 {
    font: 700 32px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h3 {
    font: 700 24px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h4 {
    font: 700 20px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h5 {
    font: 500 18px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h6 {
    font: 500 16px/1.2 "Poppins", sans-serif;
    text-transform: uppercase;
  }
  
  
  a.button {
    outline: none;
    width: 100%;
    text-align: center;
    display: inline-block;
    border: none;
    font: 500 16px/1 "Poppins", sans-serif;
    padding: 20px;
    cursor: pointer;
    border-radius: var(--borderRadius);
    background: var(--primaryColor);
    color: var(--backgroundColor);
    position: relative;
    top: 0;
    transition: 0.2s ease;
  }
  a.button:hover, a.button.hover {
    top: -3px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
  a.button:active, a.button.active {
    background: var(--primaryShade4);
    outline: none;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    top: 0;
  }
  a.button.disabled {
    opacity: 0.4;
    user-select: none;
    pointer-events: none;
  }
  a.button.medium {
    padding: 15px 18px;
    width: auto;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  a.button.small {
    padding: 10px 12px;
    width: auto;
    font-size: 14px;
    font-weight: 500;
  }
  a.button.secondary {
    background: var(--secondaryColor);
  }
  a.button.secondary:active, a.button.secondary:focus, a.button.secondary.active {
    background: var(--secondaryShade4);
    outline: none;
  }
  a.button.accent {
    background: var(--accentColor);
  }
  a.button.accent:active, a.button.accent:focus, a.button.accent.active {
    background: var(--accentShade4);
  }
  a.button.accent2 {
    background: var(--accent2Color);
  }
  a.button.accent2:active, a.button.accent2:focus, a.button.accent2.active {
    background: var(--accent2Shade4);
  }
  a.button.accent3 {
    background: var(--accent3Color);
  }
  a.button.accent3:active, a.button.accent3:focus, a.button.accent3.active {
    background: var(--accent3Shade4);
  }
  
  
  
  input.variation {
    display: none;
  }
  input.variation + label {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 70px 20px 20px;
    border-radius: 50%;
    cursor: pointer;
    border: 6px solid #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  #bluepurple + label {
    background: linear-gradient(to left, #673ab7 50%, #03a9f4 50%);
  }
  #bluepurple:checked ~ main {
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #03a9f4;
    --primaryShade1: #e1f5fe;
    --primaryShade2: #b3e5fc;
    --primaryShade3: #4fc3f7;
    --primaryShade4: #0288d1;
    --primaryShade5: #0277bd;
    --secondaryColor: #673ab7;
    --secondaryShade1: #ede7f6;
    --secondaryShade2: #d1c4e9;
    --secondaryShade3: #9575cd;
    --secondaryShade4: #512da8;
    --secondaryShade5: #311b92;
    --accentColor: #009688;
    --accentShade1: #e0f2f1;
    --accentShade2: #b2dfdb;
    --accentShade3: #4db6ac;
    --accentShade4: #00796b;
    --accentShade5: #004d40;
    --accent2Color: #8bc34a;
    --accent2Shade1: #e7f6d5;
    --accent2Shade2: #c5e1a5;
    --accent2Shade3: #aed581;
    --accent2Shade4: #689f38;
    --accent2Shade5: #558b2f;
    --accent3Color: #f44336;
    --accent3Shade1: #ffdde0;
    --accent3Shade2: #ffcdd2;
    --accent3Shade3: #ef9a9a;
    --accent3Shade4: #d32f2f;
    --accent3Shade5: #b71c1c;
  }
  
  #sunset + label {
    background: linear-gradient(to right, #ff9557 50%, #ffcc67 50%);
  }
  #sunset:checked ~ main {
    --canvasColor: #f9f9f9;
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #ff9557;
    --primaryShade1: #ffe2d1;
    --primaryShade2: #ffceb2;
    --primaryShade3: #ffb184;
    --primaryShade4: #e88850;
    --primaryShade5: #d17a48;
    --secondaryColor: #ffcc67;
    --secondaryShade1: #fff1d5;
    --secondaryShade2: #ffde9e;
    --secondaryShade3: #ffd074;
    --secondaryShade4: #e8ba5e;
    --secondaryShade5: #ba954b;
    --accentColor: #4e5166;
    --accentShade1: #cecfd5;
    --accentShade2: #aeafb9;
    --accentShade3: #8e909d;
    --accentShade4: #6e7081;
    --accentShade5: #404354;
    --accent2Color: #588b8b;
    --accent2Shade1: #c2d4d4;
    --accent2Shade2: #a3bfbf;
    --accent2Shade3: #85aaaa;
    --accent2Shade4: #507f7f;
    --accent2Shade5: #497272;
    --accent3Color: #fe5f55;
    --accent3Shade1: #fec4c1;
    --accent3Shade2: #fea7a2;
    --accent3Shade3: #fe7c73;
    --accent3Shade4: #e7574e;
    --accent3Shade5: #b9463e;
  }
  
  #godiva + label {
    background: linear-gradient(to right, #a05793 50%, #a3d858 50%);
  }
  #godiva:checked ~ main {
    --canvasColor: #f9f9f9;
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #a05793;
    --primaryShade1: #e5d1e1;
    --primaryShade2: #d3b2cd;
    --primaryShade3: #b984b0;
    --primaryShade4: #925086;
    --primaryShade5: #834879;
    --secondaryColor: #a3d858;
    --secondaryShade1: #e5f4d1;
    --secondaryShade2: #cce9a3;
    --secondaryShade3: #bce285;
    --secondaryShade4: #95c550;
    --secondaryShade5: #779e41;
    --accentColor: #245e71;
    --accentShade1: #d7e1e5;
    --accentShade2: #afc4cb;
    --accentShade3: #7398a4;
    --accentShade4: #4b7b8a;
    --accentShade5: #1e4d5d;
    --accent2Color: #2aa5a1;
    --accent2Shade1: #d8eeed;
    --accent2Shade2: #9ed6d4;
    --accent2Shade3: #64bdba;
    --accent2Shade4: #279693;
    --accent2Shade5: #1f7976;
    --accent3Color: #92374d;
    --accent3Shade1: #ebdad3;
    --accent3Shade2: #cda4ae;
    --accent3Shade3: #af6d7d;
    --accent3Shade4: #853246;
    --accent3Shade5: #6b2939;
  }
  
  #dark + label {
    background: linear-gradient(to right, #367bc3 50%, #38bfa7 50%);
  }
  #dark:checked ~ main {
    --canvasColor: #2a313b;
    --backgroundColor: #2a313b;
    --foregroundColor: #ebe8d8;
    --primaryColor: #367bc3;
    --primaryShade5: #b5cfe9;
    --primaryShade4: #91b7de;
    --primaryShade3: #5a93cd;
    --primaryShade2: #3270b2;
    --primaryShade1: #285a8e;
    --secondaryColor: #38bfa7;
    --secondaryShade5: #c8ede7;
    --secondaryShade4: #92dccf;
    --secondaryShade3: #6ed0be;
    --secondaryShade2: #33ae98;
    --secondaryShade1: #2e9d89;
    --accentColor: #586994;
    --accentShade5: #d1d6e1;
    --accentShade4: #a3adc4;
    --accentShade3: #7684a7;
    --accentShade2: #49567a;
    --accentShade1: #39435f;
    --accent2Color: #8fe1a2;
    --accent2Shade5: #d6f4dd;
    --accent2Shade4: #c1eecc;
    --accent2Shade3: #a3e6b2;
    --accent2Shade2: #82cd94;
    --accent2Shade1: #76b985;
    --accent3Color: #fe938c;
    --accent3Shade5: #fee1df;
    --accent3Shade4: #fec4c0;
    --accent3Shade3: #fea6a0;
    --accent3Shade2: #e78680;
    --accent3Shade1: #b96b66;
    color: #f1f2eb;
    border-color: #f1f2eb;
  }
  #dark:checked ~ main > section {
    border-color: #f1f2eb;
  }
  #dark:checked ~ main > section > h6 {
    color: #f1f2eb;
  }
  
  #pinkaru + label {
    background: linear-gradient(to right, #f95794 50%, #323da5 50%);
  }
  #pinkaru:checked ~ main {
    border-color: #fff;
    --canvasColor: #2a313b;
    --backgroundColor: #2a313b;
    --foregroundColor: #e3f2fd;
    --primaryColor: #f95794;
    --primaryShade5: #fdd1e1;
    --primaryShade4: #fba3c4;
    --primaryShade3: #fa75a7;
    --primaryShade2: #e35087;
    --primaryShade1: #b6406c;
    --secondaryColor: #323da5;
    --secondaryShade5: #c7cae6;
    --secondaryShade4: #8f95cd;
    --secondaryShade3: #6971bd;
    --secondaryShade2: #2e3896;
    --secondaryShade1: #293288;
    --accentColor: #FFC729;
    --accentShade5: #ffefc4;
    --accentShade4: #ffe08a;
    --accentShade3: #ffd14f;
    --accentShade2: #e8b526;
    --accentShade1: #d1a322;
    --accent2Color: #53dd6c;
    --accent2Shade5: #d0f5d6;
    --accent2Shade4: #a1ecae;
    --accent2Shade3: #72e386;
    --accent2Shade2: #4cc963;
    --accent2Shade1: #3da14f;
    --accent3Color: #f52f57;
    --accent3Shade5: #fcc6d1;
    --accent3Shade4: #f98da3;
    --accent3Shade3: #f65475;
    --accent3Shade2: #df2b50;
    --accent3Shade1: #b32340;
  }
  #pinkaru:checked ~ main > section {
    border-color: #fff;
  }
  #pinkaru:checked ~ main > section > h6 {
    color: #fff;
  }
  
  footer {
    display: grid;
    text-align: center;
    width: 90%;
    margin: 1em auto 4em;
    max-width: 800px;
    align-items: center;
  }
  footer a {
    text-decoration: none;
    color: #333;
    padding: 3px 0;
    border-bottom: 1px dashed;
  }
  footer a:hover {
    border-bottom: 1px solid;
  }
  footer .social a {
    text-decoration: none !important;
    margin-top: 20px;
    margin-left: 10px;
    border-bottom: 0;
    display: inline-block;
  }
  footer .social a:hover {
    color: #666;
  }
  footer .social a .icons {
    display: inline-block;
    font-size: 20px;
  }
  footer.dark, footer.dark a {
    color: #f9f9f9;
  }
  
  .profile {
    position: relative;
    background: var(--backgroundColor);
    color: var(--foregroundColor);
    box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
    border-radius: 10px;
    transition: .2s ease;
  }
  .profile__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .profile__stats__title {
    color: var(--grayColor);
    text-transform: uppercase;
    font-size: 16px;
  }
  .profile a:hover {
    top: 0;
    box-shadow: none;
    background: var(--primaryShade4);
  }
  .profile a:active, .profile a:focus {
    top: 0;
    box-shadow: none;
    background: var(--primaryShade5);
  }
  
  .profile-default {
    min-width: 400px;
    max-width: 450px;
    margin: auto;
    overflow: hidden;
    display: grid;
    grid: 340px auto auto/repeat(3, minmax(80px, 1fr));
    grid-gap: 10px;
  }
  .profile-default .profile__image {
    grid-column: span 3;
  }
  .profile-default .profile__image img {
    border-bottom: 7px solid var(--secondaryColor);
  }
  .profile-default .profile__info {
    grid-column: span 3;
    margin: 20px 25px 0;
  }
  .profile-default .profile__stats {
    margin: 5px 25px;
  }
  .profile-default .profile__cta {
    grid-column: span 3;
    margin: 0 25px 25px;
  }
  
  .profile-smallimg {
    width: 300px;
    border-radius: 10px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    text-align: center;
  }
  .profile-smallimg .profile__image {
    margin-top: -40px;
  }
  .profile-smallimg .profile__image img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 5px solid var(--backgroundColor);
    box-shadow: 0 0 0 7px var(--secondaryColor);
  }
  .profile-smallimg .profile__info {
    margin: 10px 30px 15px;
  }
  .profile-smallimg .profile__stats {
    margin: 0 30px 10px;
  }
  .profile-smallimg .profile__stats:nth-of-type(n+4) {
    display: none;
  }
  .profile-smallimg .profile__cta a {
    border-radius: 0 0 10px 10px;
  }
  
  .profile-long {
    display: grid;
    grid-template-columns: repeat(4, 1fr) 100px;
    padding: 20px 20px 15px;
    min-width: 570px;
  }
  .profile-long .profile__image {
    grid-column: 5 / 6;
    margin-bottom: 10px;
  }
  .profile-long .profile__image img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  .profile-long .profile__info {
    grid-column: 1 / 5;
    grid-row: 1;
    padding: 5px 20px 20px 0;
  }
  .profile-long .profile__stats {
    min-width: 100px;
    padding-top: 20px;
    border-top: 0.5px solid var(--grayColor);
  }
  .profile-long .profile__cta {
    grid-column: span 2;
    border-top: 0.5px solid var(--grayColor);
    padding-top: 15px;
  }
  
  .profile-table {
    display: grid;
    max-width: 780px;
    grid-template-columns: 100px 1fr auto;
    grid-auto-flow: dense;
    overflow: hidden;
  }
  .profile-table .profile__image {
    grid-column: 1;
  }
  .profile-table .profile__stats {
    display: none;
  }
  .profile-table .profile__info {
    grid-column: 2 / 5;
    padding: 20px 15px 20px 20px;
  }
  .profile-table .profile__cta {
    grid-column: 5 / 6;
    align-self: center;
    padding-right: 25px;
  }
  
  .profile-wide {
    display: grid;
    grid-template-columns: auto repeat(3, 1fr);
    grid-auto-flow: dense;
    min-width: 500px;
    max-width: 590px;
  }
  .profile-wide .profile__image {
    padding: 30px 20px 20px;
    grid-row: 1 / 3;
  }
  .profile-wide .profile__image img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid var(--backgroundColor);
    box-shadow: 0 0 0 4px var(--secondaryColor);
  }
  .profile-wide .profile__stats {
    margin-bottom: 12px;
  }
  .profile-wide .profile__info {
    grid-column: span 3;
    padding: 25px 25px 15px 0;
  }
  .profile-wide .profile__cta {
    grid-column: span 4;
  }
  .profile-wide .profile__cta a {
    border-radius: 0 0 10px 10px;
  }
  
  .profile-imgonly {
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    display: grid;
    grid: 390px 0px / 100%;
  }
  .profile-imgonly:hover {
    grid: 334px 56px / 100%;
  }
  .profile-imgonly .profile__image, .profile-imgonly .profile__info {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  .profile-imgonly .profile__image {
    position: relative;
  }
  .profile-imgonly .profile__image:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0));
  }
  .profile-imgonly .profile__stats {
    display: none;
  }
  .profile-imgonly .profile__info {
    z-index: 5;
    grid-row: 1 / 2;
    align-self: end;
    margin: 10px 20px;
    color: #fff;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }
  .profile-imgonly .profile__info p {
    display: none;
  }
  .profile-imgonly .profile__cta a {
    border-radius: 0;
  }
  
  .profile-bigimg {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 400px auto 0px;
    border-radius: 10px;
    width: 650px;
    overflow: hidden;
    margin: auto;
  }
  .profile-bigimg .profile__image {
    grid-column: span 3;
  }
  .profile-bigimg .profile__info {
    grid-column: span 2;
    align-self: center;
    padding: 20px 10px 20px 25px;
  }
  .profile-bigimg .profile__info h3 {
    margin-bottom: 0;
  }
  .profile-bigimg .profile__info__extra {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height .3s ease, opacity .3s ease .3s, margin .3s ease;
  }
  .profile-bigimg .profile__stats {
    display: none;
  }
  .profile-bigimg .profile__cta {
    padding: 20px 20px 20px 0;
    align-self: center;
  }
  .profile-bigimg:hover .profile__info__extra {
    display: block;
    max-height: 200px;
    margin: 10px 0 0;
    opacity: 1;
  }
  
  main {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(4, auto);
    width: 550px;
    justify-content: center;
  }
  
  section:nth-child(1) {
    grid-column: 1 / 3;
    justify-self: end;
    align-self: end;
  }
  section:nth-child(2) {
    grid-column: 3 / 5;
  }
  section:nth-child(3) {
    grid-column: 5 / 7;
    align-self: end;
  }
  section:nth-child(4) {
    grid-column: 1 / 7;
    justify-self: center;
  }
  section:nth-child(5) {
    grid-column: 1 / 4;
    justify-self: end;
  }
  section:nth-child(6) {
    grid-column: 4 / 7;
    align-self: center;
  }
  section:nth-child(7) {
    grid-column: 1 / 7;
  }
  
  #dark:checked ~ main a.button,
  #pinkaru:checked ~ main a.button {
    color: var(--foregroundColor);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  #dark:checked ~ main .button:hover,
  #pinkaru:checked ~ main .button:hover {
    background: var(--primaryShade2);
  }
  #dark:checked ~ main .button:active,
  #pinkaru:checked ~ main .button:active {
    background: var(--primaryShade1);
  }
  #dark:checked ~ main .profile-default img,
  #pinkaru:checked ~ main .profile-default img {
    border-bottom: 7px solid var(--secondaryShade5);
  }
  #dark:checked ~ main .profile-smallimg img,
  #pinkaru:checked ~ main .profile-smallimg img {
    box-shadow: 0 0 0 7px var(--secondaryShade5);
  }
  #dark:checked ~ main .profile-wide img,
  #pinkaru:checked ~ main .profile-wide img {
    box-shadow: 0 0 0 4px var(--secondaryShade5);
  }
        </style>
  
  <section>
          <div class="profile profile-wide">
              <div class="profile__image"><img src='${this.myimagen}' alt="Doggo" /></div>
              <div class="profile__info">
                  <h3>${this.mytitle}</h3>
                  <p class="profile__info__extra">${this.mydescripcion}</p>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Type</p>
                  <h5 class="profile__stats__info">Roca</h5>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Size</p>
                  <h5>2m</h5>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Weight</p>
                  <h5 class="profile__stats__info">4202 kg</h5>
              </div>
              <div class="profile__cta"><a class="button">${this.myboton}</a></div>
          </div>
      </section>
   `
    }

}

class Card6 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this.mytitle =  this.getAttribute('title') || 'Lucario'
        this.myboton =  this.getAttribute('boton') || 'Conoce más!'
        this.myimagen = this.getAttribute('imagen') || "https://i.pinimg.com/564x/95/8e/24/958e24d9e3ab92c06c92e552e37d7a64.jpg"
        this.mydescripcion = this.getAttribute('descripcion') || "Es un Pokémon de tipo lucha/acero introducido en la cuarta generación. Es la evolución de Riolu. Es un Pokémon adelantado por su aparición en la película Lucario y el misterio de Mew (ES), (HA), a partir de la sexta generación puede megaevolucionar en Mega-Lucario."
        shadowRoot.innerHTML = `
   <style>
          :host {
            --orange: #FFC600;
            --space: 1.5em;
          }
            .btn-container {
            border: 2px dashed var(--orange);
            padding: var(--space);
            text-align: center;
          } 
            .btn {
            background-color: var(--orange);
            border: 0;
            border-radius: 5px;
            color: white;
            padding: var(--space);
            text-transform: uppercase;
          }
  
      :root {
    --canvasColor: #f9f9f9;
  }
  
  body {
    background: var(--canvasColor);
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    line-height: 1.5;
    font-size: 16px;
    text-align: center;
    transition: all .3s ease;
  }
  
  * {
    box-sizing: border-box;
  }
  
  main {
    --neutralShade1: #f2f2f2;
    --neutralShade2: #e8e9e9;
    --neutralShade3: #d1d3d4;
    --neutralShade4: #babdbf;
    --neutralShade5: #808488;
    --neutralShade6: #666a6d;
    --neutralShade7: #4d5052;
    --neutralShade8: #212122;
    --grayColor: #999;
    --lightGrayColor: #ddd;
    --borderRadius: 6px;
    --boxShadow: 0 2px 5px rgba(#333, 0.2);
  }
  
  
  main {
    margin: 3em auto 8em;
    color: var(--foregroundColor);
    text-align: left;
  }
  
  
  .palette {
    display: grid;
    grid: 80px 45px min-content/repeat(5, minmax(50px, 1fr));
    margin-bottom: 1em;
  }
  .palette__main {
    grid-column: span 5;
  }
  .palette h5 {
    grid-column: span 5;
    text-align: left;
    padding: 10px 0;
  }
  .palette.main div:nth-child(1) {
    background: var(--primaryColor);
  }
  .palette.main div:nth-child(2) {
    background: var(--primaryShade1);
  }
  .palette.main div:nth-child(3) {
    background: var(--primaryShade2);
  }
  .palette.main div:nth-child(4) {
    background: var(--primaryShade3);
  }
  .palette.main div:nth-child(5) {
    background: var(--primaryShade4);
  }
  .palette.main div:nth-child(6) {
    background: var(--primaryShade5);
  }
  .palette.secondary div:nth-child(1) {
    background: var(--secondaryColor);
  }
  .palette.secondary div:nth-child(2) {
    background: var(--secondaryShade1);
  }
  .palette.secondary div:nth-child(3) {
    background: var(--secondaryShade2);
  }
  .palette.secondary div:nth-child(4) {
    background: var(--secondaryShade3);
  }
  .palette.secondary div:nth-child(5) {
    background: var(--secondaryShade4);
  }
  .palette.secondary div:nth-child(6) {
    background: var(--secondaryShade5);
  }
  .palette.accent1 div:nth-child(1) {
    background: var(--accentColor);
  }
  .palette.accent1 div:nth-child(2) {
    background: var(--accentShade1);
  }
  .palette.accent1 div:nth-child(3) {
    background: var(--accentShade2);
  }
  .palette.accent1 div:nth-child(4) {
    background: var(--accentShade3);
  }
  .palette.accent1 div:nth-child(5) {
    background: var(--accentShade4);
  }
  .palette.accent1 div:nth-child(6) {
    background: var(--accentShade5);
  }
  .palette.accent2 div:nth-child(1) {
    background: var(--accent2Color);
  }
  .palette.accent2 div:nth-child(2) {
    background: var(--accent2Shade1);
  }
  .palette.accent2 div:nth-child(3) {
    background: var(--accent2Shade2);
  }
  .palette.accent2 div:nth-child(4) {
    background: var(--accent2Shade3);
  }
  .palette.accent2 div:nth-child(5) {
    background: var(--accent2Shade4);
  }
  .palette.accent2 div:nth-child(6) {
    background: var(--accent2Shade5);
  }
  .palette.accent3 div:nth-child(1) {
    background: var(--accent3Color);
  }
  .palette.accent3 div:nth-child(2) {
    background: var(--accent3Shade1);
  }
  .palette.accent3 div:nth-child(3) {
    background: var(--accent3Shade2);
  }
  .palette.accent3 div:nth-child(4) {
    background: var(--accent3Shade3);
  }
  .palette.accent3 div:nth-child(5) {
    background: var(--accent3Shade4);
  }
  .palette.accent3 div:nth-child(6) {
    background: var(--accent3Shade5);
  }
  .palette.neutrals {
    grid-template-rows: repeat(2, 50px) min-content;
    grid-template-columns: repeat(4, 1fr);
  }
  .palette.neutrals div:nth-child(1) {
    background: var(--neutralShade1);
  }
  .palette.neutrals div:nth-child(2) {
    background: var(--neutralShade2);
  }
  .palette.neutrals div:nth-child(3) {
    background: var(--neutralShade3);
  }
  .palette.neutrals div:nth-child(4) {
    background: var(--neutralShade4);
  }
  .palette.neutrals div:nth-child(5) {
    background: var(--neutralShade5);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(6) {
    background: var(--neutralShade6);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(7) {
    background: var(--neutralShade7);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(8) {
    background: var(--neutralShade8);
    grid-row: 2;
  }
  
  
  strong {
    font-weight: 500;
  }
  
  em {
    font-style: italic;
  }
  
  h1 {
    font: 700 48px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h2 {
    font: 700 32px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h3 {
    font: 700 24px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h4 {
    font: 700 20px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h5 {
    font: 500 18px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h6 {
    font: 500 16px/1.2 "Poppins", sans-serif;
    text-transform: uppercase;
  }
  
  
  a.button {
    outline: none;
    width: 100%;
    text-align: center;
    display: inline-block;
    border: none;
    font: 500 16px/1 "Poppins", sans-serif;
    padding: 20px;
    cursor: pointer;
    border-radius: var(--borderRadius);
    background: var(--primaryColor);
    color: var(--backgroundColor);
    position: relative;
    top: 0;
    transition: 0.2s ease;
  }
  a.button:hover, a.button.hover {
    top: -3px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
  a.button:active, a.button.active {
    background: var(--primaryShade4);
    outline: none;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    top: 0;
  }
  a.button.disabled {
    opacity: 0.4;
    user-select: none;
    pointer-events: none;
  }
  a.button.medium {
    padding: 15px 18px;
    width: auto;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  a.button.small {
    padding: 10px 12px;
    width: auto;
    font-size: 14px;
    font-weight: 500;
  }
  a.button.secondary {
    background: var(--secondaryColor);
  }
  a.button.secondary:active, a.button.secondary:focus, a.button.secondary.active {
    background: var(--secondaryShade4);
    outline: none;
  }
  a.button.accent {
    background: var(--accentColor);
  }
  a.button.accent:active, a.button.accent:focus, a.button.accent.active {
    background: var(--accentShade4);
  }
  a.button.accent2 {
    background: var(--accent2Color);
  }
  a.button.accent2:active, a.button.accent2:focus, a.button.accent2.active {
    background: var(--accent2Shade4);
  }
  a.button.accent3 {
    background: var(--accent3Color);
  }
  a.button.accent3:active, a.button.accent3:focus, a.button.accent3.active {
    background: var(--accent3Shade4);
  }
  
  
  
  input.variation {
    display: none;
  }
  input.variation + label {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 70px 20px 20px;
    border-radius: 50%;
    cursor: pointer;
    border: 6px solid #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  #bluepurple + label {
    background: linear-gradient(to left, #673ab7 50%, #03a9f4 50%);
  }
  #bluepurple:checked ~ main {
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #03a9f4;
    --primaryShade1: #e1f5fe;
    --primaryShade2: #b3e5fc;
    --primaryShade3: #4fc3f7;
    --primaryShade4: #0288d1;
    --primaryShade5: #0277bd;
    --secondaryColor: #673ab7;
    --secondaryShade1: #ede7f6;
    --secondaryShade2: #d1c4e9;
    --secondaryShade3: #9575cd;
    --secondaryShade4: #512da8;
    --secondaryShade5: #311b92;
    --accentColor: #009688;
    --accentShade1: #e0f2f1;
    --accentShade2: #b2dfdb;
    --accentShade3: #4db6ac;
    --accentShade4: #00796b;
    --accentShade5: #004d40;
    --accent2Color: #8bc34a;
    --accent2Shade1: #e7f6d5;
    --accent2Shade2: #c5e1a5;
    --accent2Shade3: #aed581;
    --accent2Shade4: #689f38;
    --accent2Shade5: #558b2f;
    --accent3Color: #f44336;
    --accent3Shade1: #ffdde0;
    --accent3Shade2: #ffcdd2;
    --accent3Shade3: #ef9a9a;
    --accent3Shade4: #d32f2f;
    --accent3Shade5: #b71c1c;
  }
  
  #sunset + label {
    background: linear-gradient(to right, #ff9557 50%, #ffcc67 50%);
  }
  #sunset:checked ~ main {
    --canvasColor: #f9f9f9;
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #ff9557;
    --primaryShade1: #ffe2d1;
    --primaryShade2: #ffceb2;
    --primaryShade3: #ffb184;
    --primaryShade4: #e88850;
    --primaryShade5: #d17a48;
    --secondaryColor: #ffcc67;
    --secondaryShade1: #fff1d5;
    --secondaryShade2: #ffde9e;
    --secondaryShade3: #ffd074;
    --secondaryShade4: #e8ba5e;
    --secondaryShade5: #ba954b;
    --accentColor: #4e5166;
    --accentShade1: #cecfd5;
    --accentShade2: #aeafb9;
    --accentShade3: #8e909d;
    --accentShade4: #6e7081;
    --accentShade5: #404354;
    --accent2Color: #588b8b;
    --accent2Shade1: #c2d4d4;
    --accent2Shade2: #a3bfbf;
    --accent2Shade3: #85aaaa;
    --accent2Shade4: #507f7f;
    --accent2Shade5: #497272;
    --accent3Color: #fe5f55;
    --accent3Shade1: #fec4c1;
    --accent3Shade2: #fea7a2;
    --accent3Shade3: #fe7c73;
    --accent3Shade4: #e7574e;
    --accent3Shade5: #b9463e;
  }
  
  #godiva + label {
    background: linear-gradient(to right, #a05793 50%, #a3d858 50%);
  }
  #godiva:checked ~ main {
    --canvasColor: #f9f9f9;
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #a05793;
    --primaryShade1: #e5d1e1;
    --primaryShade2: #d3b2cd;
    --primaryShade3: #b984b0;
    --primaryShade4: #925086;
    --primaryShade5: #834879;
    --secondaryColor: #a3d858;
    --secondaryShade1: #e5f4d1;
    --secondaryShade2: #cce9a3;
    --secondaryShade3: #bce285;
    --secondaryShade4: #95c550;
    --secondaryShade5: #779e41;
    --accentColor: #245e71;
    --accentShade1: #d7e1e5;
    --accentShade2: #afc4cb;
    --accentShade3: #7398a4;
    --accentShade4: #4b7b8a;
    --accentShade5: #1e4d5d;
    --accent2Color: #2aa5a1;
    --accent2Shade1: #d8eeed;
    --accent2Shade2: #9ed6d4;
    --accent2Shade3: #64bdba;
    --accent2Shade4: #279693;
    --accent2Shade5: #1f7976;
    --accent3Color: #92374d;
    --accent3Shade1: #ebdad3;
    --accent3Shade2: #cda4ae;
    --accent3Shade3: #af6d7d;
    --accent3Shade4: #853246;
    --accent3Shade5: #6b2939;
  }
  
  #dark + label {
    background: linear-gradient(to right, #367bc3 50%, #38bfa7 50%);
  }
  #dark:checked ~ main {
    --canvasColor: #2a313b;
    --backgroundColor: #2a313b;
    --foregroundColor: #ebe8d8;
    --primaryColor: #367bc3;
    --primaryShade5: #b5cfe9;
    --primaryShade4: #91b7de;
    --primaryShade3: #5a93cd;
    --primaryShade2: #3270b2;
    --primaryShade1: #285a8e;
    --secondaryColor: #38bfa7;
    --secondaryShade5: #c8ede7;
    --secondaryShade4: #92dccf;
    --secondaryShade3: #6ed0be;
    --secondaryShade2: #33ae98;
    --secondaryShade1: #2e9d89;
    --accentColor: #586994;
    --accentShade5: #d1d6e1;
    --accentShade4: #a3adc4;
    --accentShade3: #7684a7;
    --accentShade2: #49567a;
    --accentShade1: #39435f;
    --accent2Color: #8fe1a2;
    --accent2Shade5: #d6f4dd;
    --accent2Shade4: #c1eecc;
    --accent2Shade3: #a3e6b2;
    --accent2Shade2: #82cd94;
    --accent2Shade1: #76b985;
    --accent3Color: #fe938c;
    --accent3Shade5: #fee1df;
    --accent3Shade4: #fec4c0;
    --accent3Shade3: #fea6a0;
    --accent3Shade2: #e78680;
    --accent3Shade1: #b96b66;
    color: #f1f2eb;
    border-color: #f1f2eb;
  }
  #dark:checked ~ main > section {
    border-color: #f1f2eb;
  }
  #dark:checked ~ main > section > h6 {
    color: #f1f2eb;
  }
  
  #pinkaru + label {
    background: linear-gradient(to right, #f95794 50%, #323da5 50%);
  }
  #pinkaru:checked ~ main {
    border-color: #fff;
    --canvasColor: #2a313b;
    --backgroundColor: #2a313b;
    --foregroundColor: #e3f2fd;
    --primaryColor: #f95794;
    --primaryShade5: #fdd1e1;
    --primaryShade4: #fba3c4;
    --primaryShade3: #fa75a7;
    --primaryShade2: #e35087;
    --primaryShade1: #b6406c;
    --secondaryColor: #323da5;
    --secondaryShade5: #c7cae6;
    --secondaryShade4: #8f95cd;
    --secondaryShade3: #6971bd;
    --secondaryShade2: #2e3896;
    --secondaryShade1: #293288;
    --accentColor: #FFC729;
    --accentShade5: #ffefc4;
    --accentShade4: #ffe08a;
    --accentShade3: #ffd14f;
    --accentShade2: #e8b526;
    --accentShade1: #d1a322;
    --accent2Color: #53dd6c;
    --accent2Shade5: #d0f5d6;
    --accent2Shade4: #a1ecae;
    --accent2Shade3: #72e386;
    --accent2Shade2: #4cc963;
    --accent2Shade1: #3da14f;
    --accent3Color: #f52f57;
    --accent3Shade5: #fcc6d1;
    --accent3Shade4: #f98da3;
    --accent3Shade3: #f65475;
    --accent3Shade2: #df2b50;
    --accent3Shade1: #b32340;
  }
  #pinkaru:checked ~ main > section {
    border-color: #fff;
  }
  #pinkaru:checked ~ main > section > h6 {
    color: #fff;
  }
  
  footer {
    display: grid;
    text-align: center;
    width: 90%;
    margin: 1em auto 4em;
    max-width: 800px;
    align-items: center;
  }
  footer a {
    text-decoration: none;
    color: #333;
    padding: 3px 0;
    border-bottom: 1px dashed;
  }
  footer a:hover {
    border-bottom: 1px solid;
  }
  footer .social a {
    text-decoration: none !important;
    margin-top: 20px;
    margin-left: 10px;
    border-bottom: 0;
    display: inline-block;
  }
  footer .social a:hover {
    color: #666;
  }
  footer .social a .icons {
    display: inline-block;
    font-size: 20px;
  }
  footer.dark, footer.dark a {
    color: #f9f9f9;
  }
  
  .profile {
    position: relative;
    background: var(--backgroundColor);
    color: var(--foregroundColor);
    box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
    border-radius: 10px;
    transition: .2s ease;
  }
  .profile__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .profile__stats__title {
    color: var(--grayColor);
    text-transform: uppercase;
    font-size: 16px;
  }
  .profile a:hover {
    top: 0;
    box-shadow: none;
    background: var(--primaryShade4);
  }
  .profile a:active, .profile a:focus {
    top: 0;
    box-shadow: none;
    background: var(--primaryShade5);
  }
  
  .profile-default {
    min-width: 400px;
    max-width: 450px;
    margin: auto;
    overflow: hidden;
    display: grid;
    grid: 340px auto auto/repeat(3, minmax(80px, 1fr));
    grid-gap: 10px;
  }
  .profile-default .profile__image {
    grid-column: span 3;
  }
  .profile-default .profile__image img {
    border-bottom: 7px solid var(--secondaryColor);
  }
  .profile-default .profile__info {
    grid-column: span 3;
    margin: 20px 25px 0;
  }
  .profile-default .profile__stats {
    margin: 5px 25px;
  }
  .profile-default .profile__cta {
    grid-column: span 3;
    margin: 0 25px 25px;
  }
  
  .profile-smallimg {
    width: 300px;
    border-radius: 10px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    text-align: center;
  }
  .profile-smallimg .profile__image {
    margin-top: -40px;
  }
  .profile-smallimg .profile__image img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 5px solid var(--backgroundColor);
    box-shadow: 0 0 0 7px var(--secondaryColor);
  }
  .profile-smallimg .profile__info {
    margin: 10px 30px 15px;
  }
  .profile-smallimg .profile__stats {
    margin: 0 30px 10px;
  }
  .profile-smallimg .profile__stats:nth-of-type(n+4) {
    display: none;
  }
  .profile-smallimg .profile__cta a {
    border-radius: 0 0 10px 10px;
  }
  
  .profile-long {
    display: grid;
    grid-template-columns: repeat(4, 1fr) 100px;
    padding: 20px 20px 15px;
    min-width: 570px;
  }
  .profile-long .profile__image {
    grid-column: 5 / 6;
    margin-bottom: 10px;
  }
  .profile-long .profile__image img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  .profile-long .profile__info {
    grid-column: 1 / 5;
    grid-row: 1;
    padding: 5px 20px 20px 0;
  }
  .profile-long .profile__stats {
    min-width: 100px;
    padding-top: 20px;
    border-top: 0.5px solid var(--grayColor);
  }
  .profile-long .profile__cta {
    grid-column: span 2;
    border-top: 0.5px solid var(--grayColor);
    padding-top: 15px;
  }
  
  .profile-table {
    display: grid;
    max-width: 780px;
    grid-template-columns: 100px 1fr auto;
    grid-auto-flow: dense;
    overflow: hidden;
  }
  .profile-table .profile__image {
    grid-column: 1;
  }
  .profile-table .profile__stats {
    display: none;
  }
  .profile-table .profile__info {
    grid-column: 2 / 5;
    padding: 20px 15px 20px 20px;
  }
  .profile-table .profile__cta {
    grid-column: 5 / 6;
    align-self: center;
    padding-right: 25px;
  }
  
  .profile-wide {
    display: grid;
    grid-template-columns: auto repeat(3, 1fr);
    grid-auto-flow: dense;
    min-width: 500px;
    max-width: 590px;
  }
  .profile-wide .profile__image {
    padding: 30px 20px 20px;
    grid-row: 1 / 3;
  }
  .profile-wide .profile__image img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid var(--backgroundColor);
    box-shadow: 0 0 0 4px var(--secondaryColor);
  }
  .profile-wide .profile__stats {
    margin-bottom: 12px;
  }
  .profile-wide .profile__info {
    grid-column: span 3;
    padding: 25px 25px 15px 0;
  }
  .profile-wide .profile__cta {
    grid-column: span 4;
  }
  .profile-wide .profile__cta a {
    border-radius: 0 0 10px 10px;
  }
  
  .profile-imgonly {
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    display: grid;
    grid: 390px 0px / 100%;
  }
  .profile-imgonly:hover {
    grid: 334px 56px / 100%;
  }
  .profile-imgonly .profile__image, .profile-imgonly .profile__info {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  .profile-imgonly .profile__image {
    position: relative;
  }
  .profile-imgonly .profile__image:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0));
  }
  .profile-imgonly .profile__stats {
    display: none;
  }
  .profile-imgonly .profile__info {
    z-index: 5;
    grid-row: 1 / 2;
    align-self: end;
    margin: 10px 20px;
    color: #fff;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }
  .profile-imgonly .profile__info p {
    display: none;
  }
  .profile-imgonly .profile__cta a {
    border-radius: 0;
  }
  
  .profile-bigimg {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 400px auto 0px;
    border-radius: 10px;
    width: 650px;
    overflow: hidden;
    margin: auto;
  }
  .profile-bigimg .profile__image {
    grid-column: span 3;
  }
  .profile-bigimg .profile__info {
    grid-column: span 2;
    align-self: center;
    padding: 20px 10px 20px 25px;
  }
  .profile-bigimg .profile__info h3 {
    margin-bottom: 0;
  }
  .profile-bigimg .profile__info__extra {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height .3s ease, opacity .3s ease .3s, margin .3s ease;
  }
  .profile-bigimg .profile__stats {
    display: none;
  }
  .profile-bigimg .profile__cta {
    padding: 20px 20px 20px 0;
    align-self: center;
  }
  .profile-bigimg:hover .profile__info__extra {
    display: block;
    max-height: 200px;
    margin: 10px 0 0;
    opacity: 1;
  }
  
  main {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(4, auto);
    width: 550px;
    justify-content: center;
  }
  
  section:nth-child(1) {
    grid-column: 1 / 3;
    justify-self: end;
    align-self: end;
  }
  section:nth-child(2) {
    grid-column: 3 / 5;
  }
  section:nth-child(3) {
    grid-column: 5 / 7;
    align-self: end;
  }
  section:nth-child(4) {
    grid-column: 1 / 7;
    justify-self: center;
  }
  section:nth-child(5) {
    grid-column: 1 / 4;
    justify-self: end;
  }
  section:nth-child(6) {
    grid-column: 4 / 7;
    align-self: center;
  }
  section:nth-child(7) {
    grid-column: 1 / 7;
  }
  
  #dark:checked ~ main a.button,
  #pinkaru:checked ~ main a.button {
    color: var(--foregroundColor);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  #dark:checked ~ main .button:hover,
  #pinkaru:checked ~ main .button:hover {
    background: var(--primaryShade2);
  }
  #dark:checked ~ main .button:active,
  #pinkaru:checked ~ main .button:active {
    background: var(--primaryShade1);
  }
  #dark:checked ~ main .profile-default img,
  #pinkaru:checked ~ main .profile-default img {
    border-bottom: 7px solid var(--secondaryShade5);
  }
  #dark:checked ~ main .profile-smallimg img,
  #pinkaru:checked ~ main .profile-smallimg img {
    box-shadow: 0 0 0 7px var(--secondaryShade5);
  }
  #dark:checked ~ main .profile-wide img,
  #pinkaru:checked ~ main .profile-wide img {
    box-shadow: 0 0 0 4px var(--secondaryShade5);
  }
        </style>
  <section>
          <div class="profile profile-long">
              <div class="profile__image"><img src='${this.myimagen}' alt="Doggo" /></div>
              <div class="profile__info">
                  <h3>${this.mytitle}</h3>
                  <p class="profile__info__extra">${this.mydescripcion}</p>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Type</p>
                  <h5 class="profile__stats__info">Acero</h5>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Size</p>
                  <h5>1.2m</h5>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Weight</p>
                  <h5 class="profile__stats__info">54kg</h5>
              </div>
              <div class="profile__cta"><a class="button">${this.myboton}</a></div>
          </div>
      </section>
  `
    }

}

class Card7 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this.mytitle =  this.getAttribute('title') || 'Gengar'
        this.myboton =  this.getAttribute('boton') || 'Conoce más!'
        this.myimagen = this.getAttribute('imagen') || "https://i.pinimg.com/564x/24/cc/be/24ccbead3516bb60326f00afb08883ba.jpg"
        this.mydescripcion = this.getAttribute('descripcion') || "Es un Pokémon de tipo fantasma/veneno introducido en la primera generación. Es la evolución de Haunter y, a partir de la sexta generación, puede megaevolucionar en Mega-Gengar."
        shadowRoot.innerHTML = `
   <style>
          :host {
            --orange: #FFC600;
            --space: 1.5em;
          }
            .btn-container {
            border: 2px dashed var(--orange);
            padding: var(--space);
            text-align: center;
          } 
            .btn {
            background-color: var(--orange);
            border: 0;
            border-radius: 5px;
            color: white;
            padding: var(--space);
            text-transform: uppercase;
          }
  
      :root {
    --canvasColor: #f9f9f9;
  }
  
  body {
    background: var(--canvasColor);
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    line-height: 1.5;
    font-size: 16px;
    text-align: center;
    transition: all .3s ease;
  }
  
  * {
    box-sizing: border-box;
  }
  
  main {
    --neutralShade1: #f2f2f2;
    --neutralShade2: #e8e9e9;
    --neutralShade3: #d1d3d4;
    --neutralShade4: #babdbf;
    --neutralShade5: #808488;
    --neutralShade6: #666a6d;
    --neutralShade7: #4d5052;
    --neutralShade8: #212122;
    --grayColor: #999;
    --lightGrayColor: #ddd;
    --borderRadius: 6px;
    --boxShadow: 0 2px 5px rgba(#333, 0.2);
  }
  
  
  main {
    margin: 3em auto 8em;
    color: var(--foregroundColor);
    text-align: left;
  }
  
  
  .palette {
    display: grid;
    grid: 80px 45px min-content/repeat(5, minmax(50px, 1fr));
    margin-bottom: 1em;
  }
  .palette__main {
    grid-column: span 5;
  }
  .palette h5 {
    grid-column: span 5;
    text-align: left;
    padding: 10px 0;
  }
  .palette.main div:nth-child(1) {
    background: var(--primaryColor);
  }
  .palette.main div:nth-child(2) {
    background: var(--primaryShade1);
  }
  .palette.main div:nth-child(3) {
    background: var(--primaryShade2);
  }
  .palette.main div:nth-child(4) {
    background: var(--primaryShade3);
  }
  .palette.main div:nth-child(5) {
    background: var(--primaryShade4);
  }
  .palette.main div:nth-child(6) {
    background: var(--primaryShade5);
  }
  .palette.secondary div:nth-child(1) {
    background: var(--secondaryColor);
  }
  .palette.secondary div:nth-child(2) {
    background: var(--secondaryShade1);
  }
  .palette.secondary div:nth-child(3) {
    background: var(--secondaryShade2);
  }
  .palette.secondary div:nth-child(4) {
    background: var(--secondaryShade3);
  }
  .palette.secondary div:nth-child(5) {
    background: var(--secondaryShade4);
  }
  .palette.secondary div:nth-child(6) {
    background: var(--secondaryShade5);
  }
  .palette.accent1 div:nth-child(1) {
    background: var(--accentColor);
  }
  .palette.accent1 div:nth-child(2) {
    background: var(--accentShade1);
  }
  .palette.accent1 div:nth-child(3) {
    background: var(--accentShade2);
  }
  .palette.accent1 div:nth-child(4) {
    background: var(--accentShade3);
  }
  .palette.accent1 div:nth-child(5) {
    background: var(--accentShade4);
  }
  .palette.accent1 div:nth-child(6) {
    background: var(--accentShade5);
  }
  .palette.accent2 div:nth-child(1) {
    background: var(--accent2Color);
  }
  .palette.accent2 div:nth-child(2) {
    background: var(--accent2Shade1);
  }
  .palette.accent2 div:nth-child(3) {
    background: var(--accent2Shade2);
  }
  .palette.accent2 div:nth-child(4) {
    background: var(--accent2Shade3);
  }
  .palette.accent2 div:nth-child(5) {
    background: var(--accent2Shade4);
  }
  .palette.accent2 div:nth-child(6) {
    background: var(--accent2Shade5);
  }
  .palette.accent3 div:nth-child(1) {
    background: var(--accent3Color);
  }
  .palette.accent3 div:nth-child(2) {
    background: var(--accent3Shade1);
  }
  .palette.accent3 div:nth-child(3) {
    background: var(--accent3Shade2);
  }
  .palette.accent3 div:nth-child(4) {
    background: var(--accent3Shade3);
  }
  .palette.accent3 div:nth-child(5) {
    background: var(--accent3Shade4);
  }
  .palette.accent3 div:nth-child(6) {
    background: var(--accent3Shade5);
  }
  .palette.neutrals {
    grid-template-rows: repeat(2, 50px) min-content;
    grid-template-columns: repeat(4, 1fr);
  }
  .palette.neutrals div:nth-child(1) {
    background: var(--neutralShade1);
  }
  .palette.neutrals div:nth-child(2) {
    background: var(--neutralShade2);
  }
  .palette.neutrals div:nth-child(3) {
    background: var(--neutralShade3);
  }
  .palette.neutrals div:nth-child(4) {
    background: var(--neutralShade4);
  }
  .palette.neutrals div:nth-child(5) {
    background: var(--neutralShade5);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(6) {
    background: var(--neutralShade6);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(7) {
    background: var(--neutralShade7);
    grid-row: 2;
  }
  .palette.neutrals div:nth-child(8) {
    background: var(--neutralShade8);
    grid-row: 2;
  }
  
  
  strong {
    font-weight: 500;
  }
  
  em {
    font-style: italic;
  }
  
  h1 {
    font: 700 48px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h2 {
    font: 700 32px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h3 {
    font: 700 24px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h4 {
    font: 700 20px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h5 {
    font: 500 18px/1.2 "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  
  h6 {
    font: 500 16px/1.2 "Poppins", sans-serif;
    text-transform: uppercase;
  }
  
  
  a.button {
    outline: none;
    width: 100%;
    text-align: center;
    display: inline-block;
    border: none;
    font: 500 16px/1 "Poppins", sans-serif;
    padding: 20px;
    cursor: pointer;
    border-radius: var(--borderRadius);
    background: var(--primaryColor);
    color: var(--backgroundColor);
    position: relative;
    top: 0;
    transition: 0.2s ease;
  }
  a.button:hover, a.button.hover {
    top: -3px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
  a.button:active, a.button.active {
    background: var(--primaryShade4);
    outline: none;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    top: 0;
  }
  a.button.disabled {
    opacity: 0.4;
    user-select: none;
    pointer-events: none;
  }
  a.button.medium {
    padding: 15px 18px;
    width: auto;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  a.button.small {
    padding: 10px 12px;
    width: auto;
    font-size: 14px;
    font-weight: 500;
  }
  a.button.secondary {
    background: var(--secondaryColor);
  }
  a.button.secondary:active, a.button.secondary:focus, a.button.secondary.active {
    background: var(--secondaryShade4);
    outline: none;
  }
  a.button.accent {
    background: var(--accentColor);
  }
  a.button.accent:active, a.button.accent:focus, a.button.accent.active {
    background: var(--accentShade4);
  }
  a.button.accent2 {
    background: var(--accent2Color);
  }
  a.button.accent2:active, a.button.accent2:focus, a.button.accent2.active {
    background: var(--accent2Shade4);
  }
  a.button.accent3 {
    background: var(--accent3Color);
  }
  a.button.accent3:active, a.button.accent3:focus, a.button.accent3.active {
    background: var(--accent3Shade4);
  }
  
  
  
  input.variation {
    display: none;
  }
  input.variation + label {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 70px 20px 20px;
    border-radius: 50%;
    cursor: pointer;
    border: 6px solid #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  #bluepurple + label {
    background: linear-gradient(to left, #673ab7 50%, #03a9f4 50%);
  }
  #bluepurple:checked ~ main {
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #03a9f4;
    --primaryShade1: #e1f5fe;
    --primaryShade2: #b3e5fc;
    --primaryShade3: #4fc3f7;
    --primaryShade4: #0288d1;
    --primaryShade5: #0277bd;
    --secondaryColor: #673ab7;
    --secondaryShade1: #ede7f6;
    --secondaryShade2: #d1c4e9;
    --secondaryShade3: #9575cd;
    --secondaryShade4: #512da8;
    --secondaryShade5: #311b92;
    --accentColor: #009688;
    --accentShade1: #e0f2f1;
    --accentShade2: #b2dfdb;
    --accentShade3: #4db6ac;
    --accentShade4: #00796b;
    --accentShade5: #004d40;
    --accent2Color: #8bc34a;
    --accent2Shade1: #e7f6d5;
    --accent2Shade2: #c5e1a5;
    --accent2Shade3: #aed581;
    --accent2Shade4: #689f38;
    --accent2Shade5: #558b2f;
    --accent3Color: #f44336;
    --accent3Shade1: #ffdde0;
    --accent3Shade2: #ffcdd2;
    --accent3Shade3: #ef9a9a;
    --accent3Shade4: #d32f2f;
    --accent3Shade5: #b71c1c;
  }
  
  #sunset + label {
    background: linear-gradient(to right, #ff9557 50%, #ffcc67 50%);
  }
  #sunset:checked ~ main {
    --canvasColor: #f9f9f9;
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #ff9557;
    --primaryShade1: #ffe2d1;
    --primaryShade2: #ffceb2;
    --primaryShade3: #ffb184;
    --primaryShade4: #e88850;
    --primaryShade5: #d17a48;
    --secondaryColor: #ffcc67;
    --secondaryShade1: #fff1d5;
    --secondaryShade2: #ffde9e;
    --secondaryShade3: #ffd074;
    --secondaryShade4: #e8ba5e;
    --secondaryShade5: #ba954b;
    --accentColor: #4e5166;
    --accentShade1: #cecfd5;
    --accentShade2: #aeafb9;
    --accentShade3: #8e909d;
    --accentShade4: #6e7081;
    --accentShade5: #404354;
    --accent2Color: #588b8b;
    --accent2Shade1: #c2d4d4;
    --accent2Shade2: #a3bfbf;
    --accent2Shade3: #85aaaa;
    --accent2Shade4: #507f7f;
    --accent2Shade5: #497272;
    --accent3Color: #fe5f55;
    --accent3Shade1: #fec4c1;
    --accent3Shade2: #fea7a2;
    --accent3Shade3: #fe7c73;
    --accent3Shade4: #e7574e;
    --accent3Shade5: #b9463e;
  }
  
  #godiva + label {
    background: linear-gradient(to right, #a05793 50%, #a3d858 50%);
  }
  #godiva:checked ~ main {
    --canvasColor: #f9f9f9;
    --backgroundColor: #fff;
    --foregroundColor: #111;
    --primaryColor: #a05793;
    --primaryShade1: #e5d1e1;
    --primaryShade2: #d3b2cd;
    --primaryShade3: #b984b0;
    --primaryShade4: #925086;
    --primaryShade5: #834879;
    --secondaryColor: #a3d858;
    --secondaryShade1: #e5f4d1;
    --secondaryShade2: #cce9a3;
    --secondaryShade3: #bce285;
    --secondaryShade4: #95c550;
    --secondaryShade5: #779e41;
    --accentColor: #245e71;
    --accentShade1: #d7e1e5;
    --accentShade2: #afc4cb;
    --accentShade3: #7398a4;
    --accentShade4: #4b7b8a;
    --accentShade5: #1e4d5d;
    --accent2Color: #2aa5a1;
    --accent2Shade1: #d8eeed;
    --accent2Shade2: #9ed6d4;
    --accent2Shade3: #64bdba;
    --accent2Shade4: #279693;
    --accent2Shade5: #1f7976;
    --accent3Color: #92374d;
    --accent3Shade1: #ebdad3;
    --accent3Shade2: #cda4ae;
    --accent3Shade3: #af6d7d;
    --accent3Shade4: #853246;
    --accent3Shade5: #6b2939;
  }
  
  #dark + label {
    background: linear-gradient(to right, #367bc3 50%, #38bfa7 50%);
  }
  #dark:checked ~ main {
    --canvasColor: #2a313b;
    --backgroundColor: #2a313b;
    --foregroundColor: #ebe8d8;
    --primaryColor: #367bc3;
    --primaryShade5: #b5cfe9;
    --primaryShade4: #91b7de;
    --primaryShade3: #5a93cd;
    --primaryShade2: #3270b2;
    --primaryShade1: #285a8e;
    --secondaryColor: #38bfa7;
    --secondaryShade5: #c8ede7;
    --secondaryShade4: #92dccf;
    --secondaryShade3: #6ed0be;
    --secondaryShade2: #33ae98;
    --secondaryShade1: #2e9d89;
    --accentColor: #586994;
    --accentShade5: #d1d6e1;
    --accentShade4: #a3adc4;
    --accentShade3: #7684a7;
    --accentShade2: #49567a;
    --accentShade1: #39435f;
    --accent2Color: #8fe1a2;
    --accent2Shade5: #d6f4dd;
    --accent2Shade4: #c1eecc;
    --accent2Shade3: #a3e6b2;
    --accent2Shade2: #82cd94;
    --accent2Shade1: #76b985;
    --accent3Color: #fe938c;
    --accent3Shade5: #fee1df;
    --accent3Shade4: #fec4c0;
    --accent3Shade3: #fea6a0;
    --accent3Shade2: #e78680;
    --accent3Shade1: #b96b66;
    color: #f1f2eb;
    border-color: #f1f2eb;
  }
  #dark:checked ~ main > section {
    border-color: #f1f2eb;
  }
  #dark:checked ~ main > section > h6 {
    color: #f1f2eb;
  }
  
  #pinkaru + label {
    background: linear-gradient(to right, #f95794 50%, #323da5 50%);
  }
  #pinkaru:checked ~ main {
    border-color: #fff;
    --canvasColor: #2a313b;
    --backgroundColor: #2a313b;
    --foregroundColor: #e3f2fd;
    --primaryColor: #f95794;
    --primaryShade5: #fdd1e1;
    --primaryShade4: #fba3c4;
    --primaryShade3: #fa75a7;
    --primaryShade2: #e35087;
    --primaryShade1: #b6406c;
    --secondaryColor: #323da5;
    --secondaryShade5: #c7cae6;
    --secondaryShade4: #8f95cd;
    --secondaryShade3: #6971bd;
    --secondaryShade2: #2e3896;
    --secondaryShade1: #293288;
    --accentColor: #FFC729;
    --accentShade5: #ffefc4;
    --accentShade4: #ffe08a;
    --accentShade3: #ffd14f;
    --accentShade2: #e8b526;
    --accentShade1: #d1a322;
    --accent2Color: #53dd6c;
    --accent2Shade5: #d0f5d6;
    --accent2Shade4: #a1ecae;
    --accent2Shade3: #72e386;
    --accent2Shade2: #4cc963;
    --accent2Shade1: #3da14f;
    --accent3Color: #f52f57;
    --accent3Shade5: #fcc6d1;
    --accent3Shade4: #f98da3;
    --accent3Shade3: #f65475;
    --accent3Shade2: #df2b50;
    --accent3Shade1: #b32340;
  }
  #pinkaru:checked ~ main > section {
    border-color: #fff;
  }
  #pinkaru:checked ~ main > section > h6 {
    color: #fff;
  }
  
  footer {
    display: grid;
    text-align: center;
    width: 90%;
    margin: 1em auto 4em;
    max-width: 800px;
    align-items: center;
  }
  footer a {
    text-decoration: none;
    color: #333;
    padding: 3px 0;
    border-bottom: 1px dashed;
  }
  footer a:hover {
    border-bottom: 1px solid;
  }
  footer .social a {
    text-decoration: none !important;
    margin-top: 20px;
    margin-left: 10px;
    border-bottom: 0;
    display: inline-block;
  }
  footer .social a:hover {
    color: #666;
  }
  footer .social a .icons {
    display: inline-block;
    font-size: 20px;
  }
  footer.dark, footer.dark a {
    color: #f9f9f9;
  }
  
  .profile {
    position: relative;
    background: var(--backgroundColor);
    color: var(--foregroundColor);
    box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
    border-radius: 10px;
    transition: .2s ease;
  }
  .profile__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .profile__stats__title {
    color: var(--grayColor);
    text-transform: uppercase;
    font-size: 16px;
  }
  .profile a:hover {
    top: 0;
    box-shadow: none;
    background: var(--primaryShade4);
  }
  .profile a:active, .profile a:focus {
    top: 0;
    box-shadow: none;
    background: var(--primaryShade5);
  }
  
  .profile-default {
    min-width: 400px;
    max-width: 450px;
    margin: auto;
    overflow: hidden;
    display: grid;
    grid: 340px auto auto/repeat(3, minmax(80px, 1fr));
    grid-gap: 10px;
  }
  .profile-default .profile__image {
    grid-column: span 3;
  }
  .profile-default .profile__image img {
    border-bottom: 7px solid var(--secondaryColor);
  }
  .profile-default .profile__info {
    grid-column: span 3;
    margin: 20px 25px 0;
  }
  .profile-default .profile__stats {
    margin: 5px 25px;
  }
  .profile-default .profile__cta {
    grid-column: span 3;
    margin: 0 25px 25px;
  }
  
  .profile-smallimg {
    width: 300px;
    border-radius: 10px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    text-align: center;
  }
  .profile-smallimg .profile__image {
    margin-top: -40px;
  }
  .profile-smallimg .profile__image img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 5px solid var(--backgroundColor);
    box-shadow: 0 0 0 7px var(--secondaryColor);
  }
  .profile-smallimg .profile__info {
    margin: 10px 30px 15px;
  }
  .profile-smallimg .profile__stats {
    margin: 0 30px 10px;
  }
  .profile-smallimg .profile__stats:nth-of-type(n+4) {
    display: none;
  }
  .profile-smallimg .profile__cta a {
    border-radius: 0 0 10px 10px;
  }
  
  .profile-long {
    display: grid;
    grid-template-columns: repeat(4, 1fr) 100px;
    padding: 20px 20px 15px;
    min-width: 570px;
  }
  .profile-long .profile__image {
    grid-column: 5 / 6;
    margin-bottom: 10px;
  }
  .profile-long .profile__image img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  .profile-long .profile__info {
    grid-column: 1 / 5;
    grid-row: 1;
    padding: 5px 20px 20px 0;
  }
  .profile-long .profile__stats {
    min-width: 100px;
    padding-top: 20px;
    border-top: 0.5px solid var(--grayColor);
  }
  .profile-long .profile__cta {
    grid-column: span 2;
    border-top: 0.5px solid var(--grayColor);
    padding-top: 15px;
  }
  
  .profile-table {
    display: grid;
    max-width: 780px;
    grid-template-columns: 100px 1fr auto;
    grid-auto-flow: dense;
    overflow: hidden;
  }
  .profile-table .profile__image {
    grid-column: 1;
  }
  .profile-table .profile__stats {
    display: none;
  }
  .profile-table .profile__info {
    grid-column: 2 / 5;
    padding: 20px 15px 20px 20px;
  }
  .profile-table .profile__cta {
    grid-column: 5 / 6;
    align-self: center;
    padding-right: 25px;
  }
  
  .profile-wide {
    display: grid;
    grid-template-columns: auto repeat(3, 1fr);
    grid-auto-flow: dense;
    min-width: 500px;
    max-width: 590px;
  }
  .profile-wide .profile__image {
    padding: 30px 20px 20px;
    grid-row: 1 / 3;
  }
  .profile-wide .profile__image img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid var(--backgroundColor);
    box-shadow: 0 0 0 4px var(--secondaryColor);
  }
  .profile-wide .profile__stats {
    margin-bottom: 12px;
  }
  .profile-wide .profile__info {
    grid-column: span 3;
    padding: 25px 25px 15px 0;
  }
  .profile-wide .profile__cta {
    grid-column: span 4;
  }
  .profile-wide .profile__cta a {
    border-radius: 0 0 10px 10px;
  }
  
  .profile-imgonly {
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    display: grid;
    grid: 390px 0px / 100%;
  }
  .profile-imgonly:hover {
    grid: 334px 56px / 100%;
  }
  .profile-imgonly .profile__image, .profile-imgonly .profile__info {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  .profile-imgonly .profile__image {
    position: relative;
  }
  .profile-imgonly .profile__image:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0));
  }
  .profile-imgonly .profile__stats {
    display: none;
  }
  .profile-imgonly .profile__info {
    z-index: 5;
    grid-row: 1 / 2;
    align-self: end;
    margin: 10px 20px;
    color: #fff;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }
  .profile-imgonly .profile__info p {
    display: none;
  }
  .profile-imgonly .profile__cta a {
    border-radius: 0;
  }
  
  .profile-bigimg {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 400px auto 0px;
    border-radius: 10px;
    width: 650px;
    overflow: hidden;
    margin: auto;
  }
  .profile-bigimg .profile__image {
    grid-column: span 3;
  }
  .profile-bigimg .profile__info {
    grid-column: span 2;
    align-self: center;
    padding: 20px 10px 20px 25px;
  }
  .profile-bigimg .profile__info h3 {
    margin-bottom: 0;
  }
  .profile-bigimg .profile__info__extra {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height .3s ease, opacity .3s ease .3s, margin .3s ease;
  }
  .profile-bigimg .profile__stats {
    display: none;
  }
  .profile-bigimg .profile__cta {
    padding: 20px 20px 20px 0;
    align-self: center;
  }
  .profile-bigimg:hover .profile__info__extra {
    display: block;
    max-height: 200px;
    margin: 10px 0 0;
    opacity: 1;
  }
  
  main {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(4, auto);
    width: 550px;
    justify-content: center;
  }
  
  section:nth-child(1) {
    grid-column: 1 / 3;
    justify-self: end;
    align-self: end;
  }
  section:nth-child(2) {
    grid-column: 3 / 5;
  }
  section:nth-child(3) {
    grid-column: 5 / 7;
    align-self: end;
  }
  section:nth-child(4) {
    grid-column: 1 / 7;
    justify-self: center;
  }
  section:nth-child(5) {
    grid-column: 1 / 4;
    justify-self: end;
  }
  section:nth-child(6) {
    grid-column: 4 / 7;
    align-self: center;
  }
  section:nth-child(7) {
    grid-column: 1 / 7;
  }
  
  #dark:checked ~ main a.button,
  #pinkaru:checked ~ main a.button {
    color: var(--foregroundColor);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  #dark:checked ~ main .button:hover,
  #pinkaru:checked ~ main .button:hover {
    background: var(--primaryShade2);
  }
  #dark:checked ~ main .button:active,
  #pinkaru:checked ~ main .button:active {
    background: var(--primaryShade1);
  }
  #dark:checked ~ main .profile-default img,
  #pinkaru:checked ~ main .profile-default img {
    border-bottom: 7px solid var(--secondaryShade5);
  }
  #dark:checked ~ main .profile-smallimg img,
  #pinkaru:checked ~ main .profile-smallimg img {
    box-shadow: 0 0 0 7px var(--secondaryShade5);
  }
  #dark:checked ~ main .profile-wide img,
  #pinkaru:checked ~ main .profile-wide img {
    box-shadow: 0 0 0 4px var(--secondaryShade5);
  }
        </style>
  
  <section>
          <div class="profile profile-bigimg">
              <div class="profile__image"><img src='${this.myimagen}' alt="Doggo" /></div>
              <div class="profile__info">
                  <h3>${this.mytitle}</h3>
                  <p class="profile__info__extra">${this.mydescripcion}</p>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Type</p>
                  <h5 class="profile__stats__info">Fantasma</h5>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Size</p>
                  <h5>1.5m</h5>
              </div>
              <div class="profile__stats">
                  <p class="profile__stats__title">Weight</p>
                  <h5 class="profile__stats__info">40kg</h5>
              </div>
              <div class="profile__cta"><a class="button">${this.myboton}</a></div>
          </div>
      </section>
  
  `
    }

}



