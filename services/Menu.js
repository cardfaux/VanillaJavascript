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
