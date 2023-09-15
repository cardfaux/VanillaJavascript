export class MenuPage extends HTMLElement {
  constructor() {
    super();
  }

  //? When the component is added to the DOM
  connectedCallback() {
    console.log('MenuPage added to the DOM');
    const template = document.getElementById('menu-page-template');
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
}
customElements.define('menu-page', MenuPage);
