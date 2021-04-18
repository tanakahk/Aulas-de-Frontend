var controllers = {
  createElements: function(){
    console.log("Vamos renderizar os componentes");


    App.elements.app.classList.add("__createElements-app");

    // -------------------- Header

    App.elements.header.classList.add("__createElements-header");
    App.elements.header.innerHTML = "Header";
    App.elements.app.appendChild(App.elements.header);
      
    // -------------------- Body
    App.elements.body.classList.add("__createElements-body");
    App.elements.body.innerHTML = "<h1 style='margin-top: 0;'>Ofertas do dia !!!</h1>"
    App.elements.app.appendChild(App.elements.body);

    // -------------------- Produtos renderizados no Body
    App.elements.bodyProducts.classList.add("__createElements-bodyProducts");
    App.elements.body.appendChild(App.elements.bodyProducts);

    // -------------------- Footer
    App.elements.footer.classList.add("__createElements-footer");
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

  renderImages: function(parent, images) {
    for (let i = 0; i < images.length; i++) {
      var imgURL = images[i];

      var el = document.createElement("img");
      el.src = imgURL;
      el.classList.add("product-item-img");

      parent.appendChild(el);      
    }
  },

  renderAllProducts: function() {
    console.log("Vamos renderizar todos os produtos");
    var products = App.store.state.products;

    console.log(products.length);
    for (let i = 0; i < products.length; i++) {
      var product = products[i];
      
      var el = document.createElement("div");
      el.classList.add("__renderAllProducts-productItem");

      var imgContainer = document.createElement("div");
      imgContainer.style.width = "200px";
      var carrossel = new Carrossel({el: imgContainer, images: product.images});
      el.appendChild(imgContainer);

      var divSpace = document.createElement("div");
      divSpace.classList.add("__renderAllProducts-divFlexGrowColumn");
      el.appendChild(divSpace);

      var textContainer = document.createElement("div");
      textContainer.classList.add("__renderAllProducts-textContainer");
      el.appendChild(textContainer);

      var title = document.createElement("div");
      title.innerHTML = product.title;
      title.setAttribute("key", "title");
      textContainer.appendChild(title);

      var price = document.createElement("div");
      price.innerHTML = `R$ ${product.price}`;
      price.setAttribute("key", "price");
      textContainer.appendChild(price);

      var count = document.createElement("div");
      count.innerHTML = `Qtd: ${product.count}`;
      count.setAttribute("key", "count");
      textContainer.appendChild(count);

      var buyBtn = document.createElement("button");
      buyBtn.innerHTML = "Comprar";
      buyBtn.classList.add("__renderAllProducts-buyBtn");
      buyBtn.id = product.id;
      buyBtn.onclick = App.events.buy;
      el.appendChild(buyBtn);

      console.log("el é ...", el);

      App.elements.products[product.id] = el;
      App.elements.bodyProducts.appendChild(el);
    };
    console.log("Produtos renderizados");
  },
};