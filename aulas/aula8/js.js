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

            App.elements.app.appendChild(App.elements.header);

            // -------------------- Header / Menu
            this.setStyle(App.elements.menu, {
                padding: "10px",
            });

            App.elements.header.appendChild(App.elements.menu);

            var linkStyle = {
                marginLeft: "10px",
                cursor: "pointer",
            };

            this.setStyle(App.elements.gmaillink, linkStyle);
            App.elements.gmaillink.innerHTML = "Gmail";
            App.elements.gmaillink.onmouseover = App.events.linkMouseOverHandler;
            App.elements.gmaillink.onmouseout = App.events.linkMouseOutHandler;
            App.elements.menu.appendChild(App.elements.gmaillink);

            this.setStyle(App.elements.imglink, linkStyle);
            App.elements.imglink.innerHTML = "Imagem";
            App.elements.imglink.onmouseover = App.events.linkMouseOverHandler;
            App.elements.imglink.onmouseout = App.events.linkMouseOutHandler;
            App.elements.menu.appendChild(App.elements.imglink);

            this.setStyle(App.elements.dotslink, linkStyle);
            App.elements.dotslink.innerHTML = "Dots";
            App.elements.dotslink.onmouseover = App.events.linkMouseOverHandler;
            App.elements.dotslink.onmouseout = App.events.linkMouseOutHandler;
            App.elements.menu.appendChild(App.elements.dotslink);

            this.setStyle(App.elements.logolink, linkStyle);
            App.elements.logolink.innerHTML = "Logo";
            App.elements.logolink.onmouseover = App.events.linkMouseOverHandler;
            App.elements.logolink.onmouseout = App.events.linkMouseOutHandler;
            App.elements.menu.appendChild(App.elements.logolink);


            // -------------------- Body
            this.setStyle(App.elements.body, {
                border: "1px solid black",
                flexGrow: 1.
            });

            App.elements.body.innerHTML = "Body";
            App.elements.app.appendChild(App.elements.body);

            this.setStyle(App.elements.img, { border: "1px solid black"});
            App.elements.img.src = "https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
            App.elements.body.appendChild(App.elements.img);

            // -------------------- Footer
            this.setStyle(App.elements.footer, {
                background: "cyan",
                display: "flex",
                justifyContent: "space-between",
            });

            App.elements.app.appendChild(App.elements.footer);

            var footerStyle = { padding: "10px" };

            this.setStyle(App.elements.subFooterA, footerStyle);
            App.elements.footer.appendChild(App.elements.subFooterA);

            this.setStyle(App.elements.subFooterAAbout, linkStyle);
            this.setStyle(App.elements.subFooterAAd, linkStyle);
            this.setStyle(App.elements.subFooterABusiness, linkStyle);
            this.setStyle(App.elements.subFooterAHowWorks, linkStyle);

            App.elements.subFooterAAbout.innerHTML = "About";
            App.elements.subFooterAAd.innerHTML = "Advertising";
            App.elements.subFooterABusiness.innerHTML = "Business";
            App.elements.subFooterAHowWorks.innerHTML = "How Search Works";

            App.elements.subFooterA.appendChild(App.elements.subFooterAAbout);
            App.elements.subFooterA.appendChild(App.elements.subFooterAAd);
            App.elements.subFooterA.appendChild(App.elements.subFooterABusiness);
            App.elements.subFooterA.appendChild(App.elements.subFooterAHowWorks);

            this.setStyle(App.elements.subFooterB, footerStyle);
            App.elements.footer.appendChild(App.elements.subFooterB);

            App.elements.subFooterBPrivacy.innerHTML = "Privacy";
            App.elements.subFooterBTerms.innerHTML = "Terms";
            App.elements.subFooterBSettings.innerHTML = "Settings";

            App.elements.subFooterB.appendChild(App.elements.subFooterBPrivacy);
            App.elements.subFooterB.appendChild(App.elements.subFooterBTerms);
            App.elements.subFooterB.appendChild(App.elements.subFooterBSettings);

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
        menu: document.createElement("div"),
        gmaillink: document.createElement("span"),
        imglink: document.createElement("span"),
        dotslink: document.createElement("span"),
        logolink: document.createElement("span"),
        body: document.createElement("div"),
        img: document.createElement("img"),

        footer: document.createElement("div"),
        subFooterA: document.createElement("div"),
        subFooterAAbout: document.createElement("span"),
        subFooterAAd: document.createElement("span"),
        subFooterABusiness: document.createElement("span"),
        subFooterAHowWorks: document.createElement("span"),

        subFooterB: document.createElement("div"),
        subFooterBPrivacy: document.createElement("span"),
        subFooterBTerms: document.createElement("span"),
        subFooterBSettings: document.createElement("span"),
    },
};

App.init();