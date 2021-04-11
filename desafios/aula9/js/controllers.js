var controllers = {
  createElements: function(){
    console.log("Vamos renderizar os componentes");

    App.elements.app.innerHTML = "<style>*{box-sizing: border-box;} html, body {min-width: 500px;min-height:500px;margin: 0;padding: 0;}</style>";

    this.setStyle(App.elements.app, {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      flex: "1 0",
      flexDirection: "column",
    });

    // -------------------- Header

    this.setStyle(App.elements.header, {
      display: "flex",
      justifyContent: "flex-end",
      backgroundColor: "lightcoral",
      padding: "0 20px",
      alignItems: "center",
      minHeight: "50px",
      maxHeight: "50px",
    });
    App.elements.header.innerHTML = "Header";
    App.elements.app.appendChild(App.elements.header);
      
    // -------------------- Body
    this.setStyle(App.elements.body, {
      display: "flex",
      backgroundColor: "lightgrey",
      flex: "1 0",
      flexFlow: "column nowrap",
      alignItems: "center",
      padding: "60px 15px",
    });
    App.elements.body.innerHTML = "<h1 style='margin-top: 0;'>Ofertas do dia !!!</h1>"
    App.elements.app.appendChild(App.elements.body);

    // -------------------- Produtos renderizados no Body
    this.setStyle(App.elements.bodyProducts, {
      backgroundColor: "#000",
      display: "flex",
      flexFlow: "row wrap",
      flex: "1 0",
      border: "1px solid darkblue",
      borderRadius: "5px",
      maxWidth: "1580px",
      padding: "5px",
      justifyContent: "center",
    });
    App.elements.body.appendChild(App.elements.bodyProducts);

    // -------------------- Footer
    this.setStyle(App.elements.footer, {
      backgroundColor: "cyan",
      display: "flex",
      justifyContent: "flex-start",
      padding: "0 20px",
      alignItems: "center",
      minHeight: "50px",
      maxHeight: "50px",
    });
    App.elements.footer.innerHTML = "Footer";
    App.elements.app.appendChild(App.elements.footer);


    /* 
    this.setStyle(App.elements.x, {
      
    });
    App.elements.y.appendChild(App.elements.x); 
    */
    console.log("Componentes renderizados");
  },

  setStyle: function(el, obj){
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        el.style[key] = obj[key];
    };
  },

  renderAllProducts: function() {
    console.log("Vamos renderizar todos os produtos");
    var products = App.store.state.products;

    for(var i=0; i<products.length; i++) {
      var product = products[i];
      var el = document.createElement("div");
      var elBox = document.createElement("div");

      // -------------------- elementos do produto que vai dentro da caixa
      el.innerHTML = product.title;
        this.setStyle(el, {
          display: "flex",
          fontSize: "14px",
          fontFamily: "Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
          alignItems: "flex-end",
          justifyContent: "center",
          width: "100%",
          height: "100%",
      });

      // -------------------- Caixa onde vai o produto
      this.setStyle(elBox, {
        border: "1px solid #e6e6e6",
        backgroundColor: "lightgreen",
        borderRadius: "5px",
        height: "211px",
        width: "211px",
        margin: "5px",
        padding: "8px",
        justifyContent: "center",
      });

      App.elements.products[product.id] = el;
      elBox.appendChild(el);
      App.elements.bodyProducts.appendChild(elBox);
    };
    console.log("Produtos renderizados");
  },
};