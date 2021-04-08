var controllers = {
  createElements: function(){

    App.elements.app.innerHTML = "<style>*{box-sizing: border-box;} html, body {min-width: 500px;min-height:500px;margin: 0;padding: 0;} body, input, button {font-family: arial,sans-serif;color: #222;}</style>";

    this.setStyle(App.elements.container, {
      backgroundColor: "rgb(255, 255, 255)",
      display: "flex",
      flexFlow: "column nowrap",
      height: "100%",
      width: "100%",
      position: "absolute",
    });
    App.elements.app.appendChild (App.elements.container);

    this.setStyle(App.elements.flexHeaderRight, {
      backgroundColor: "#fff",
      padding: "6px",
      height: "60px",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
    });
    App.elements.container.appendChild(App.elements.flexHeaderRight);

    this.setStyle(App.elements.flexHeaderContent, {
      display: "flex",
      alignItems: "center",
      padding: "0 4px 0 32px",
      height: "48px",
    });
    App.elements.flexHeaderRight.appendChild(App.elements.flexHeaderContent);

    this.setStyle(App.elements.flexHeaderContentAGroup, {
      paddingRight: "15px",
      fontSize: "0px",
    });
    App.elements.flexHeaderContent.appendChild(App.elements.flexHeaderContentAGroup);

    App.elements.gmailLink.innerHTML = "Gmail";
    App.elements.gmailLink.href = "https://mail.google.com/mail/&ogbl";
    this.setStyle(App.elements.gmailLink, {
      textDecoration: "inherit",
      color: "rgba(0,0,0,0.87)",
      paddingLeft: "15px",
      fontSize: "13px",
    });
    App.elements.gmailLink.onmouseover = App.events.linkMouseOverHandler;
    App.elements.gmailLink.onmouseout = App.events.linkMouseOutHandler;
    App.elements.flexHeaderContentAGroup.appendChild(App.elements.gmailLink);

    App.elements.imagesLink.innerHTML = "Imagens";
    App.elements.imagesLink.href = "https://www.google.com.br/imghp?hl=pt-BR&ogbl";
    this.setStyle(App.elements.imagesLink, {
      textDecoration: "inherit",
      color: "rgba(0,0,0,0.87)",
      paddingLeft: "15px",
      fontSize: "13px",
    });
    App.elements.imagesLink.onmouseover = App.events.linkMouseOverHandler;
    App.elements.imagesLink.onmouseout = App.events.linkMouseOutHandler;
    App.elements.flexHeaderContentAGroup.appendChild(App.elements.imagesLink);

    this.setStyle(App.elements.menuButtons, {
      display: "flex",
      alignItems: "center",
    });
    App.elements.flexHeaderContent.appendChild(App.elements.menuButtons);

    this.setStyle(App.elements.menuPadding, {
      display: "flex",
      padding: "4px",
      maxWidth: "48px",
      maxHeight: "48px",
      fill: "currentColor",
      color: "#5f6368",
    });
    App.elements.menuButtons.appendChild(App.elements.menuPadding);

    this.setStyle(App.elements.menuImageA, {
      cursor: "pointer",
      padding: "8px",
      height: "40px",
      width: "40px",
      display: "flex",
    });
    App.elements.menuPadding.appendChild(App.elements.menuImageA); 

    this.setStyle(App.elements.menuImage, {
      maxHeight: "24px",
      maxWidth: "24px",
    });
    App.elements.menuImage.src = "src/dots.png";
    App.elements.menuImageA.appendChild(App.elements.menuImage); 

    App.elements.buttonLogin.innerHTML = "Fazer Login";
    App.elements.buttonLogin.href = "https://accounts.google.com/ServiceLogin?hl=pt-BR&amp;passive=true&amp;continue=https://www.google.com/&amp;ec=GAZAmgQ";
    this.setStyle(App.elements.buttonLogin, {
      cursor: "pointer",
      color: "#fff",
      textDecoration: "none",
      padding: "9px 15px",
      minWidth: "80px",
      background: "#1a73e8",
      border: "1px solid transparent",
      fontFamily: "Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
      fontWeight: "500",
      fontSize: "14px",
      letterSpacing: ".25px",
      lineHeight: "16px",
      marginLeft: "10px",
      marginRight: "8px",
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "4px",
      display: "flex",
    });
    App.elements.menuButtons.appendChild(App.elements.buttonLogin);

    this.setStyle(App.elements.flexLogo, {
      backgroundColor: "rgb(255, 255, 255)",
      fontSize: "0px",
      height: "calc(100% - 560px)",
      height: "calc(100vh - 560px)",
      minHeight: "92px",
      maxHeight: "290px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
    });
    App.elements.container.appendChild(App.elements.flexLogo); 

    App.elements.logoImg.src = "src/2xgooglelogo_color_272x92dp.png";
    App.elements.logoImg.srcset = "src/1xgooglelogo_color_272x92dp.png, src/2xgooglelogo_color_272x92dp.png 2x";
    this.setStyle(App.elements.logoImg, {
      height: "92px",
      width: "272px",
    });
    App.elements.flexLogo.appendChild(App.elements.logoImg); 

    this.setStyle(App.elements.flexCentralizerSearchArea, {
      backgroundColor: "rgb(255, 255, 255)",
      padding: "26px 20px 0 20px",
      width: "100%",
      display: "flex",
      flexFlow: "column nowrap",
      flex: "0 0",
      alignItems: "center",
    });
    App.elements.container.appendChild(App.elements.flexCentralizerSearchArea); 

    this.setStyle(App.elements.limitSearchArea, {
      backgroundColor: "rgb(255, 255, 255)",
      height: "180px",
      minWidth: "458px",
      width: "100%",
      maxWidth: "584px",
      display: "flex",
      flexFlow: "column nowrap",
      flex: "1 0",
    });
    App.elements.flexCentralizerSearchArea.appendChild(App.elements.limitSearchArea); 

    this.setStyle(App.elements.searchArea, {
      padding: "5px 8px 0 14px",
      display: "flex",
      flex: "1",
      maxHeight: "44px",
      background: "#fff",
      border: "1px solid #dfe1e5",
      borderRadius: "24px",
    });
    App.elements.limitSearchArea.appendChild(App.elements.searchArea); 

    this.setStyle(App.elements.magnifierArea, {
      display: "flex",
      alignItems: "center",
      paddingRight: "13px",
      marginTop: "-5px",
    });
    App.elements.searchArea.appendChild(App.elements.magnifierArea); 

    this.setStyle(App.elements.magnifier, {
      margin: "auto",
      fontSize: "14px",
    });
    App.elements.magnifierArea.appendChild(App.elements.magnifier); 

    this.setStyle(App.elements.magnifierSpan, {
      marginTop: "3px",
      color: "#9aa0a6",
      fill: "currentColor",
      height: "20px",
      width: "20px",
      display: "inline-block",
    });
    App.elements.magnifier.appendChild(App.elements.magnifierSpan);

    App.elements.magnifierImg.src = "src/magnifier.png";
    App.elements.magnifierSpan.appendChild(App.elements.magnifierImg);

    this.setStyle(App.elements.textArea, {
      marginTop: "-5px",
      display: "flex",
      flex: "100%",
      maxWidth: "447px",
    });
    App.elements.searchArea.appendChild(App.elements.textArea); 

    this.setStyle(App.elements.textInput, {
      display: "flex",
      flex: "100%",
      minWidth: "323px",
      height: "42px",
      color: "rgba(0,0,0,.87)",
      fontSize: "16px",
      border: "none",
      outline: "none",
    });
    App.elements.textArea.appendChild(App.elements.textInput); 

    this.setStyle(App.elements.areaButtonKeyboardVoice, {
      display: "flex",
      flex: "0 0 auto",
      marginTop: "-5px",
      alignItems: "stretch",
      width: "80px",
    });
    App.elements.searchArea.appendChild(App.elements.areaButtonKeyboardVoice); 

    var classAreaSearchIcon = {
      cursor: "pointer",
      alignItems: "center",
      outline: "none",
      padding: "0 8px",
      width: "40px",
      height: "44px",
      lineHeight: "44px",
    };

    this.setStyle(App.elements.areaSearchIcon1, classAreaSearchIcon);
    App.elements.areaButtonKeyboardVoice.appendChild(App.elements.areaSearchIcon1);

    this.setStyle(App.elements.keyboardSpan, {
      background: "url(//www.gstatic.com/inputtools/images/tia.png) no-repeat center",
      height: "24px",
      width: "24px",
      verticalAlign: "middle",
    });
    App.elements.areaSearchIcon1.appendChild(App.elements.keyboardSpan); 

    App.elements.keyboardImg.src = "src/tia.png";
    this.setStyle(App.elements.keyboardImg, {
      visibility: "hidden",
    });
    App.elements.keyboardSpan.appendChild(App.elements.keyboardImg); 

    this.setStyle(App.elements.areaSearchIcon2, classAreaSearchIcon);
    App.elements.areaButtonKeyboardVoice.appendChild(App.elements.areaSearchIcon2); 

    App.elements.mic.src = "src/mic.png";
    this.setStyle(App.elements.mic, {
      height: "24px",
      width: "24px",
      verticalAlign: "middle",
    });
    App.elements.areaSearchIcon2.appendChild(App.elements.mic);

    this.setStyle(App.elements.areaSearchButtons, {
      height: "88px",
      padding: "18px 0 0 0",
    });
    App.elements.limitSearchArea.appendChild(App.elements.areaSearchButtons);

    var classSearchButtons = {
      backgroundColor: "#f8f9fa",
      border: "1px solid #f8f9fa",
      borderRadius: "4px",
      color: "#3c4043",
      margin: "11px 4px",
      padding: "0 16px",
      height: "36px",
      minWidth: "54px",
      textAlign: "center",
      cursor: "pointer",
      fontSize: "14px",
    }

    App.elements.areaSearchButtons.appendChild(App.elements.centerAreaSearchButtons); 

    App.elements.searchButton1.value = "Pesquisa Google";
    App.elements.searchButton1.type = "submit";
    this.setStyle(App.elements.searchButton1, classSearchButtons);
    App.elements.centerAreaSearchButtons.appendChild(App.elements.searchButton1); 

    App.elements.searchButton2.value = "Estou com sorte";
    App.elements.searchButton2.type = "submit";
    this.setStyle(App.elements.searchButton2, classSearchButtons);
    App.elements.centerAreaSearchButtons.appendChild(App.elements.searchButton2); 
    
    this.setStyle(App.elements.flexSpaceBtwSearchEFooter, {flex: "1 0",});
    App.elements.container.appendChild(App.elements.flexSpaceBtwSearchEFooter); 

    // --------------------------- Footer

    this.setStyle(App.elements.flexFooter, {
      background: "#f2f2f2",
      display: "flex",
      flexShrink: "0",
      flexFlow: "column nowrap",
      alignItems: "flex-end",
    });
    App.elements.container.appendChild(App.elements.flexFooter); 

    App.elements.brasil.innerHTML = "Brasil";
    this.setStyle(App.elements.brasil, {
      padding: "15px 30px",
      borderBottom: "1px solid #dadce0",
      fontSize: "15px",
      color: "rgba(0,0,0,.54)",
      width: "100%",
    });
    App.elements.flexFooter.appendChild(App.elements.brasil); 


    // Media queries do menuMainFooter em JS


    function changeClassMenuMainFooter(width) {
      if (width.matches) {
        App.controllers.setStyle(App.elements.menuMainFooter, {
          justifyContent: "space-evenly",
        });
      } else {
        App.controllers.setStyle(App.elements.menuMainFooter, {
          justifyContent: "inherit",
        });
      };
    };
    
    var classMenuMainFooter = window.matchMedia("(max-width: 1200px)");
    changeClassMenuMainFooter(classMenuMainFooter);
    classMenuMainFooter.addListener(changeClassMenuMainFooter);
    this.setStyle(App.elements.menuMainFooter, {
      padding: "0 20px",
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
    });
    App.elements.flexFooter.appendChild(App.elements.menuMainFooter);


    // Media queries do menuFooter em JS


    function changeClassMenuFooter(width) {
      if (width.matches) {
        App.controllers.setStyle(App.elements.menuFooter1, {
          justifyContent: "space-evenly",
        });
        App.controllers.setStyle(App.elements.menuFooter2, {    
          justifyContent: "space-evenly",
        });
      } else {
        App.controllers.setStyle(App.elements.menuFooter1, {
          justifyContent: "inherit",
        });
        App.controllers.setStyle(App.elements.menuFooter2, {
          justifyContent: "inherit",
        });
      };
    };
    
    var classMenuFooter = window.matchMedia("(max-width: 1200px)");
    changeClassMenuFooter(classMenuFooter);
    classMenuFooter.addListener(changeClassMenuFooter);
    this.setStyle(App.elements.menuFooter1, {
      display: "flex",
      flexWrap: "wrap",
    });
    App.elements.menuMainFooter.appendChild(App.elements.menuFooter1);


    // Links do menuFooter


    var classLinkFooter = {
      color: "#70757a",
      display: "block",
      padding: "15px",
      fontSize: "14px",
      whiteSpace: "nowrap",
      textDecoration: "inherit",
      cursor: "pointer",
    };

    App.elements.about.innerHTML = "Sobre";
    App.elements.about.href = "https://about.google/?utm_source=google-BR&amp;utm_medium=referral&amp;utm_campaign=hp-footer&amp;fg=1";
    this.setStyle(App.elements.about, classLinkFooter);
    App.elements.about.onmouseover = App.events.linkMouseOverHandler;
    App.elements.about.onmouseout = App.events.linkMouseOutHandler;
    App.elements.menuFooter1.appendChild(App.elements.about); 

    App.elements.publicity.innerHTML = "Publicidade";
    App.elements.publicity.href = "https://www.google.com/intl/pt-BR_br/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1";
    this.setStyle(App.elements.publicity, classLinkFooter);
    App.elements.publicity.onmouseover = App.events.linkMouseOverHandler;
    App.elements.publicity.onmouseout = App.events.linkMouseOutHandler;
    App.elements.menuFooter1.appendChild(App.elements.publicity); 

    App.elements.business.innerHTML = "Negócios";
    App.elements.business.href = "https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1";
    this.setStyle(App.elements.business, classLinkFooter);
    App.elements.business.onmouseover = App.events.linkMouseOverHandler;
    App.elements.business.onmouseout = App.events.linkMouseOutHandler;
    App.elements.menuFooter1.appendChild(App.elements.business); 

    App.elements.howSearchWorks.innerHTML = "Como funciona a Pesquisa";
    App.elements.howSearchWorks.href = "https://google.com/search/howsearchworks/?fg=1";
    this.setStyle(App.elements.howSearchWorks, classLinkFooter);
    App.elements.howSearchWorks.onmouseover = App.events.linkMouseOverHandler;
    App.elements.howSearchWorks.onmouseout = App.events.linkMouseOutHandler;
    App.elements.menuFooter1.appendChild(App.elements.howSearchWorks); 

    this.setStyle(App.elements.flexSpaceOnFooter, {flex: "1 0",});
    App.elements.menuMainFooter.appendChild(App.elements.flexSpaceOnFooter); 

    this.setStyle(App.elements.menuFooter2, {
      display: "flex",
      flexWrap: "wrap",
    });
    App.elements.menuMainFooter.appendChild(App.elements.menuFooter2);

    App.elements.privacy.innerHTML = "Privacidade";
    App.elements.privacy.href = "https://policies.google.com/privacy?hl=pt-BR&amp;fg=1";
    this.setStyle(App.elements.privacy, classLinkFooter);
    App.elements.privacy.onmouseover = App.events.linkMouseOverHandler;
    App.elements.privacy.onmouseout = App.events.linkMouseOutHandler;
    App.elements.menuFooter2.appendChild(App.elements.privacy); 

    App.elements.terms.innerHTML = "Termos";
    App.elements.terms.href = "https://policies.google.com/terms?hl=pt-BR&amp;fg=1";
    this.setStyle(App.elements.terms, classLinkFooter);
    App.elements.terms.onmouseover = App.events.linkMouseOverHandler;
    App.elements.terms.onmouseout = App.events.linkMouseOutHandler;
    App.elements.menuFooter2.appendChild(App.elements.terms); 

    App.elements.footerConfig.innerHTML = "Configurações";
    this.setStyle(App.elements.footerConfig, {
      fontSize: "14px",
      cursor: "pointer",
      color: "#70757a",
      padding: "15px",
      border: "none",
      background: "none",
      alignItems: "flex-start",
    });
    App.elements.menuFooter2.appendChild(App.elements.footerConfig); 

    /* 
    this.setStyle(App.elements.x, {
      
    });
    App.elements.y.appendChild(App.elements.x); 
    */
  },

  setStyle: function(el, obj){
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        el.style[key] = obj[key];
    };
  },
};