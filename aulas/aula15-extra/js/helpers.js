var helpers = {
  
  childFinder: function(div, key){ // childFinder: function(productId, key){
    // const div = App.elements.products[productId];

    for (let i = 0; i < div.childNodes.length; i++) {
      var child = div.childNodes[i];

      if (child.getAttribute("key") === key){
        return child;
      };
    };
  },

  includes: function(arr, name) {
    // faz um loop no array
    for (let i = 0; i < arr.length; i++) {
      var item = arr[i];
      // console.log("[includes:]", item);

      // compara a propriedade name com o argumento name
      if (item.name === name) {
        return true;
      };
    };

    return false;
  },
};