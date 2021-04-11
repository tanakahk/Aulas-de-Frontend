var App = {
    init: function() {
        console.log("Inicio do app");
        this.controllers.createElements();

        /* console.log(this.store.state.products);
        for (var i=0; i<this.store.state.products.length; i++) {
            var product = this.store.state.products[i];
            console.log("[]...", product);
        } */

        this.controllers.renderAllProducts();

        console.log("Fim do app");
    },


    // store: {},
    store: store, //quarta forma de declarar

    // events: {},
    events: events, 

    // controllers: {},
    controllers: controllers, 

    // elements: {},
    elements: elements, 
};

// App.store = {}; // é a mesma coisa que colocar ele lá em cima (segunda forma)
/* App.store = store;
App.elements = elements; */ // terceira forma de declarar 

App.init();