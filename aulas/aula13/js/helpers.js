var helpers = {
  
  childFinder: function(div, key){ // childFinder: function(productId, key){
    // const div = App.elements.products[productId];

    for (let i = 0; i < div.childNodes.length; i++) {
      var child = div.childNodes[i];

      if (child.getAttribute("key") === key){
        return child;
      }
    }
  }
}