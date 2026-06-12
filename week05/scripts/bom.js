// select elements from the DOM
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

// wait for button clicks
buttonElement.addEventListener("click", function () {
	// Check if the user entered something
	if (inputElement.value != "") {
		// create list item and give it the value of the input
		const li = document.createElement("li");
		li.textContent = inputElement.value;
		// create a button and add a click event listener
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "❌";
		deleteBtn.addEventListener("click", function () {
			listElement.removeChild(li);
			inputElement.focus();
		});
		// add the button to the list item
		li.appendChild(deleteBtn);
		// OUTPUT: finally display the completed list item to the unordered list
		listElement.appendChild(li);
		// clear the user input field
		inputElement.value = "";
	}
	// focus the user back to the input field
	inputElement.focus();
});

let chaptersArray = getChaptersList() || [];
chaptersArray.forEach((chapter) => {
	displayChapter(chapter);
});

button.addEventListener('click', () => {
  if (input.value != '') {  // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
  }
});

function displayList(item) {
	let li = document.createElement('li');
	let deletebutton = document.createElement('button');
	li.textContent = item;
	deletebutton.textContent = '❌';
	deletebutton.classList.add('delete');
	li.append(deletebutton);
	deletebutton.addEventListener('click', function() {
		list.removeChild(li);
		deleteChapter(li.textContent); // remove the chapter from the array and update localStorage
		input.focus();
	});
	console.log(li);
	list.append(li);
}	

function setChapterList() {
	localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function getChaptersList() {
	return JSON.parse(localStorage.getItem('chapters'));
}

function deleteChapter(chapter) {
	chaptersArray = chaptersArray.filter(item => item !== chapter);
	setChapterList();
	chapter = chapter.replace('❌', '').trim(); // remove the delete button symbol and trim whitespace
	
}