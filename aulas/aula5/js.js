var House = {
    size: 50,
    color: 'green',
    roomS: 3,
};
console.log(House);
House.size = 100;
console.log(House);

/* Pseudo classe
var House = function (size, color, rooms) {
    this.size = size;
    this.color = color;
    this.rooms = rooms;
};
var house1 = new House(50, "green", 3);
var house2 = new House(200, "white", 5);
console.log(casa1);
console.log(casa2);
 */

/* console.log(Window;)
console.log(Document); */

var app = document.getElementById("app");
app.style.position = "absolute";
app.style.border = "1px solid black";
app.style.width = "100%";
app.style.height = "100%";

var header = document.createElement("div");
header.style.border = "1px solid blue";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.innerHTML = "Eu sou o header";
app.appendChild(header);

var menu = document.createElement("div");
menu.style.border = "1px solid black";
menu.innerHTML = "menu";
header.appendChild(menu);

var body = document.createElement("div");
body.style.border = "1px solid green";
body.innerHTML = "Eu sou o body";
app.appendChild(body);

var footer = document.createElement("div");
footer.style.border = "1px solid pink";
footer.innerHTML = "Eu sou o footer";
app.appendChild(footer);

console.log(app);
console.log(header);
console.log(body);
console.log(footer);
