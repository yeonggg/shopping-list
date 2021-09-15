let enterButton = document.getElementById("enterbutton");
let userInput = document.getElementById("userinput");
let ul = document.querySelector("ul");
let clearButton = document.getElementById("clearbutton");
let tickBox = document.querySelectorAll("#tickbox");
let closeBox = document.querySelectorAll("#closebox");

function inputLength(){
    return userInput.value.length;
}

function createListElement() {
	var li = document.createElement("li");
//add close box to new list item
	var	removeList = document.querySelector("#closebox");
        clonedremoveList = removeList.cloneNode(true);
        clonedremoveList.id = "closebox";
        li.appendChild(clonedremoveList);

        clonedremoveList.addEventListener('click', event=> 
         {clickedElement = event.target.parentElement.innerHTML = ""});
//add tick box to new list item
	var	checkList = document.querySelector("#tickbox");
        clonedcheckList = checkList.cloneNode(true);
        clonedcheckList.id = "tickbox";
        li.appendChild(clonedcheckList);

        clonedcheckList.addEventListener('click', event=> 
         {clickedElement = event.target.parentElement.classList.toggle('done')
     });

//create value inside of new list item
		li.appendChild(document.createTextNode(userInput.value));
		ul.appendChild(li);
		userInput.value = "";
}

// strike-through when the item is checked
		tickBox.forEach(element => {
    	element.addEventListener('click',event=>{
        event.target.parentElement.classList.toggle('done')
    });
});

// delete item when the close box is clicked
		closeBox.forEach(element => {
    	element.addEventListener('click',event=>{
        event.target.parentElement.innerHTML = "";
    });
});

// add new items to list by clicking the button of pressing return
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

// clear everything on the list by clicking the "clear list" button
function clearList() {
    ul.innerHTML = "";

}

clearButton.addEventListener("click", clearList);
enterButton.addEventListener("click", addListAfterClick);
userInput.addEventListener("keypress", addListAfterKeypress);