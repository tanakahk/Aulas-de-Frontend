var App = {
    init: function() {
        console.log("Inicio do app");

        // console.log(this);
        this.controllers.createElements();

        console.log("Fim do app");
    },

    // é o banco de dados não persistente do site (ele fica todo em memória)
    store: {},

    // Tudo que vai dar a vida para o app
    events: {
        linkMouseOverHandler: function (e) {
            // console.log(e);
            e.target.style.textDecoration = "underline";
        },

        linkMouseOutHandler: function (e) {
            // console.log(e);
            e.target.style.textDecoration = "none";
        },
    },

    // é o que controla o site, ele que executa as ações do site
    controllers: {

        createElements: function(){
            console.log("vamos renderizar os componentes");

            /* var elementos = App.elements;
            var control = App.controllers; */

            this.setStyle(App.elements.app, {
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            })

            /* var style = {
                background: "cyan",
                fontSize: "50px",
            }; */

            /* elementos.header.innerHTML = "Header";
            control.setStyle(elementos.header, style);
            elementos.app.appendChild(elementos.header); */

            /* App.elements.footer.innerHTML = "Footer";
            App.controllers.setStyle(App.elements.footer, style);
            App.elements.app.appendChild(App.elements.footer); */


            // -------------- Header / Menu -------------- 
            this.setStyle(App.elements.header, {
                // background: "cyan",
                display: "flex",
                justifyContent: "flex-end",
            });
            /* App.elements.header.style.background = "red";
            App.elements.header.style.fontSize = "20px"; */
            // App.elements.header.innerHTML = "Header";
            App.elements.app.appendChild(App.elements.header);

            this.setStyle(App.elements.menu, {
                // background: "red",
                padding: "10px",
            });
            // App.elements.menu.innerHTML = "Menu";
            App.elements.header.appendChild(App.elements.menu);

            var linkStyle = {
                marginLeft: "10px",
                cursor: "pointer",
            }

            this.setStyle(App.elements.gmaillink, linkStyle);
            App.elements.gmaillink.innerHTML = "Gmail";
            App.elements.gmaillink.onmouseover = App.events.linkMouseOverHandler;
            App.elements.gmaillink.onmouseout = App.events.linkMouseOutHandler;
            App.elements.menu.appendChild (App.elements.gmaillink);

            this.setStyle(App.elements.imglink, linkStyle);
            App.elements.imglink.innerHTML = "Imagem";
            App.elements.imglink.onmouseover = App.events.linkMouseOverHandler;
            App.elements.imglink.onmouseout = App.events.linkMouseOutHandler;
            App.elements.menu.appendChild (App.elements.imglink);

            this.setStyle(App.elements.dotslink, linkStyle);
            App.elements.dotslink.innerHTML = "...";
            App.elements.dotslink.onmouseover = App.events.linkMouseOverHandler;
            App.elements.dotslink.onmouseout = App.events.linkMouseOutHandler;
            App.elements.menu.appendChild (App.elements.dotslink);

            this.setStyle(App.elements.logolink, linkStyle);
            App.elements.logolink.innerHTML = "Logo";
            App.elements.logolink.onmouseover = App.events.linkMouseOverHandler;
            App.elements.logolink.onmouseout = App.events.linkMouseOutHandler;
            App.elements.menu.appendChild (App.elements.logolink);

            // -------------- Body -------------- 
            this.setStyle(App.elements.body, {
                border: "1px solid black",
                flexGrow: 1,
            });
            App.elements.body.innerHTML = "Body";
            App.elements.app.appendChild(App.elements.body);

            // -------------- Footer -------------- 
            this.setStyle(App.elements.footer, {background: "cyan"});
            App.elements.footer.innerHTML = "Footer";
            App.elements.app.appendChild(App.elements.footer);      




            console.log("componentes renderizados");
        },

        setStyle: function(el, obj){

            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                el.style[key] = obj[key];
            };
        },
    },

    // ele que guarda todos os elementos do site
    elements: {

        // Declarar todos os elementos da página
        app: document.getElementById("app"),
        header: document.createElement("div"),
        menu: document.createElement("div"),
        gmaillink: document.createElement("span"),
        imglink: document.createElement("span"),
        dotslink: document.createElement("span"),
        logolink: document.createElement("span"),
        body: document.createElement("div"),
        footer: document.createElement("div"),
    },
};

App.init();