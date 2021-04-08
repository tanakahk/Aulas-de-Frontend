var App = {

  init: function() {
    console.log("Inicio do app");
    this.controllers.createElements();
    console.log("Fim do app");
  },

  events: events,
  controllers: controllers,
  elements: elements,
  
};

App.init();