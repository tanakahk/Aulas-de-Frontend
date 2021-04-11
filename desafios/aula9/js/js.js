var App = {

  init: function() {
    console.log("Inicio do app");
    this.controllers.createElements();
    this.controllers.renderAllProducts();
    console.log("Fim do app");
  },

  store: store,
  events: events,
  controllers: controllers,
  elements: elements,
  
};

App.init();