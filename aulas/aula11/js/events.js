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

      // 1. Subtrair "count" do produto
      App.store.mutations.changeCount(productId, product.count -1);
    }
  },
};