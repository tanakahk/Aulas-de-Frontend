class Carrossel { 
  //nome de classe sempre com letra maiúscula
  constructor(obj){
    console.log("inicio", obj);

    this._els = []; //array com tds imgs
    this._current = 0; //posição da imagem a ser mostrada
    this._imgContainer = document.createElement("div");
    this._moveLeft = document.createElement("div");
    this._moveRight = document.createElement("div");

    if(obj.images){ //recebe as imagens
      this.images = obj.images;
    };

    if(obj.el) { //recebe o objeto para renderizar as imagens
      this.el = obj.el;
      this.el.classList.add("__carrossel-container");
    };

    if(obj.el && obj.images && obj.images.length) { //faz o tratamento para renderizar as imagens
      // console.log("vamos renderizar");
      this.createMoveElements();
      this.el.appendChild(this._moveLeft)
      this.el.appendChild(this._imgContainer)
      this.el.appendChild(this._moveRight)
      this.renderImages();
      this.showImage();
    }else{
      console.error("insira alguma img");
    };

    console.log("fim", this);
  }

  renderImages(){ //faz um loop, pega o url de cada, cria o elemento img para cada url enviado e adiciona essa img no container de img.
    // console.log("vamos renderizar as imgs");
    for (let i = 0; i < this.images.length; i++) {
      const imgUrl = this.images[i];
      // console.log(imgUrl);
      const imgEl = this.createImgElement(i, imgUrl);

      this._imgContainer.appendChild(imgEl);
    }
  }

  createImgElement(idx, imgUrl){
    // console.log("sou o imgurl", imgUrl);
    const el = document.createElement("img");
    el.src = imgUrl;
    el.classList.add("__carrossel-img");
    el.style.display = "none";


    const existsIndex = this._els.findIndex((x) => x === imgUrl);
    if (existsIndex > -1) {
      this._els[existsIndex] = el;
    }else{
      this._els.push(el);
    }

    return el;
  }

  createMoveElements(){
    this._moveLeft.innerHTML = "<";
    this._moveLeft.classList.add("__carrossel-move-left");
    this._moveLeft.onclick = () => {
      console.log(this);
      this._current--;
      
      if(this._current < 0) {
        this._current = this.images.length - 1;
      }

      this.showImage();
    };

    this._moveRight.innerHTML = ">";
    this._moveRight.classList.add("__carrossel-move-right");
    this._moveRight.onclick = () => {
      this._current++;
      
      if(this._current > this.images.length - 1) {
        this._current = 0;
      }

      this.showImage();
    };
  }

  showImage(){
    // console.log("iniciando o showImage");
    // 1. esconde todas as imagens
    for (let i = 0; i < this._els.length; i++) {
      const img = this._els[i];
      img.style.display = "none";
    }

    // 2. mostra a imagem correta
    this._els[this._current].style.display = "block";
  }
}
// console.log(Carrossel);

const options = {
  el: document.getElementById("carrossel"), //é a div que contem o carrossel
  images: [
    "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102487_gg.jpg",
    "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102482_gg.jpg",
    "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102475_gg.jpg",
    "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102472_gg.jpg",
    "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102473_gg.jpg",
    "https://images6.kabum.com.br/produtos/fotos/103606/notebook-lenovo-ultrafino-ideapad-s145-intel-core-i7-8565u-8gb-1tb-nvidia-geforce-mx110-windows-10-15-6-prata-81s90003br_1566907790_gg.jpg",
  ],
};
// const carrossel = new Carrossel(options);   // esse carrossel com c minúsculo é como se fosse o var App = {} do js.js. A linha acima cria uma instância da classe Carrossel. Assim é possível usar as propriedades/prototypes (__proto__).
// console.log(carrossel);