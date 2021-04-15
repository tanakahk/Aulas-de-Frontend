var events = {
  linkMouseOverHandler: function (e) {
    e.target.style.textDecoration = "underline";
  },

  linkMouseOutHandler: function (e) {
      e.target.style.textDecoration = "none";
  },

  buy: function (e) {
    var productId = parseInt(e.target.id);
    var product = App.store.getters.productById(productId);

    var conf = confirm(
      `Deseja realmente comprar o produto: ${product.title}?\nValor: R$${product.price}\nQtd: ${product.count}`
    );

    if (conf) {
      console.log("confirmado");

      // Novo estoque
      var newCount = product.count -1;

      // 0. Verifica se tem estoque
      if (newCount < 0) {
        alert("Sorry, o produto acabou");
        return;
      }

      // 1. Subtrair "count" do produto
      App.store.mutations.changeCount(productId, newCount);
      console.log(App.store.state);
      // App.controllers.renderAllProducts()

      // 2. Alterar o count direto no elemento
      var child = App.helpers.childFinder(productId, "count");
      if (child) {
        child.innerHTML = `Qtd: ${newCount}`;
      }
      /*const div = App.elements.products[productId]; */
      // console.log("div ...", div);
      // console.log(App.store.products[product.id]);
      // console.log(div.childNodes);
      /*for (let i = 0; i < childNodes.length; i++) {
        var child = div.childNodes[i];
        if (child.getAttribute("key") === "count"){
          console.log("childnodes ...", child); 
          child.innerHTML = `Qtd: ${newCount}`;
        }
      } */

      // 3. Adicionar produto a nossa lista
      App.store.mutations.buy(product);
      // console.log(App.store.state.myProducts);

      // 4. renderizar esse produto novo na tela
    }
  },
};