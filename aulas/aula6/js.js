var App = {
    init: function() {
        console.log("Inicio do app");

        // console.log(this);
        this.elements.createElements();

        console.log("Fim do app");
    },

    // é o banco de dados não persistente do site (ele fica todo em memória)
    store:{},

    // é o que controla o site, ele que executa as ações do site
    controllers: {
        setStyle: function(el, obj){
            /* console.log(el);
            console.log(obj); */

            var keys = Object.keys(obj);
            // console.log(keys);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                // console.log(key);
                el.style[key] = obj[key];
            };
        },
    },

    // ele que guarda todos os elementos do site
    elements: {
        app: document.getElementById("app"),
        header: document.createElement("div"),
        body: document.createElement("div"),
        footer: document.createElement("div"),

        createElements: function(){
            console.log("vamos renderizar os componentes");

            // console.log(this);
            // this.app.innerHTML = "Hello World";
            /* for (var i = 0; i < 1000; i++) {
                this.app.innerHTML = "Hello World" + i;            
            }; */

            var style = {
                background: "cyan",
                fontSize: "50px",
            };

            this.header.innerHTML = "Header";

            // this.header.style.background = "cyan";
            /* App.controllers.setStyle(this.header, {
                background: "cyan",
                fontSize: "20px",
            }); */

            App.controllers.setStyle(this.header, style);
            this.app.appendChild(this.header);
            // console.log(this.header);

            this.footer.innerHTML = "Footer";
            App.controllers.setStyle(this.footer, style);
            this.app.appendChild(this.footer);

            console.log("componentes renderizados");
        },
    },
};

App.init();