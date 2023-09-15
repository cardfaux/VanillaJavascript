const API = {
  // url: "https://firtman.github.io/coffeemasters/api/menu.json",
  url: '/data/menu.json',
  fetchMenu: async () => {
    try {
      const result = await fetch(API.url);
      return await result.json();
    } catch (error) {
      console.error(error, 'Error fetching menu');
    } finally {
      console.log('Done fetching menu');
    }
  },
};

export default API;
