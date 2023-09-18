import API from './API.js';

export async function loadData() {
  try {
    app.store.menu = await API.fetchMenu();
  } catch (error) {
    console.error(error, 'Error loading data');
  } finally {
    console.log('Done loading data');
  }
}

export async function getProductById(id) {
  try {
    if (app.store.menu == null) {
      await loadData();
    }
    for (let c of app.store.menu) {
      for (let p of c.products) {
        if (p.id == id) {
          return p;
        }
      }
    }
    return null;
  } catch (error) {
    console.error(error, 'Error loading product by ID');
  } finally {
    console.log('Done loading product by ID');
  }
}
