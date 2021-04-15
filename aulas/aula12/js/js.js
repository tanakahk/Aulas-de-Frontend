var App = {

  init: function() {
    console.log("Inicio do app");
    this.controllers.createElements();
    this.controllers.renderAllProducts();
    console.log("Fim do app");
  },

  helpers: {
    childFinder: function(productId, key){
      const div = App.elements.products[productId];

      for (let i = 0; i < div.childNodes.length; i++) {
        var child = div.childNodes[i];

        if (child.getAttribute("key") === key){
          return child;
        }
      }
    }
  },

  store: store,
  events: events,
  controllers: controllers,
  elements: elements,
  
};

App.init();