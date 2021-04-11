var App = {
    init: function() {
        console.log("Inicio do app");
        this.controllers.createElements();
        console.log("Fim do app");
    },


    store: {},

    events: {
        linkMouseOverHandler: function (e) {
            e.target.style.textDecoration = "underline";
        },

        linkMouseOutHandler: function (e) {
            e.target.style.textDecoration = "none";
        },
    },

    controllers: {
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
    },

    elements: {
        app: document.getElementById("app"),
        header: document.createElement("div"),
        body: document.createElement("div"),
        footer: document.createElement("div"),
    },
};

App.init();