var App = {
  init: function() {
    console.log("Inicio do App");
    this.elements.createElements();
    console.log("Fim do App");
  },

  controllers: {
    setStyle: function(el, obj) {
      var keys = Object.keys(obj);
      for (var i=0; i<keys.length; i++) {
        var key = keys[i];
        el.style[key] = obj[key];
      };
    },
  },

  elements: {
    app: document.getElementById("app"),
    header: document.createElement("div"),
    textHeader: document.createElement("div"),
    menu: document.createElement("div"),
    body: document.createElement("div"),
    footer: document.createElement("div"),

    createElements: function() {
      console.log("renderizando componentes");

      var headerFooter = {
        height: "13%",
        width: "100%",
        display: "flex",
        flexFlow: "row nowrap",
      };

      App.controllers.setStyle (this.app, {
        backgroundColor: "grey",
        minWidth: "500px",
        minHeight: "500px",
        width: "100%",
        height: "100px",
        display: "flex",
        position: "absolute",
        flexFlow: "column nowrap",
      }),

      this.app.innerHTML = "Eu cou o container App"

      App.controllers.setStyle(this.header, headerFooter);
      App.controllers.setStyle(this.header, {    backgroundColor: "red",});
      this.app.appendChild(this.header);

      this.textHeader.innerHTML = "Eu sou o header";
      App.controllers.setStyle(this.textHeader, {
        flex: "1 0",
        justifyContent: "flex-start",
      }),
      this.header.appendChild(this.textHeader);

      this.menu.innerHTML = "Eu sou o menu";
      App.controllers.setStyle(this.menu, {
        backgroundColor: "#9b58c2",
        width: "300px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 20px",
      }),
      this.header.appendChild(this.menu),

      this.body.innerHTML = "Eu sou o body";
      App.controllers.setStyle(this.body, {
        width: "100%",
        flex: "1 0",
      }),
      this.app.appendChild(this.body),


      this.footer.innerHTML = "Eu sou o footer";
      App.controllers.setStyle(this.footer, headerFooter);
      App.controllers.setStyle(this.footer, {  backgroundColor: "green",}),
      this.app.appendChild(this.footer);

      console.log("componentes renderizados");
    },
  },
};

App.init();