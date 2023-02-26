

var x = 20;
while (x <= 50) {
    var divTag = document.getElementById("content");
    divTag.innerHTML += `<p>${x}</p>`;
    x += 5;
}


for (var y = 20; y <= 50; y += 5) {
    var divTag = document.getElementById("content");
    divTag.innerHTML += `<p>${y}</p>`;
}