export class MenuPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });

    const styles = document.createElement('style');
    this.root.appendChild(styles);

    async function loadCSS() {
      try {
        const request = await fetch('/components/MenuPage.css');
        const css = await request.text();
        styles.textContent = css;
      } catch (error) {
        console.error(error, 'Error loading CSS');
      } finally {
        console.log('Done loading CSS');
      }
    }
    loadCSS();
  }

  //? When the component is added to the DOM
  connectedCallback() {
    console.log('MenuPage added to the DOM');
    const template = document.getElementById('menu-page-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    //* Listen for the appmenuchange event
    window.addEventListener('appmenuchange', () => {
      this.render();
    });
  }

  render() {
    if (app.store.menu) {
      this.root.querySelector('#menu').innerHTML = '';
      for (let category of app.store.menu) {
        const liCategory = document.createElement('li');
        liCategory.innerHTML = `
          <h3>${category.name}</h3>
          <ul class='category'>
          </ul>
        `;
        this.root.querySelector('#menu').appendChild(liCategory);

        category.products.forEach((product) => {
          const item = document.createElement('product-item');
          item.dataset.product = JSON.stringify(product);

          liCategory.querySelector('ul').appendChild(item);
        });
      }
    } else {
      this.root.querySelector('#menu').innerHTML = `
        <div class="loading">
          <div class="spinner">
            <p>Loading....</p>
          </div>
        </div>
      `;
    }
  }
}
customElements.define('menu-page', MenuPage);
