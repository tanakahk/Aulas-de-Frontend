var controllers = {
  createElements: function () {
    console.log("Vamos renderizar os componentes");

    this.setStyle(App.elements.app, {
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    });

    // -------------------- Header
    this.setStyle(App.elements.header, {
        display: "flex",
        justifyContent: "flex-end",
    });

    App.elements.header.innerHTML = "Header";
    App.elements.app.appendChild(App.elements.header);

    // -------------------- Body
    this.setStyle(App.elements.body, {
        border: "1px solid black",
        flexGrow: 1.
    });

    App.elements.body.innerHTML = "Body";
    App.elements.app.appendChild(App.elements.body);

    // this.setStyle(App.elements.bodyProducts, {border: "1px solid blue"});
    App.elements.bodyProducts.classList.add("product-container");
    App.elements.body.appendChild(App.elements.bodyProducts);

    // -------------------- Footer
    this.setStyle(App.elements.footer, {
        background: "cyan",
        display: "flex",
        justifyContent: "space-between",
    });

    App.elements.footer.innerHTML = "Footer";
    App.elements.app.appendChild(App.elements.footer);

    console.log("Componentes renderizados");
  },

  setStyle: function(el, obj) {
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          el.style[key] = obj[key];
      }
  },

  renderAllProducts: function() {
    console.log("Vamos renderizar todos os produtos");

    /*console.log(App.store.state.products);
    console.log(App.store.state.products.length);*/

    var products = App.store.state.products;

    for (var i=0; i<products.length; i++) {
        var product = products[i];
        var el = document.createElement("div");

        // el.id = product.id;  //alternativa para referenciar um produto, mas custa caro para a aplicação (pode deixar ela lenta)
        el.innerHTML = product.title;

        // this.setStyle(el, {border: "1px solid pink"});
        el.classList.add("product-item");
        // el.classList.add("product2");

        // console.log("[]...", product);
        console.log("[]...", el);
        // console.log("[]...", el.classList);


        App.elements.products[product.id] = el;
        App.elements.bodyProducts.appendChild(el);
    }



      console.log("Produtos renderizados");
  },
};