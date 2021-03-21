console.log("Executando o arquivo js.js ...");

var frase = "Eu sou uma string";
console.log(frase);

var num = 900;
console.log(num);

var arr = [frase, "e tenho o valor de", num,];
console.log(arr);

var obj = {
    string1: "Hello World",
    string2: "testando o programa",
    numero1: 1,
};
console.log(obj)

function funcao() {
    console.log(frase, obj)
};
funcao();

var seta = () => {
    console.log("Essa é a função de seta do programa")
};
seta();