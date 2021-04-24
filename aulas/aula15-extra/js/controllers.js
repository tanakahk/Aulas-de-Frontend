App.controllers = {

  // Cria os elementos estáticos do webapp
  createElements: function(){
    console.log("Vamos renderizar os componentes");
    var els = App.elements

    els.app.innerHTML = "<style>*{box-sizing: border-box;} html, body {min-width: 500px;min-height:500px;margin: 0;padding: 0;}</style>";

    this.setStyle(els.app, {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      flex: "1 0",
      flexDirection: "column",
    });

    // -------------------- Header

    this.setStyle(els.header, {
      display: "flex",
      justifyContent: "flex-end",
      backgroundColor: "lightcoral",
      padding: "0 20px",
      alignItems: "center",
      minHeight: "50px",
      maxHeight: "50px",
    });
    els.header.innerHTML = "Header";
    els.app.appendChild(els.header);
      
    // -------------------- Body
    this.setStyle(els.body, {
      display: "flex",
      backgroundColor: "lightgrey",
      flex: "1 0",
      flexFlow: "column nowrap",
      alignItems: "center",
      padding: "60px 15px",
    });
    els.app.appendChild(els.body);

    // -------------------- Meus Produtos renderizados no Body
    els.bodyMyProductsLabel.innerHTML = "<h1>Meus Produtos:</h1>";
    els.body.appendChild(els.bodyMyProductsLabel);

    els.bodyMyProducts.classList.add("product-container");
    els.body.appendChild(els.bodyMyProducts);

    // -------------------- Produtos renderizados no Body
    els.bodyProductsLabel.innerHTML = "<h1>Todos os Produtos:</h1>";
    els.body.appendChild(els.bodyProductsLabel);

    els.bodyBrandsLabel.innerHTML = "Filtrar por marca:";
    els.body.appendChild(els.bodyBrandsLabel);

    els.bodyBrands.classList.add("brand-container");
    els.body.appendChild(els.bodyBrands);

    els.bodyCatLabel.innerHTML = "Filtrar por categoria:";
    els.body.appendChild(els.bodyCatLabel);

    els.bodyCat.style.border = "1px solid pink";
    els.bodyCat.style.width = "100%";
    els.body.appendChild(els.bodyCat);

    els.bodyProducts.classList.add("product-container");
    els.body.appendChild(els.bodyProducts);



    // -------------------- Footer
    this.setStyle(els.footer, {
      backgroundColor: "cyan",
      display: "flex",
      justifyContent: "flex-start",
      padding: "0 20px",
      alignItems: "center",
      minHeight: "50px",
      maxHeight: "50px",
    });
    els.footer.innerHTML = "Footer";
    els.app.appendChild(els.footer);


    console.log("Componentes renderizados");
  },

  // deveria de ser um helper para poder ser usado em outros lugares
  setStyle: function(el, obj){
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        el.style[key] = obj[key];
    };
  },

  // É um controlador que controla e renderiza os elementos.
  renderImages: function(parent, images) {
    for (let i = 0; i < images.length; i++) {
      var imgURL = images[i];

      var el = document.createElement("img");
      el.src = imgURL;
      // el.classList.add("product-item-img");

      parent.appendChild(el);      
    }
  },

  renderBrandFilters: function() {
    var brands = App.store.getters.brands();
    console.log("[Marcas]...", brands);

    for (let i = 0; i < brands.length; i++) {
      var brand = brands[i];
      var el = this.createBrand(brand);
      

      App.elements.bodyBrands.appendChild(el);
    }
  },

  removeAllProducts: function () {
    App.elements.bodyProducts.innerHTML = "";
    App.elements.products = {};
  },

  renderAllProducts: function() {
    console.log("Vamos renderizar todos os produtos");
    var products = App.store.getters.products();
    // var products = App.store.state.products;
    // var filter = App.store.state.filter;

    /* console.log("[Todos os produtos:]", products);
    console.log("[Filtros:]", filter); */

    for (let i = 0; i < products.length; i++) {
      var product = products[i];

      // verifica se a referência do elemento já existe.
      if (!App.elements.products[product.id]) {
        // cria
        var el = this.createProduct(product);
        App.elements.products[product.id] = el;
        App.elements.bodyProducts.appendChild(el);
      };
    };

    console.log("Produtos renderizados");
  },

  renderMyProducts: function(){
    // Pega todos os nossos produtos
    var myProducts = App.store.state.myProducts;

    // Pega a referência de todos os nossos produtos já renderizados
    var els = App.elements.myProducts;
    
    console.log("vamos renderizar nossos produtos", myProducts);

    for (let i = 0; i < myProducts.length; i++) {
      var myProduct = myProducts[i];
      var product = App.store.getters.productById(myProduct.productId)
      // console.log("product", myProduct);
      console.log(myProduct, product);

      if (els[product.id]) {
        // Editar o produto
        var child  = App.helpers.childFinder(App.elements.myProducts[product.id], "count");
        if (child) {
          var newCount = App.store.getters.myProductCount(product.id);

          child.innerHTML = `Qtd: ${newCount}`;
        }
      }else{
        var el = this.createProduct(product, true);
        els[product.id] = el;
        App.elements.bodyMyProducts.appendChild(el);
      }
    }
  },

  createProduct: function(product, isMyList){
    var el = document.createElement("div");
    el.classList.add("product-item");

    var imgContainer = document.createElement("div");
    imgContainer.style.width = "200px";
    imgContainer.style.height = "300px";
    var carrossel = new Carrossel({el: imgContainer, images: product.images});
    el.appendChild(imgContainer);

    var title = document.createElement("div");
    title.innerHTML = product.title;
    title.setAttribute("key", "title");
    el.appendChild(title);

    var price = document.createElement("div");
    price.innerHTML = `R$ ${product.price}`;
    price.setAttribute("key", "price");
    el.appendChild(price);

    if (!isMyList){
      var count = document.createElement("div");
      count.innerHTML = `Qtd: ${product.count}`;
      count.setAttribute("key", "count");
      el.appendChild(count);

      var buyBtn = document.createElement("button");
      buyBtn.innerHTML = "Comprar";
      buyBtn.id = product.id;
      buyBtn.onclick = App.events.buy;
      el.appendChild(buyBtn);
    }else{
      var count = document.createElement("div");
      count.innerHTML = `Qtd: 1`;
      count.setAttribute("key", "count");
      el.appendChild(count);
    }

    return el;
  },

  createBrand: function(brand) {
    var el = document.createElement("div");

    var name = document.createElement("span");
    name.innerHTML = brand.name;
    el.appendChild(name);

    var img = document.createElement("img");
    img.src = brand.image_url;
    el.appendChild(img);

    el.onclick = function () {
      console.log("[clicou]", brand);

      // 1. dispara um mutation para colocar o valor do filtro no state
      App.store.mutations.setBrand(brand.name);

      // (primeira tentativa) 2. renderizar novamente os produtos
      // (primeira tentativa) App.controllers.renderAllProducts();

      // (segunda tentativa) 2. Esconder os produtos
      // (segunda tentativa) App.controllers.hideProduct();

      // (terceira tentativa) 2. Remove todos os produtos
      App.controllers.removeAllProducts();

      // 3. Renderiza apenas os produtos filtrados
      App.controllers.renderAllProducts();
    };

    // console.log("[brand:]...", brand, el);

    return el;
  },

  /* hideProduct: function() {
    var listaParaEsconder = App.store.getters.listaProdutosEscondidos();
    var productsEl = App.elements.products;
    var productsElKeys = Object.keys(productsEl)

    console.log("productsEl", productsEl);
    console.log("productsElKeys", productsElKeys);
    console.log("retorno do hiddenProductsByBrand", listaParaEsconder);

    // Esconde tudo
    for (let i = 0; i < productsElKeys.length; i++) {
      var productId = productsElKeys[i];
      var product = productsEl[productId];
      // console.log("mágica", listaParaEsconder.find((p) => p.id === parseInt(productId)));
      // console.log("productId", productId);
      // console.log("product", product);

      if (listaParaEsconder.find((p) => p.id === parseInt(productId))) {
        product.style.display = "none";
      }else{
        product.style.display = "block";
      };
    };

    // mostrar só o filtro
  }, */
};