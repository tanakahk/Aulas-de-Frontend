var App = {

  init: function() {
    console.log("Inicio do app");
    this.controllers.createElements();
    this.controllers.renderAllProducts();
    console.log("Fim do app");
  },

  // Ajudadores do código, pedaços de lógica
  helpers: helpers,

  // O estado da aplicação, onde guarda os dados não persistentes.
  store: store,

  // Escutar os eventos do navegador
  events: events,

  // Controla o site 
  // controllers: controllers,
  // o controller foi injetado direto no App, então ele tem q ser referênciado no App antes do js.js e no arquivo controllers.js o início da primeira linha muda de "var controllers" para "App.controllers"

  // Onde guarda a referência do elemento
  elements: elements,
};
