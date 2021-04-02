console.log("Hello from js");

var str = "Hello eu sou uma string";
console.log(str);

var num = 123;
console.log(num);

var arr = [1, 2, "array", "outra string", str];
console.log(arr);

var obj = {
    key: "value",
    key2: "value2",
    str: str,
};
console.log(obj);

var a = "1";
var b = "2";
console.log(a, b, a + b);

var c = 1;
var d = 2;
console.log(c, d, c + d);

function fn() {
    console.log("hello dentro da fn");
}
fn();

var fn2 = () => {
    console.log("hello da função de seta");
}
fn2();

for (var i = 0; i < 10; i++) {
    console.log(i);
}

/* Evitar/não usar o while para não correr o risco de quebrar o código */
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}