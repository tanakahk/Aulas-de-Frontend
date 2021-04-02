var app = document.getElementById("app");
app.style.backgroundColor = "grey";
app.style.minWidth = "500px";
app.style.minHeight = "500px";
app.style.width = "100%";
app.style.height = "100%";
app.style.display = "flex";
app.style.position = "absolute";
app.style.flexFlow = "column nowrap";
app.innerText = "sou o container APP";

var header = document.createElement("div");
app.appendChild(header);
header.style.backgroundColor = "red";
header.style.height = "13%";
header.style.width = "100%";
header.style.display = "flex";
header.style.flexFlow = "row nowrap";

header.innerText = "sou o header";

var textoheader = document.createElement("div");
textoheader.innerText = "sou o header";
textoheader.style.flex = "1 0";
textoheader.style.justifyContent = "flex-start";

header.appendChild(textoheader);

var menu = document.createElement("div");
header.appendChild(menu);
menu.style.backgroundColor = "#9b58c2";
menu.style.height = "100%";
menu.style.width = "300px";
menu.style.display = "flex";
menu.style.alignItems = "center";
menu.style.justifyContent = "flex-end";
menu.style.padding = "0 20px";
menu.innerText = "sou o menu";

var body = document.createElement("div");
app.appendChild(body);
body.style.width = "100%";
body.style.flex = "1 0";
body.innerText = "sou o body";

var footer = document.createElement("div");
app.appendChild(footer);
footer.style.backgroundColor = "green";
footer.style.height = "13%";
footer.style.width = "100%";
footer.style.justifyContent = "flex-end";
footer.innerText = "sou o footer";

