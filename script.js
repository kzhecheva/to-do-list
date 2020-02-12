var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var count = 0;
var itemList = {};

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var id = count++;
	var delBtn = createDelBtn(id);
	var li = createLi();
	itemList[`${id}`] = li;
	ul.appendChild(li);
	li.appendChild(delBtn);
	input.value = "";
}

function createLi(id) {
	var newElement = document.createElement("li");
	var textNode = document.createElement("span");
	textNode.appendChild(document.createTextNode(input.value));
	newElement.appendChild(textNode);
	textNode.addEventListener("click", changeClass);
	return newElement;
}

function createDelBtn(id) {
	var delBtn = document.createElement('button');
	delBtn.innerHTML = "delete";
	delBtn.setAttribute("listId", `${id}`);
	delBtn.addEventListener("click", deleteListElement);
	return delBtn;
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

function changeClass(event) {
	event.target.classList.toggle("done");
}

function deleteListElement(event) {
	const id = parseInt(event.target.getAttribute("listId"));
	itemList[`${id}`].remove();
	itemList[`${id}`] = undefined;
}
