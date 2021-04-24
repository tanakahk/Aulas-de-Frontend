// O store é projetado para a aplicação toda e é recomendável que ele seja utilizado apenas para leitura
var store = {

  // É onde é guardado todos os valores das variáveis
  state: {
    products: [
      {
        id: 1,
        category: {
          name: "Computers",
          image_url: 
          "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102487_gg.jpg",
        },
        brand: {
          name: "Lenovo",
          image_url: 
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2014%2F09%2Flenovo-logo-0.png&f=1&nofb=1",
        },
        title: "Notebook Lenovo Ideapad S145",
        description: "Notebook Lenovo Ideapad S145, Intel Core i7-1065G7, 8GB, SSD 256GB, 15.6´ Full HD, Dolby Audio, Windows 10 Home, Prata - 82DJ0000BR",
        price: 44000,
        count: 10,
        status: "Active",
        images: [
          "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102487_gg.jpg",
          "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102482_gg.jpg",
          "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102475_gg.jpg",
          "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102472_gg.jpg",
          "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102473_gg.jpg",
          "https://images6.kabum.com.br/produtos/fotos/103606/notebook-lenovo-ultrafino-ideapad-s145-intel-core-i7-8565u-8gb-1tb-nvidia-geforce-mx110-windows-10-15-6-prata-81s90003br_1566907790_gg.jpg",
        ],
      },
      {
        id: 2,
        category: {
          name: "SSD",
          image_url: 
          "https://images4.kabum.com.br/produtos/fotos/95874/95874_1523014871_index_gg.jpg",
        },
        brand: {
          name: "WD",
          image_url: 
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F05%2FWestern_Digital_logo_logotype_emblem.png&f=1&nofb=1",
        },
        title: "SSD WD Blue, 500GB",
        description: "SSD WD Blue, 500GB, SATA, Leitura 560MB/s, Gravação 530MB/s - WDS500G2B0A",
        price: 510,
        count: 500,
        status: "Active",
        images: [
          "https://images4.kabum.com.br/produtos/fotos/95874/95874_1523014871_index_gg.jpg",
          "https://images4.kabum.com.br/produtos/fotos/95874/95874_1_1523014822_gg.jpg",
          "https://images4.kabum.com.br/produtos/fotos/95874/95874_2_1523014822_gg.jpg",
          "https://images4.kabum.com.br/produtos/fotos/95874/95874_3_1523014822_gg.jpg",
          "https://images4.kabum.com.br/produtos/fotos/95874/95874_1523014822_gg.jpg",

        ],
      },
      {
        id: 3,
        category: {
          name: "Controllers",
          image_url: 
          "https://images7.kabum.com.br/produtos/fotos/128647/controle-microsoft-xbox-sem-fio-preto-qat-00007_1601326879_gg.jpg",
        },
        brand: {
          name: "Microsoft",
          image_url: 
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnybsys.com%2Fwp-content%2Fuploads%2F2014%2F12%2F8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg&f=1&nofb=1",
        },
        title: "Controle Microsoft Xbox",
        description: "Controle Microsoft Xbox, Sem Fio, Preto - QAT-00007",
        price: 420,
        count: 500,
        status: "Active",
        images: [
          "https://images7.kabum.com.br/produtos/fotos/128647/controle-microsoft-xbox-sem-fio-preto-qat-00007_1601326879_gg.jpg",
          "https://images7.kabum.com.br/produtos/fotos/128647/controle-microsoft-xbox-sem-fio-preto-qat-00007_1601326881_gg.jpg",
          "https://images7.kabum.com.br/produtos/fotos/128647/controle-microsoft-xbox-sem-fio-preto-qat-00007_1601326878_gg.jpg",
          "https://images7.kabum.com.br/produtos/fotos/128647/controle-microsoft-xbox-sem-fio-preto-qat-00007_1601326883_gg.jpg",
          "https://images7.kabum.com.br/produtos/fotos/128647/controle-microsoft-xbox-sem-fio-preto-qat-00007_1601326882_gg.jpg",
          "https://images7.kabum.com.br/produtos/fotos/128647/controle-microsoft-xbox-sem-fio-preto-qat-00007_1601326880_gg.jpg",
        ],
      },
      {
        id: 4,
        category: {
          name: "SSD",
          image_url: 
          "https://images4.kabum.com.br/produtos/fotos/95874/95874_1523014871_index_gg.jpg",
        },
        brand: {
          name: "Kingston",
          image_url: 
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.masgamers.com%2Fwp-content%2Fuploads%2F2015%2F09%2Flogo-kingston2.jpg&f=1&nofb=1",
        },
        title: "SSD Kingston A400, 480GB",
        description: "SSD Kingston A400, 480GB, SATA, Leitura 500MB/s, Gravação 450MB/s - SA400S37/480G",
        price: 460,
        count: 800,
        status: "Active",
        images: [
          "https://images8.kabum.com.br/produtos/fotos/85198/85198_index_gg.jpg",
          "https://images8.kabum.com.br/produtos/fotos/85198/85198_1484306114_gg.jpg",
          "https://images8.kabum.com.br/produtos/fotos/85198/85198_1484306119_gg.jpg",
        ],
      }, 
      {
        id: 5,
        category: {
          name: "Monitors",
          image_url: 
          "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1606477437_gg.jpg",
        },
        brand: {
          name: "LG",
          image_url: 
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F03%2FLogo-LG.jpg&f=1&nofb=1",
        },
        title: 'Monitor LG LED 27"',
        description: 'Monitor LG LED 27", 4K, UHD, IPS, HDMI/DisplayPort, AMD Radeon FreeSync, Altura Ajustável, VESA - 27MU58P-B.AWZ',
        price: 1800,
        count: 80,
        status: "Active",
        images: [
          "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1606477437_gg.jpg",
          "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1606477435_gg.jpg",
          "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1606477436_gg.jpg",
          "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1603736567_gg.jpg",
          "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1603736564_gg.jpg",
          "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1603736562_gg.jpg",
          "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1603736565_gg.jpg",
        ],
      }, 
      {
        id: 6,
        category: {
          name: "Monitors",
          image_url: 
          "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1606477437_gg.jpg",
        },
        brand: {
          name: "Acer",
          image_url: 
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.geekslab.it%2Fwp-content%2Fuploads%2F2016%2F03%2Facer-logo.jpg&f=1&nofb=1",
        },
        title: "Monitor Gamer Acer LED 23.6´",
        description: "Monitor Gamer Acer LED 23.6´ Full HD, HDMI/DisplayPort, Free Sync, 165Hz, 0.5ms, Inclinação Ajustável, Preto/Vermelho - KG241Q Sbiip",
        price: 1320,
        count: 50,
        status: "Active",
        images: [
          "https://images0.kabum.com.br/produtos/fotos/111960/monitor-gamer-acer-led-23-6-full-hd-hdmi-displayport-free-sync-165hz-0-5ms-inclinacao-ajustavel-preto-vermelho-kg241q-sbiip_1588007082_gg.jpg",
          "https://images0.kabum.com.br/produtos/fotos/111960/monitor-gamer-acer-led-23-6-full-hd-hdmi-displayport-free-sync-165hz-0-5ms-inclinacao-ajustavel-preto-vermelho-kg241q-sbiip_1588007081_gg.jpg",
          "https://images0.kabum.com.br/produtos/fotos/111960/monitor-gamer-acer-led-23-6-full-hd-hdmi-displayport-free-sync-165hz-0-5ms-inclinacao-ajustavel-preto-vermelho-kg241q-sbiip_1588007084_gg.jpg",
          "https://images0.kabum.com.br/produtos/fotos/111960/monitor-gamer-acer-led-23-6-full-hd-hdmi-displayport-free-sync-165hz-0-5ms-inclinacao-ajustavel-preto-vermelho-kg241q-sbiip_1588007083_gg.jpg",
        ],
      }, 
      {
        id: 7,
        category: {
          name: "Computers",
          image_url: 
          "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102487_gg.jpg",
        },
        brand: {
          name: "Acer",
          image_url: 
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.geekslab.it%2Fwp-content%2Fuploads%2F2016%2F03%2Facer-logo.jpg&f=1&nofb=1",
        },
        title: "Notebook Acer Aspire 5",
        description: "Notebook Acer Aspire 5 Intel Core i5-1035G1, 8GB, 256GB SSD, Nvidia GeForce MX 350, 15.6´ Full HD - A515-55G-588G",
        price: 4500,
        count: 200,
        status: "Active",
        images: [
          "https://images5.kabum.com.br/produtos/fotos/151805/notebook-acer-aspire-5-intel-core-i5-1035g1-8gb-256gb-ssd-nvidia-geforce-mx-350-15-6-full-hd-a515-55g-588g_1617213907_gg.jpg",
          "https://images5.kabum.com.br/produtos/fotos/151805/notebook-acer-aspire-5-intel-core-i5-1035g1-8gb-256gb-ssd-nvidia-geforce-mx-350-15-6-full-hd-a515-55g-588g_1617213908_gg.jpg",
          "https://images5.kabum.com.br/produtos/fotos/151805/notebook-acer-aspire-5-intel-core-i5-1035g1-8gb-256gb-ssd-nvidia-geforce-mx-350-15-6-full-hd-a515-55g-588g_1617213909_gg.jpg",
          "https://images5.kabum.com.br/produtos/fotos/151805/notebook-acer-aspire-5-intel-core-i5-1035g1-8gb-256gb-ssd-nvidia-geforce-mx-350-15-6-full-hd-a515-55g-588g_1617213910_gg.jpg",
          "https://images5.kabum.com.br/produtos/fotos/151805/notebook-acer-aspire-5-intel-core-i5-1035g1-8gb-256gb-ssd-nvidia-geforce-mx-350-15-6-full-hd-a515-55g-588g_1617213911_gg.jpg",
          "https://images5.kabum.com.br/produtos/fotos/151805/notebook-acer-aspire-5-intel-core-i5-1035g1-8gb-256gb-ssd-nvidia-geforce-mx-350-15-6-full-hd-a515-55g-588g_1617213912_gg.jpg",
          "https://images5.kabum.com.br/produtos/fotos/151805/notebook-acer-aspire-5-intel-core-i5-1035g1-8gb-256gb-ssd-nvidia-geforce-mx-350-15-6-full-hd-a515-55g-588g_1617213913_gg.jpg",
          "https://images5.kabum.com.br/produtos/fotos/151805/notebook-acer-aspire-5-intel-core-i5-1035g1-8gb-256gb-ssd-nvidia-geforce-mx-350-15-6-full-hd-a515-55g-588g_1617213914_gg.jpg",
        ],
      }, 
      /* 
      {
        id: ,
        category: {
          name: "",
          image_url: 
          "",
        },
        brand: {
          name: "",
          image_url: 
          "",
        },
        title: "",
        description: "",
        price: ,
        count: ,
        status: "Active",
        images: [],
      }, 
      */
    ],

    myProducts: [],

    filter: {
      brand: "",
      category: "",
    },
  },

  // Busca algo do store, aplicando alguma lógica (função), diferente do helper.
  getters: {
    productById: function(productId){
      var products = App.store.state.products;

      for (let i = 0; i < products.length; i++) {
        var product = products[i];

        if (product.id === productId) {
          return product;            
        };
      };

      return null;
    },

    myProductCount: function(productId){
      var count = 0;

      for (let i = 0; i < store.state.myProducts.length; i++) {
        var myProduct = store.state.myProducts[i];
        if (myProduct.productId === productId) {
          count++;
        }
      }
      return count;
    },

    brands: function(){
      var products = App.store.state.products;
      var brands = [];

      for (let i = 0; i < products.length; i++) {
        var product = products[i];
        // console.log("product.brand:", product.brand);
        if (!App.helpers.includes(brands, product.brand.name)) {
          // console.log("[não existe:]", product.brand.name);
          brands.push(product.brand);
        }/* else{
          console.log("[existe:]", product.brand.name);
        } */
        
      }

      return brands;
    },

    products: function(){
      // pega a referencia dos produtos e filtros
      var products = store.state.products;
      var filter = store.state.filter;

      // cria array de resposta
      var res = [];

      // faz um loop em todos os produtos
      for (let i = 0; i < products.length; i++) {
        var product = products[i];

        // verifica se existe brand no filtro e compara o brand do filtro com o brand do produto, se for diferente ele pula
        if (filter.brand && filter.brand !== product.brand.name) {
          // console.log("[filtro invertido:]", product.brand);
          continue;
        };

        if (filter.category && filter.category !== product.category.name) {
          continue;
        };

        // adiciona no array de resposta o produto
        res.push(product);
      };

      return res;
    },

    listaProdutosEscondidos() {
      // pega a referencia dos produtos e filtros
      var products = store.state.products;
      var filter = store.state.filter;

      // cria array de resposta
      var res = [];

      // faz um loop em todos os produtos
      for (let i = 0; i < products.length; i++) {
        var product = products[i];

        // verifica se existe brand no filtro e compara o brand do filtro com o brand do produto, se for diferente ele pula
        if (filter.brand !== product.brand.name) {
          // adiciona no array de resposta o produto
          res.push(product);
          continue;
        };
      };

      return res;
    },
  },

  // único lugar onde é possível alterar o state
  mutations: {
    changeCount: function (productId, newCount){
      var product = App.store.getters.productById(productId);
      product.count = newCount;
    },

    buy: function(product){
      var myProduct = {
        productId: product.id,
        price: product.price,
        count: 1,
      };
      
      store.state.myProducts.push(myProduct);
    },

    setBrand: function(brandName){
      store.state.filter.brand = brandName;
    },

    setCategory: function(categoryName){
      store.state.filter.category = categoryName;
    },
  },
};