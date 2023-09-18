import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

//? Link my web components
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';
import ProductItem from './components/ProductItem.js';

window.app = {};
app.store = Store;
app.router = Router;

//? It's better to wait for the event DOMContentLoaded for manipulating the DOM
window.addEventListener('DOMContentLoaded', async () => {
  app.router.init();
  loadData();
});
