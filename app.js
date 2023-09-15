import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';

window.app = {};
app.store = Store;

//? It's better to wait for the event DOMContentLoaded for manipulating the DOM
window.addEventListener('DOMContentLoaded', async () => {
  loadData();
});
