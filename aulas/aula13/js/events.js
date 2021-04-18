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

      // 2. Alterar o count direto no elemento
      var child = App.helpers.childFinder(productId, "count");
      if (child) {
        child.innerHTML = `Qtd: ${newCount}`;
      }


      // 3. Adicionar produto a nossa lista
      App.store.mutations.buy(product);

      // 4. renderizar esse produto novo na tela
      App.controllers.renderMyProducts();
    }
  },
};