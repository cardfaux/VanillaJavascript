const Router = {
  init: () => {
    console.log('Router initialized');
    document.querySelectorAll('a.navlink').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(link, 'was clicked');
        const href = event.target.getAttribute('href');
        Router.go(href);
      });
    });
    // Event handler for URL changes
    window.addEventListener('popstate', (event) => {
      console.log('URL changed to', location.pathname);
      Router.go(event.state.route, false);
    });
    // Process initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log('Navigating to', route);
    if (addToHistory) {
      history.pushState({ route }, '', route);
    }
    let pageElement = null;
    switch (route) {
      case '/':
        pageElement = document.createElement('menu-page');
        break;
      case '/order':
        pageElement = document.createElement('order-page');
        break;
      default:
        if (route.startsWith('/product-')) {
          pageElement = document.createElement('details-page');
          pageElement.dataset.productId = route.substring(route.lastIndexOf('-') + 1);
        }
        break;
    }
    if (pageElement) {
      //document.querySelector('main').children[0].remove();
      const cache = document.querySelector('main');
      cache.innerHTML = '';
      cache.appendChild(pageElement);
      window.screenX = 0;
      window.screenY = 0;
    }

    window.scrollX = 0;
  },
};

export default Router;
