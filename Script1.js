var myListItems = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myListItems.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode('\u00D7');
    span.appendChild(txt);
    myListItems[i].appendChild(span);
    span.className = "crossBtn";
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
})

var crossBtn = document.getElementsByClassName("crossBtn");
var i;
for (i = 0; i < crossBtn.length; i++) {
    crossBtn[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var addButton = document.querySelector(".addBtn");
addButton.addEventListener('click', function () {
    var li = document.createElement("li");
    var inputValue = document.getElementById("nick1").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("nick2").appendChild(li);
    }
    document.getElementById("nick1").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "crossBtn";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < crossBtn.length; i++) {
        crossBtn[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
});