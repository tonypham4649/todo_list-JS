var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.className = "delete";
	btn.innerHTML = "delete";
	btn.addEventListener("click", function (e) {
		e.target.parentNode.remove();
	});
	li.appendChild(btn);

	for (var i = 0; i < list.length; i++) {
		list[i].addEventListener("click", liClick);
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function liClick() {
	this.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);