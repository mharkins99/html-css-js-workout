console.log('Hello from Nerdbord!')

var i = 0;
function change() {
    var doc = document.getElementById("box");
    var color = ["orange", "blue", "brown", "green"];
    doc.style.border = "40px solid " + color[i];
    i = (i + 1) % color.length;
}
setInterval(change, 3000);